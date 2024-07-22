// Day 10: Event Handling

// Activity 1: Basic Event Handling
document.getElementById("buttonId").addEventListener("click", function () {
  document.getElementById("paragraphId").textContent = "Button clicked!";
});

document.getElementById("imageId").addEventListener("dblclick", function () {
  this.style.display = this.style.display === "none" ? "block" : "none";
});

// Activity 2: Mouse Events
document
  .getElementById("hoverElementId")
  .addEventListener("mouseover", function () {
    this.style.backgroundColor = "lightblue";
  });

document
  .getElementById("hoverElementId")
  .addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });

// Activity 3: Keyboard Events
document
  .getElementById("inputFieldId")
  .addEventListener("keydown", function (event) {
    console.log(`Key pressed: ${event.key}`);
  });

document.getElementById("inputFieldId").addEventListener("keyup", function () {
  document.getElementById("outputParagraphId").textContent = this.value;
});

// Activity 4: Form Events
document.getElementById("formId").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(new FormData(this));
});

document
  .getElementById("selectDropdownId")
  .addEventListener("change", function () {
    document.getElementById(
      "outputParagraphId"
    ).textContent = `Selected: ${this.value}`;
  });

// Activity 5: Event Delegation
document.getElementById("listId").addEventListener("click", function (event) {
  if (event.target && event.target.nodeName === "LI") {
    console.log(`List item clicked: ${event.target.textContent}`);
  }
});

document.getElementById("parentId").addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("childClass")) {
    console.log(`Child element clicked: ${event.target.textContent}`);
  }
});

// Feature Request Scripts

// 1. Click Event Script
document.getElementById("clickButtonId").addEventListener("click", function () {
  document.getElementById("clickParagraphId").textContent =
    "Click event triggered!";
});

// 2. Mouse Events Script
document
  .getElementById("mouseElementId")
  .addEventListener("mouseover", function () {
    this.style.backgroundColor = "yellow";
  });

document
  .getElementById("mouseElementId")
  .addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });

// 3. Keyboard Events Script
document
  .getElementById("keyboardInputId")
  .addEventListener("keydown", function (event) {
    console.log(`Key down: ${event.key}`);
  });

document
  .getElementById("keyboardInputId")
  .addEventListener("keyup", function () {
    document.getElementById("keyOutputId").textContent = this.value;
  });

// 4. Form Events Script
document
  .getElementById("submitFormId")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(new FormData(this));
  });

document
  .getElementById("selectDropdownId")
  .addEventListener("change", function () {
    document.getElementById(
      "selectOutputId"
    ).textContent = `Changed to: ${this.value}`;
  });

// 5. Event Delegation Script
document
  .getElementById("listParentId")
  .addEventListener("click", function (event) {
    if (event.target && event.target.nodeName === "LI") {
      console.log(`List item clicked: ${event.target.textContent}`);
    }
  });

document
  .getElementById("dynamicParentId")
  .addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("dynamicChildClass")) {
      console.log(`Dynamic child element clicked: ${event.target.textContent}`);
    }
  });
