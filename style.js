let numberOfSquares = 6;
let colours = makeRandomColours(numberOfSquares);
let colourSquares = document.querySelectorAll('.colourSquare');
let pickedColour = pickColour();
let colourDisplay = document.getElementById('colourDisplay');
let pickedMessage = document.getElementById('pickedMessage');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#resetButton');
let easyButton = document.getElementById('easyBtn');
let hardButton = document.getElementById('hardBtn');


easyButton.addEventListener('click', function () {
	hardButton.classList.remove('selected');
	easyButton.classList.add('selected');
	numberOfSquares = 3;
	colours = makeRandomColours(numberOfSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	easyButton.style.color = 'white';
	hardButton.style.color = 'darkslateblue';
	for (let i = 0; i < colourSquares.length; i++) {
		if (colours[i]) {
			colourSquares[i].style.background = colours[i];
		} else {
			colourSquares[i].style.display = 'none';
		}
	}
});

hardButton.addEventListener('click', function () {
	easyButton.classList.remove('selected');
	hardButton.classList.add('selected');
	numberOfSquares = 6;
	colours = makeRandomColours(numberOfSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	hardButton.style.color = 'white';
	easyButton.style.color = 'darkslateblue';
	for (let i = 0; i < colourSquares.length; i++) {
		colourSquares[i].style.background = colours[i];
		colourSquares[i].style.display = 'block';
	}
});

resetButton.addEventListener('click', function () {
	//generate new colours
	colours = makeRandomColours(numberOfSquares);
	//pick a new random colour from array
	pickedColour = pickColour();
	//change colour display to match picked colour
	colourDisplay.textContent = pickedColour;
	//change colours of squares
	for (let i = 0; i < colourSquares.length; i++) {
		colourSquares[i].style.backgroundColor = colours[i];
	}
	h1.style.backgroundColor = '#322c2c';
	pickedMessage.textContent = '';
	pickedMessage.style.backgroundColor = 'white';
	resetButton.textContent = 'New Colours';
});


colourDisplay.textContent = pickedColour;

for (let i = 0; i < colourSquares.length; i++) {
	//Add initial colours to the squares
	colourSquares[i].style.backgroundColor = colours[i];

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