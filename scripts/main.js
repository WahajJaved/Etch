// The main js file for the odin project Etch-A-Sketch
// Autor : Wahaj Javed

function init()
{
	let container = document.getElementById("container");
	container.innerHTML = "";
	for (let i = 1; i <= size; i++) 
	{
		for (let j = 1; j <= size; j++) 
		{
			let current = document.createElement("div");
			current.classList.add("gridElements");
			current.style.gridRowStart = i;
			current.style.gridColumnStart = j;
			container.appendChild(current);
		}
	}
	attachHandlers();
}
function attachHandlers()
{
	let container = document.querySelectorAll(".gridElements");
	container.forEach(element => {
		element.addEventListener("pointerenter", (e) =>
		{	
			if (color == 0)
				e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
			else
			{
				e.target.style.opacity = '1.0';
				e.target.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
			}
		});
		//console.log(element);
	});

}
function changeColor(e)
{
	console.log(e.target);
	if (e.target.localName == "button")
	{
		if (color == 0)
		{
			color = 1;
			e.target.textContent = "Black and White";
		}
		else 
		{
			color = 0;
			e.target.textContent = "Random Color";
		}
	}
	attachHandlers();
	init();
}
function changeSize()
{
	let container = document.getElementById("container");
	container.innerHTML = "";
	let newSize = prompt("Enter the size");
	container.style.gridTemplateRows= "repeat(" + newSize + ", 1fr)";
	container.style.gridTemplateColumns = "repeat(" + newSize + ", 1fr)";

	for (let i = 1; i <= newSize; i++) 
	{
		for (let j = 1; j <= newSize; j++) 
		{
			let current = document.createElement("div");
			current.classList.add("gridElements");
			current.style.gridRowStart = i;
			current.style.gridColumnStart = j;
			container.appendChild(current);
		}
	}
	attachHandlers();
}
let size = 10;
let color = 0;
let button = document.querySelector("#sizeButton");
button.addEventListener("click", changeSize);
button = document.querySelector('#colorButton');
button.addEventListener("click", changeColor);
init();
attachHandlers();