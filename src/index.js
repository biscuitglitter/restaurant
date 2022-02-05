import "./style.css"
import { createNavbar, createContentTabs } from "./display_skeleton";
import { displayHomeTab, displayMenuTab } from "./display_tabs";

createNavbar()
createContentTabs()
displayHomeTab()
displayMenuTab()

const tabs = document.querySelectorAll("[data-target]")
const tabcontent = document.querySelectorAll("[data-content]")

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target)
    tabcontent.forEach(content => {
      content.classList.remove("active")
      console.log(tabcontent)
    })
    if (target === document.querySelector(".menu")) {
      document.querySelector(".menu").classList.add("active")
    }
  })
})

