// Day 9: DOM Manipulation

// Activity 1: Selecting and Manipulating Elements
document.getElementById("elementId").textContent = "New Text Content";
document.querySelector(".elementClass").style.backgroundColor = "lightblue";

// Activity 2: Creating and Appending Elements
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div.";
document.body.appendChild(newDiv);

let newLi = document.createElement("li");
newLi.textContent = "New list item";
document.querySelector("ul").appendChild(newLi);

// Activity 3: Removing Elements
let elementToRemove = document.getElementById("elementToRemove");
elementToRemove.parentNode.removeChild(elementToRemove);

let list = document.querySelector("ul");
list.removeChild(list.lastElementChild);

// Activity 4: Modifying Attributes and Classes
let imgElement = document.querySelector("img");
imgElement.src = "newImageSource.jpg";

let element = document.querySelector(".elementClass");
element.classList.add("newClass");
element.classList.remove("oldClass");

// Activity 5: Event Handling
document.getElementById("buttonId").addEventListener("click", function () {
  document.getElementById("paragraphId").textContent =
    "Text changed on button click!";
});

document
  .getElementById("hoverElement")
  .addEventListener("mouseover", function () {
    this.style.borderColor = "red";
  });

// Feature Request Scripts

// 1. Text Content Manipulation Script
document.getElementById("textElementId").textContent = "Changed Text Content";

// 2. Element Creation Script
let divElement = document.createElement("div");
divElement.textContent = "Created new div element";
document.body.appendChild(divElement);

// 3. Element Removal Script
let elementToRemove2 = document.querySelector("#removeElementId");
elementToRemove2.parentNode.removeChild(elementToRemove2);

// 4. Attribute Modification Script
let imageElement = document.querySelector("img");
imageElement.setAttribute("src", "newImagePath.jpg");

// 5. Event Handling Script
document.getElementById("clickButtonId").addEventListener("click", function () {
  document.getElementById("clickParagraphId").textContent = "Button clicked!";
});

document
  .getElementById("hoverElementId")
  .addEventListener("mouseover", function () {
    this.style.color = "blue";
  });
