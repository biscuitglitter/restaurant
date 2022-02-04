import "./style.css"
import { createTabContentDiv, displayNavbar } from "./display_navbar";
import { displayHomeTab, displayMenuTab } from "./display_tabs_content";

displayNavbar()
createTabContentDiv()
displayHomeTab()
displayMenuTab()

const tabs = document.querySelectorAll("[data-tab-target]")
const tabcontent = document.querySelectorAll("[dataset]")

tabs.forEach(tab => {    
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget)
    tabcontent.forEach(tabcontent => {
        tabcontent.classList.remove("active")
    })
    tabs.forEach(tab => {
      tab.classList.remove("active")
    })
    tab.classList.add("active")
    target.classList.add("active")
  })
    
})