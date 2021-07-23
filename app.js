// function to change color
function changeColorHover(event) {
	// create the first color variable based on the window width and event.pageX
	const firstColor = (event.pageX * 255) / window.innerWidth;
	// create the second color variable based on the window height and event.pageY
	const secondColor = (event.pageY * 255) / window.innerHeight;
	// using the numbers from first color and second color to get rgb colors and store it in a variable
	const colorCombination = `rgb(${firstColor},0,${secondColor})`;
	// Set the background color of the body to the colors combination variable
	document.body.style.backgroundColor = colorCombination;
}

// call add event listener on the document object, to listen to the mousemove event and change colors
document.addEventListener("mousemove", changeColorHover);
