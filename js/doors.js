let hoverImages = document.getElementById("group1").getElementsByTagName("img");
hoverImages = Array.from(hoverImages);
console.log(hoverImages);

let zoomedImage = document.getElementsByClassName("zoomed");
zoomedImage = Array.from(zoomedImage).pop();
console.log(zoomedImage.src);

Array.from(hoverImages).forEach((hoverImage) => {
  hoverImage.addEventListener("mouseover", (e) => {
    let hoverTarget = e.currentTarget.src;
    zoomedImage.src = hoverTarget;
  });
});
