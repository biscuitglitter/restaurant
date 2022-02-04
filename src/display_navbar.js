function displayNavbar() {
  const navbar = document.createElement("div");
  document.body.appendChild(navbar);
  console.log(navbar);
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");

  navbar.classList.add("navbar");
  navbar.appendChild(home);

  navbar.appendChild(menu);
  navbar.appendChild(contact);
  home.classList.add("home");
  home.dataset.tabTarget = "#home";
  menu.classList.add("menu");
  menu.dataset.tabTarget = "#menu";
  contact.classList.add("contact");
  contact.dataset.tabTarget = "#contact";

  home.innerText = "HOME";
  menu.innerText = "MENU";
  contact.innerText = "CONTACT";

  return navbar, home, menu, contact;
}

function createTabContentDiv() {
  const tab = document.createElement("div");
  tab.classList.add("tab-content");
  document.body.appendChild(tab);

  const homediv = document.createElement("div");
  tab.appendChild(homediv);
  homediv.id = "home";
  homediv.setAttribute("dataset", "data-tab-content")

  const menudiv = document.createElement("div");
  tab.appendChild(menudiv);
  menudiv.id = "menu";
  menudiv.setAttribute("dataset", "data-tab-content")

  const contactdiv = document.createElement("div");
  tab.appendChild(contactdiv);
  contactdiv.id = "contact";
  contactdiv.setAttribute("dataset", "data-tab-content")

  return tab, homediv, contactdiv, menudiv
}

export { displayNavbar, createTabContentDiv };
