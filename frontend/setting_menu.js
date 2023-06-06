const selectAllSettings = document.querySelector(".setting_container");
const selectTime = document.querySelectorAll(".btn-menu-setting-timer");
let shadowColor = "#fff";
let typingTime = document.querySelector(".typing-timer");
//selectors
const settingMenu = document.querySelector(".bi-gear-fill");

// add event listener in setting menu
settingMenu.addEventListener("click", (e) => {
  console.log(e);

  const settingContainer = document.querySelector(".setting");

  if (settingContainer.classList.contains("setting_container")) {
    settingContainer.classList.remove("setting_container");
    settingContainer.classList.add("show");
  } else {
    settingContainer.classList.add("setting_container");
    settingContainer.classList.remove("show");
  }
});

//get theme from localstorage
const themeOnMount = localStorage.getItem("theme");
themeOnMount && light();

//theme toggle function
function setTheme(event) {
  const themeToggle = event.getAttribute("data-theme");
  themeToggle === "dark" ? dark() : light();
}
//dark theme functionalty
function dark() {
  localStorage.removeItem("theme");
  shadowColor = "#fff";
  document.body.classList.remove("dark-light-toggle");
}

// light theme functionalty
function light() {
  document.body.classList.add("dark-light-toggle");
  localStorage.setItem("theme", "light");
}
