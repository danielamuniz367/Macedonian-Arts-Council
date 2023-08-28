Array.from(document.querySelectorAll(".thumbnails img")).forEach(
  (hoverImage) => {
    hoverImage.addEventListener("mouseover", (e) => {
      let hoverTarget = e.currentTarget.src;
      e.currentTarget.closest(
        ".thumbnails"
      ).previousSibling.previousSibling.src = hoverTarget;
    });
  }
);
