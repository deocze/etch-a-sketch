let container = document.querySelector(".drawingGrid");
let gridButton = document.querySelector("button.gridSize");

let gridValue = 16;

generateGraph(gridValue);

gridButton.addEventListener("click", () => {
  gridValue = prompt(
    "How many squares by how much squares do you want in the grid (1-100)",
  );
  generateGraph(gridValue);
});

function generateGraph(gridValue) {
  container.replaceChildren();
  for (let i = 0; i < gridValue; i++) {
    let containingDiv = document.createElement("div");
    containingDiv.className = "bigDiv";
    container.append(containingDiv);

    for (let i = 0; i < gridValue; i++) {
      let newDiv = document.createElement("div");
      newDiv.className = "lilDiv";
      containingDiv.append(newDiv);
      newDiv.addEventListener(
        "mouseover",
        () =>
          (newDiv.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`),
      );
    }
  }
}

function random() {
  let num = Math.floor(Math.random() * 255);
  return num;
}
