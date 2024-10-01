const container = document.querySelector(".container");
let div = [];


function createGrid(size) {
  if (size>100){ 
    size == 100;
  }
for (i=0; i<size*size; i++){
  div[i] = document.createElement("div");
  div[i].className = "grid";
  div[i].style.height = 100/size+"%";
  container.appendChild(div[i]);

};
}

createGrid(16);

const grid = [...document.querySelectorAll(".grid")];

function getRandomColor() {
  let colorValue = Math.floor(Math.random()*256);
  return colorValue;
}
function hoverSketching(unit) {
  let colorR = getRandomColor();
  let colorG = getRandomColor();
  let colorB = getRandomColor();
  unit.addEventListener("mouseover", () => {
  unit.style.backgroundColor = "rgb(" + colorR + "," + colorG + "," + colorB + ")"; ;
  unit.style.opacity = 0.1;
  }, {useCapture:true})
  ;
}

function hoverDarkening(unit) {
  let opacity = 0;
  unit.addEventListener("mouseover", () => {
    if (opacity <= 0.9) {
    opacity += 0.1;
    }
    unit.style.opacity = opacity;
    }, 
    )
  

}
grid.forEach(hoverSketching);

grid.forEach(hoverDarkening);


const btn = document.querySelector(".regrid");
btn.addEventListener("click", () => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  createGrid(window.prompt("Insert the number of squares per side of your new grid (up to 100)", "16"));
  const gridUpdt = [...document.querySelectorAll(".grid")];
  gridUpdt.forEach(hoverSketching);
  gridUpdt.forEach(hoverDarkening);
  
})



