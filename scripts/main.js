// The main js file for the odin project Etch-A-Sketch
// Autor : Wahaj Javed

function init()
{
	let container = document.getElementById("container");
	console.log(container);
	for (let i=1; i<=10; i++)
	{
		for(let j=1; j<=10; j++)
		{
			let current = document.createElement("div");
			current.style.gridColumnStart = j;
			current.style.gridColumnEnd = "span 1";
			current.style.gridRowStart = i;
			current.style.gridRowEnd = "span 1";
			current.textContent="A";
			container.appendChild(current);
			console.log(container);
		}
	}
}
init()