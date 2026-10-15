const SLUG_RE = /^[a-z0-9-]+$/i;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function parseFrontmatter(text) {
  if (!text.startsWith("---")) {
    return { meta: {}, body: text };
  }
  const end = text.indexOf("\n---", 3);
  if (end === -1) {
    return { meta: {}, body: text };
  }
  const meta = {};
  for (const line of text.slice(3, end).trim().split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  return { meta, body: text.slice(end + 4).replace(/^\s+/, "") };
}

function formatDate(value) {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function renderMarkdown(source) {
  const defs = {};
  let body = source.replace(/^\[\^([^\]]+)\]:\s*(.+)$/gm, (_, id, text) => {
    defs[id] = text.trim();
    return "";
  });

  const order = [];
  body = body.replace(/\[\^([^\]]+)\]/g, (_, id) => {
    if (!order.includes(id)) order.push(id);
    return `%%CITE:${id}%%`;
  });

  let html = marked.parse(body.trim());
  html = html.replace(/%%CITE:([^%]+)%%/g, (_, id) => {
    const n = order.indexOf(id) + 1;
    return `<sup class="ref"><a href="#fn-${id}">${n}</a></sup>`;
  });

  if (order.length) {
    const items = order
      .map((id) => {
        const text = defs[id] || "";
        const inner =
          typeof marked.parseInline === "function"
            ? marked.parseInline(text)
            : escapeHtml(text);
        return `<li id="fn-${id}">${inner}</li>`;
      })
      .join("");
    html += `<section class="footnotes"><h2>References</h2><ol>${items}</ol></section>`;
  }

  return html;
}

async function loadPost(slug) {
  const response = await fetch(`posts/${slug}.md`);
  if (!response.ok) {
    throw new Error("missing");
  }
  const { meta, body } = parseFrontmatter(await response.text());
  return {
    slug,
    title: meta.title || slug,
    date: meta.date || "",
    summary: meta.summary || "",
    body,
  };
}

async function renderList() {
  const root = document.getElementById("post-list");
  if (!root) return;

  const response = await fetch("posts/index.json");
  if (!response.ok) {
    root.innerHTML = "<li>Could not load posts.</li>";
    return;
  }

  const slugs = await response.json();
  if (!Array.isArray(slugs) || slugs.length === 0) {
    root.innerHTML = "<li>No posts yet.</li>";
    return;
  }

  const posts = (
    await Promise.all(
      slugs.filter((slug) => SLUG_RE.test(slug)).map(async (slug) => {
        try {
          return await loadPost(slug);
        } catch {
          return null;
        }
      })
    )
  ).filter(Boolean);

  if (posts.length === 0) {
    root.innerHTML = "<li>No posts yet.</li>";
    return;
  }

  root.innerHTML = posts
    .map(
      (post) => `
        <li>
          <h2><a href="post.html?p=${encodeURIComponent(post.slug)}">${escapeHtml(post.title)}</a></h2>
          ${post.date ? `<p class="post-date">${escapeHtml(formatDate(post.date))}</p>` : ""}
          ${post.summary ? `<p>${escapeHtml(post.summary)}</p>` : ""}
        </li>`
    )
    .join("");
}

async function renderPost() {
  const root = document.getElementById("post");
  if (!root) return;

  const slug = new URLSearchParams(location.search).get("p") || "";
  if (!SLUG_RE.test(slug)) {
    root.innerHTML = "<p>Post not found. <a href='blogs.html'>Back to blogs</a></p>";
    return;
  }

  try {
    const post = await loadPost(slug);
    document.title = `${post.title} · Alireza Noroozi`;
    root.innerHTML = `
      <h1 class="page-title">${escapeHtml(post.title)}</h1>
      ${post.date ? `<p class="post-date">${escapeHtml(formatDate(post.date))}</p>` : ""}
      <div class="markdown">${renderMarkdown(post.body)}</div>
    `;
  } catch {
    root.innerHTML = "<p>Post not found. <a href='blogs.html'>Back to blogs</a></p>";
  }
}

if (document.getElementById("post-list")) {
  renderList();
}

if (document.getElementById("post")) {
  renderPost();
}
