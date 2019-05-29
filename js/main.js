var ul = document.querySelector(".main-navigation");
var menu = document.querySelector(".menu-hidden");
// menu.addEventListener("click", function(e) {
//   ul.classList.toggle("show");

//   if (a == "visible") {
//     console.log(1);
//     ul.setAttribute("visibility", "hidden");
//   } else {
//     ul.setAttribute("visibility", "visible");
//     console.log(2);
//   }
// });
menu.onclick = function(e) {
  ul.classList.toggle("show");
  console.log(ul);
};
