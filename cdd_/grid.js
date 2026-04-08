let container = document.querySelector(".drawingGrid");
let gridButton = document.querySelector("button.gridSize");

let gridValue = 16;

generateGraph(gridValue);

gridButton.addEventListener("click", () => {
  gridValue = prompt(
    "How many squares by how much squares do you want in the grid (1-100)",
  );
  if (gridValue <= 100) {
    generateGraph(gridValue);
  } else {
    alert("Size too big (Make it less than or equal to 100");
  }
});

function generateGraph(gridValue) {
  container.replaceChildren();
  let op = 0;
  for (let i = 0; i < gridValue; i++) {
    let containingDiv = document.createElement("div");
    containingDiv.className = "bigDiv";
    container.append(containingDiv);

    for (let i = 0; i < gridValue; i++) {
      let newDiv = document.createElement("div");
      newDiv.className = "lilDiv";
      containingDiv.append(newDiv);
      newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
        if (op != 100) {
          newDiv.style.opacity = `${(op = op + 10)}%`;
          console.log(op);
        } else {
          newDiv.style.opacity = `${op}%`;
        }
      });
    }
  }
}

function random() {
  let num = Math.floor(Math.random() * 255);
  return num;
}
