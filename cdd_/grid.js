let container = document.querySelector(".drawingGrid");
let gridButton = document.querySelector("button.gridSize");

let gridValue = 0;
gridButton.addEventListener(
  "click",
  () =>
    (gridValue = prompt("How many squares do you want in the grid (1-100)")),
);

for (let i = 0; i < 16; i++) {
  let containingDiv = document.createElement("div");
  containingDiv.className = "bigDiv";
  container.append(containingDiv);

  for (let i = 0; i < 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "lilDiv";
    containingDiv.append(newDiv);
    let rgb = `${random()}`;
    newDiv.addEventListener(
      "mouseover",
      () => (newDiv.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`),
    );
  }
}

function random() {
  let num = Math.floor(Math.random() * 255);
  return num;
}
