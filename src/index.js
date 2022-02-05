import "./style.css"
import { createNavbar, createContentTabs } from "./display_skeleton";
import { displayHomeTab, displayMenuTab, displayContactTab } from "./display_tabs";

createNavbar()
createContentTabs()
displayHomeTab()
displayMenuTab()
displayContactTab()

const tabs = document.querySelectorAll("[data-target]")
const tabcontent = document.querySelectorAll("[data-content]")

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target)
    tabcontent.forEach(content => {
      content.classList.remove("active")
    })
    if (target === document.querySelector(".menu")) {
      document.getElementById("home").style.display = "none"
      document.getElementById("contact").style.display = "none"
      document.querySelector(".menu").classList.add("active")
      document.getElementById("home").classList.remove("active")
    } else if (target === document.querySelector(".home")) {
      document.getElementById("home").style.display = ""
      document.getElementById("home").classList.add("active")
      document.querySelector(".menu").classList.remove("active")
    } else if (target === document.querySelector(".contact")) {
      document.getElementById("home").style.display = "none"
      document.getElementById("contact").style.display = "";
      document.getElementById("contact").classList.add("active")
    }
  })
})
 
