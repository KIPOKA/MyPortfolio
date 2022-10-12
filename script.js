var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabs of tabcontent) {
    tabs.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("menuId");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};

// The second command to display

const scriptURL =
  "https://script.google.com/macros/s/AKfycbz3VjPhHrM1SAxK3DsbB_gYZZk4ouI93zNRyvTxpFnIZnkANMS8QD-Q1qaNvzDp2fphxg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTM = "Message has been successfully sent!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
