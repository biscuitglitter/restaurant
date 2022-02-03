import pic from "./pic.jpg";

function component() {
    const element = document.createElement("div");
  const addpic = new Image();
  addpic.src = pic;

   element.appendChild(addpic);
   element.innerText = "hi"
   element.classList.add("bibi");
  
  document.body.appendChild(element);
    return element;
  }

export { component };
  
