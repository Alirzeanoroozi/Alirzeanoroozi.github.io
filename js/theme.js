// Colour theme: follows the OS by default, overridable per visitor.
// Loaded in <head> so the stored choice applies before first paint.
(function () {
  const KEY = "theme";

  function stored() {
    try {
      const value = localStorage.getItem(KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch {
      return null;
    }
  }

  function apply(theme) {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  apply(stored());

  function current() {
    const value = document.documentElement.getAttribute("data-theme");
    if (value === "light" || value === "dark") return value;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function wire() {
    const buttons = document.querySelectorAll("[data-theme-toggle]");
    if (!buttons.length) return;

    const paint = () => {
      const next = current() === "dark" ? "light" : "dark";
      for (const button of buttons) {
        button.setAttribute("title", `Switch to ${next} theme`);
        const icon = button.querySelector("[data-theme-icon]");
        if (icon) icon.textContent = current() === "dark" ? "☀" : "☾";
      }
    };

    for (const button of buttons) {
      button.addEventListener("click", () => {
        const next = current() === "dark" ? "light" : "dark";
        apply(next);
        try {
          localStorage.setItem(KEY, next);
        } catch {
          /* private mode or blocked storage: the choice just will not persist */
        }
        paint();
      });
    }

    paint();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})();
