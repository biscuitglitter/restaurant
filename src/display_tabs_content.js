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
 
function menuSection() {

  const display = document.createElement("div")
  document.body.appendChild(display)
  display.appendChild(menuSection)

  const menudiv = document.getElementById("menu")

  const menuSection = document.createElement("div")
  menuSection.classList.add("menuSection")

  menudiv.appendChild(menuSection)

  const title = document.createElement("h2")
  title.innerText = "Menu"

  menuSection.appendChild(title)

  const starters = document.createElement("h2")
  starters.innerText = "Starters"

  const textInside1 = document.createElement("h3")
  const textInside2 = document.createElement("h3")

  
  textInside1.innerText = "Camembert Blinis with Raspberry Jam"
  textInside2.innerText = "Ibêrico Serrano Ham Toast with Tomato Jam"

  const mainCourse = document.createElement("h2")

  mainCourse.innerText = "Main Course"

  const textInside3 = document.createElement("h3")
  const textInside4 = document.createElement("h3")

  textInside3.innerText = "Salmon specialty with basical & parmigiano sauce"
  textInside4.innerText = "Steak tartar with avocado and passion fruit"

  menuSection.appendChild(title)
  menuSection.appendChild(starters)
  menuSection.appendChild(textInside1)
  menuSection.appendChild(textInside2)
  menuSection.appendChild(textInside3)
  menuSection.appendChild(textInside4)

  return menuSection
}

function displayMenuTab() {
  menuSection()
}


function displayHomeTab() {
  heroSection();
  restaurantName();
}

export { displayHomeTab, displayMenuTab};
