var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//  --------------sidemenu--------------------

var sidemeu = document.getElementById("sidemenu");
var B_dy = document.getElementById("bdy");

function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-200px";
}

function test() {
  console.log("testt");
}
var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-100%";
}
var sidemeu = document.getElementById("sidemenu");
var menuBtn = document.querySelector(".menu-btn");

function openmenu() {
  sidemeu.classList.add("active");
  sidemeu.style.right = "0";
  if (menuBtn) menuBtn.style.display = "none";
}

function closemenu() {
  sidemeu.classList.remove("active");
  sidemeu.style.right = "-300px"; // match CSS hidden offset
  if (menuBtn) menuBtn.style.display = "block";
}

test();

// ------------connecting google sheet --------------
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxbAEsJQm5j9fuyYHLbOrmpijCWdbtJuWI4s6PBvnippw1789Zt_5GRWwF8LJYeB7vU/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent succesfully!!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 500);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
// // this code is for changing the theme

// var dark = document.getElementById("dark");

// dark.onclick = function () {
//   document.body.classList.toggle("dark-theme");
// };
