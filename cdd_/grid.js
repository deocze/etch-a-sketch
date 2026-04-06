let container = document.querySelector(".drawingGrid");

for (let i = 0; i < 16; i++){
    let containingDiv = document.createElement("div");
    containingDiv.className = "bigDiv"
    container.append(containingDiv);
    
    for (let i = 0; i < 16; i++){
    let newDiv = document.createElement("div");
    newDiv.className = "lilDiv";
    containingDiv.append(newDiv);

    newDiv.addEventListener("mouseover",() => newDiv.style.backgroundColor = "black")
    }

}