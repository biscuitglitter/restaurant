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
  menuSection.appendChild(starters)

  const textInside1 = document.createElement("h3")
  const textInside2 = document.createElement("h3")
  
  textInside1.innerText = "Camembert Blinis with Raspberry Jam"
  textInside2.innerText = "Ibêrico Serrano Ham Toast with Tomato Jam"

  menuSection.appendChild(textInside1)
  menuSection.appendChild(textInside2)

  const mainCourse = document.createElement("h2")
  mainCourse.innerText = "Main Course"
  menuSection.appendChild(mainCourse)

  const textInside3 = document.createElement("h3")
  const textInside4 = document.createElement("h3")

  textInside3.innerText = "Salmon specialty with basical & parmigiano sauce"
  textInside4.innerText = "Steak tartar with avocado and passion fruit"

  menuSection.appendChild(textInside3)
  menuSection.appendChild(textInside4)

  const dessert = document.createElement("h2")
  dessert.innerText = "Desserts"
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

function displayHomeTab() {
  heroSection();
  restaurantName();
}

function displayMenuTab() {
  makeMenu()
}

export { displayHomeTab, displayMenuTab };
