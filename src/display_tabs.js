function heroSection() {
  const homediv = document.getElementById("home");
  const heroSection = document.createElement("div");
  heroSection.classList.add("heroSection");

  homediv.appendChild(heroSection);

  return heroSection;
}

function restaurantName() {
  const homediv = document.getElementById("home");
  const restaurantName = document.createElement("div");

  restaurantName.innerText = "Lazare.";
  restaurantName.classList.add("restaurantName");
  homediv.appendChild(restaurantName);

  return restaurantName;
}
 
function makeMenu() {
  const menu = document.getElementById("menu")

  const menuSection = document.createElement("div")
  menuSection.classList.add("menuSection")

  menu.appendChild(menuSection)

  const title = document.createElement("h1")
  title.innerText = "Menu"
  menuSection.appendChild(title)

  const starters = document.createElement("h2")
  starters.innerText = "Starters"
  starters.classList.add("starters")
  menuSection.appendChild(starters)

  const textInside1 = document.createElement("h3")
  const textInside2 = document.createElement("h3")
  
  textInside1.innerText = "Camembert Blinis with Raspberry Jam"
  textInside2.innerText = "Ibêrico Serrano Ham Toast with Tomato Jam"

  menuSection.appendChild(textInside1)
  menuSection.appendChild(textInside2)

  const mainCourse = document.createElement("h2")
  mainCourse.innerText = "Main Course"
  mainCourse.classList.add("mainCourse")
  menuSection.appendChild(mainCourse)

  const textInside3 = document.createElement("h3")
  const textInside4 = document.createElement("h3")

  textInside3.innerText = "Salmon specialty with basical & parmigiano sauce"
  textInside4.innerText = "Steak tartar with avocado and passion fruit"

  menuSection.appendChild(textInside3)
  menuSection.appendChild(textInside4)

  const dessert = document.createElement("h2")
  dessert.innerText = "Desserts"
  dessert.classList.add("dessert")
  menuSection.appendChild(dessert)
  
  const textInside5 = document.createElement("h3")
  const textInside6 = document.createElement("h3")

  textInside5.innerText = "Cheesecake with Mango & caramel jam"
  textInside6.innerText = "White chocolate cage with melted coffee"

  menuSection.appendChild(textInside5)
  menuSection.appendChild(textInside6)

  const cupcake = document.createElement("div");
  cupcake.classList.add("cupcake")
  menuSection.appendChild(cupcake);  

  return menuSection
}

function makeContactTab() {

  const contact = document.getElementById("contact")

  const contactdiv = document.createElement("div")
  contactdiv.classList.add("contactdiv")

  const text = document.createElement("h1")
  text.classList.add("text")
  const aboutUsImg = document.createElement("div")
  aboutUsImg.classList.add("aboutUsImg")
  const textInside = document.createElement("p")
  textInside.classList.add("textInside")

  contact.appendChild(contactdiv)
  contactdiv.appendChild(text)
  contactdiv.appendChild(aboutUsImg)
  contactdiv.appendChild(textInside)

  text.innerText = "About Us"
  textInside.innerText = "Since our modest beginnings in 2005 with a little space in Toronto’s stylish Yorkville locale, ‘Organization Name’ ‘s development has been enlivened with the energy to cook and serve solid, Indian-roused takeout food."

  return contactdiv
}

function displayContactTab() {
  makeContactTab()
}

function displayHomeTab() {
  heroSection();
  restaurantName();
}

function displayMenuTab() {
  makeMenu()
}

export { displayHomeTab, displayMenuTab, displayContactTab };
