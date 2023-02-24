window.addEventListener(
  "scroll",
  () => {
    const parent = document.getElementById("parallax-container");
    const children = parent.getElementsByTagName("parallax-object");
    for (let i = 0; i < children.length; i++) {
      children[i].style.transform =
        "translateY(-" +
        (window.pageYOffset * (i >= children.length - 2 ? i + 1 : i)) /
          children.length +
        "px)";
      children[i].style.webkitTransform =
        "translateY(-" +
        (window.pageYOffset * (i >= children.length - 2 ? i + 1 : i)) /
          children.length +
        "px)";
      children[i].style.msTransform =
        "translateY(-" +
        (window.pageYOffset * (i >= children.length - 2 ? i + 1 : i)) /
          children.length +
        "px)";
    }
  },
  false
);
