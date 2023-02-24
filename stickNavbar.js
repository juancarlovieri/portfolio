window.onscroll = function() {
  myFunction();
};
const header = document.getElementById("main-navbar");
const content = document.getElementById("first-section");
console.log(content);
const sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    content.classList.add("extra-padding");
  } else {
    header.classList.remove("sticky");
    content.classList.remove("extra-padding");
  }
}
