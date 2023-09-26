var x1 = document.querySelector(".stars");
console.log(x1);
var con = document.getElementsByClassName("fa-star");
console.log(con);
function okla(x) {
    x.classList.remove("fa-regular");
    x.classList.add("fa-solid");
    x.style.color = "#ff0";
}
// for (var x = 0; x <= con.length; i++) {
//     con[i].onmouseover = function () {
//         for (var i = 0; i < con.length; i++) {
//             var test = 0;
//             con[i].onmouseover = function () {
//                 test++;
//             };

//             alert(test);
//         }
//         if (test != 0) {
//
//             alert("ok");
//         }
//     };
// }
