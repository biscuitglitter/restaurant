function navbarEl() {
  const navbar = document.createElement("div");
  document.body.appendChild(navbar);
  console.log(navbar)
  const home = document.createElement("a");
  const menu = document.createElement("a");
  const contact = document.createElement("a");

  navbar.classList.add("navbar")
  navbar.appendChild(home);
  navbar.appendChild(menu);
  navbar.appendChild(contact);
  home.classList.add("home");
  menu.classList.add("menu");
  contact.classList.add("contact");

  home.innerText = "HOME";
  menu.innerText = "MENU";
  contact.innerText = "CONTACT";
  
  return navbar, home, menu, contact;
}

export { navbarEl };
