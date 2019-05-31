// var ul = document.querySelector(".main-navigation");
// var menu = document.querySelector(".menu-hidden");
// menu.addEventListener("click", function(e) {
//   ul.classList.toggle("show");
// });
//menu.onclick = function(e) {
// ul.classList.toggle("show");
// console.log(ul);

//console.log(ul);
//};
// $(".menu-hidden").on("click", function() {
//   $(".main-navigation").slideToggle(300, function() {
//     if ($(this).css("display") == "none") {
//       $(this).removeAttr("style");
//     }
//   });
// });

// for (let i = 0; i < document.querySelectorAll("a").length; i++) {
//   document.querySelectorAll("a")[i].addEventListener("click", function(e) {
//     e.preventDefault();
//     // this.style.display = "none";
//     console.log(this);
//   });
// }
// document.addEventListener("click", function(e) {
//   console.log(e.target.tagName);
//   if (e.target.tagName) {
//     e.target.style.display = "none";
//   }
// });
var spans = document.querySelectorAll(".foto span");
var fotos = document.querySelectorAll(".foto");
console.log(fotos);
for (let i = 0; i < spans.length; i++) {
  spans[i].addEventListener("click", function(e) {
    // fotos[i].style.transform = "scale(1)";
    if (fotos[i].style.transform == "scale(1)") {
      fotos[i].style.transform = "scale(1.2)";
    } else {
      fotos[i].style.transform = "scale(1)";
    }
  });
}
