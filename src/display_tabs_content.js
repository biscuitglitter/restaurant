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
 

function displayHomeTab() {
  heroSection();
  restaurantName();
}

export { displayHomeTab };
