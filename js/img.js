// Hide optional thumbnails that have no image file yet, so an empty slot
// collapses instead of showing a broken-image icon.
for (const img of document.querySelectorAll(".thumb")) {
  const hide = () => {
    const wrap = img.closest(".thumb-wrap") || img;
    wrap.remove();
  };
  if (img.complete) {
    if (!img.naturalWidth) hide();
  } else {
    img.addEventListener("error", hide);
  }
}
