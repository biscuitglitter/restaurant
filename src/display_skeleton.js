function createNavbar() {
  const navbar = document.createElement("div");

  document.body.appendChild(navbar);
  navbar.classList.add("navbar");

  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");
  
  navbar.appendChild(home);
  navbar.appendChild(menu);
  navbar.appendChild(contact);

  home.dataset.target = "#home";
  menu.dataset.target = "#menu";
  contact.dataset.target = "#contact";

  home.innerText = "HOME";
  menu.innerText = "MENU";
  contact.innerText = "CONTACT";

  return navbar, home, menu, contact;
}

function createContentTabs() {
  
  const tab = document.createElement("div");
  tab.classList.add("tabContent");
  document.body.appendChild(tab);

  const homediv = document.createElement("div");
  tab.appendChild(homediv);
  homediv.id = "home";
  homediv.classList.add("home");
  homediv.classList.add("active")

  const menudiv = document.createElement("div");
  tab.appendChild(menudiv);
  menudiv.classList.add("menu");
  menudiv.id = "menu";


  const contactdiv = document.createElement("div");
  tab.appendChild(contactdiv);
  contactdiv.classList.add("contact");
  contactdiv.id = "contact";

  homediv.dataset.content = "#homediv";
  menudiv.dataset.content = "#menudiv";
  contactdiv.dataset.content = "#contactdiv";

  return tab, homediv, contactdiv, menudiv
}


export { createNavbar, createContentTabs };
