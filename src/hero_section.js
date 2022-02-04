function heroSection() {
  const div = document.createElement("div");
  document.body.appendChild(div);
  div.classList.add("heroSection");

  return div;
}

function fixedText() {
  const div = document.createElement("div")
  div.innerText = "Lazare."
  document.body.appendChild(div)
  div.classList.add("fixedText")
}

export { fixedText, heroSection };
