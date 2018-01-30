let numberOfSquares = 6;
let colours = [];
let pickedColour;
let colourSquares = document.querySelectorAll('.colourSquare');
let colourDisplay = document.getElementById('colourDisplay');
let pickedMessage = document.getElementById('pickedMessage');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#resetButton');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}
	
function setupModeButtons() {
	for (let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function () {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'Easy' ? numberOfSquares = 3 : numberOfSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for (let i = 0; i < colourSquares.length; i++) {
		//Add initial colours to the squares

		//Add click listeners to the squares
		colourSquares[i].addEventListener('click', function () {
			//Grab colour of clicked square
			let clickedColour = this.style.backgroundColor;
			//Compare colour to pickedColour
			if (clickedColour === pickedColour) {
				pickedMessage.textContent = 'Yay! That\'s right!';
				changeColours(clickedColour);
				h1.style.backgroundColor = pickedColour;
				resetButton.textContent = 'Play Again?';
			} else {
				this.style.backgroundColor = '#322c2c';
				pickedMessage.textContent = 'Almost there!';
			}
		});
	}
}




function reset() {
	//generate new colours
	colours = makeRandomColours(numberOfSquares);
	//pick a new random colour from array
	pickedColour = pickColour();
	//change colour display to match picked colour
	colourDisplay.textContent = pickedColour;
	resetButton.textContent = 'New Colours';
	pickedMessage.textContent = '';
	//change colours of squares
	for (let i = 0; i < colourSquares.length; i++) {
		if (colours[i]) {
			colourSquares[i].style.display = 'block';
			colourSquares[i].style.backgroundColor = colours[i];
		} else {
			colourSquares[i].style.display = 'none';
		}
	}
	h1.style.backgroundColor = '#322c2c';
}

resetButton.addEventListener('click', function () {
	reset();
});


function changeColours(colour) {
	//loop through the squares
	for (let i = 0; i < colourSquares.length; i++) {
		//change every colour to match the given colour
		colourSquares[i].style.backgroundColor = colour;
	}
}

function pickColour() {
	let randomNumber = Math.floor(Math.random() * colours.length);
	return colours[randomNumber];
}

function makeRandomColours(num) {
	//make an array
	let arr = [];
	//repeat num of times
	for (let i = 0; i < num; i++) {
		//get random colour and push into array	
		arr.push(randomColours());
	}
	//return that array
	return arr;
}

function randomColours() {
	//pick a ''red'' from 0 - 255
	let r = Math.floor(Math.random() * 256);
	//pick a ''green'' from 0 - 255
	let g = Math.floor(Math.random() * 256);
	//pick a ''blue'' from 0 - 255
	let b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ',' + ' ' + g + ',' + ' ' + b + ')';
}