const gameContainer = document.getElementById(
	'game'
);

const COLORS = [
	'red',
	'blue',
	'green',
	'orange',
	'purple',
	'red',
	'blue',
	'green',
	'orange',
	'purple'
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
	let counter = array.length;

	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(
			Math.random() * counter
		);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
	for (let color of colorArray) {
		// create a new div
		const newDiv = document.createElement(
			'div'
		);

		// give it a class attribute for the value we are looping over
		newDiv.classList.add(color);

		// call a function handleCardClick when a div is clicked on
		newDiv.addEventListener(
			'click',
			handleCardClick
		);

		// append the div to the element with an id of game
		gameContainer.append(newDiv);
	}
}
let score = 0;
let cards = [];
// TODO: Implement this function!
function handleCardClick(event) {
	let div = document.querySelector('div');
	let clickedCard = event.target;
	let cardColor = clickedCard.className;

	// you can use event.target to see which element was clicked
	console.log('you just clicked', clickedCard);
	clickedCard.style.backgroundColor = `${cardColor}`;
	setTimeout(function() {
		clickedCard.style.backgroundColor =
			'white';
	}, 1000);

	cards.push(clickedCard);
	if (cards[0] === cards[1]) {
		console.log(
			'no match. pick two different cards'
		);
		score -= 100;
		h2.innerText = 'Score:' + score;
		cards.pop();
		cards.pop();
	} else if (
		cards[0].className === cards[1].className
	) {
		console.log('match');
		setTimeout(function() {
			cards[0].style.backgroundColor = `${cardColor}`;
			cards[1].style.backgroundColor = `${cardColor}`;
			cards.pop();
			cards.pop();
		}, 1000);
		score += 100;
		h2.innerText = 'Score:' + score;
	} else if (
		cards.length === 2 &&
		cards[0].className !== cards[1].className
	) {
		cards.pop();
		cards.pop();
		score -= 100;
		h2.innerText = 'Score:' + score;
	} else {
		console.log(cards);
	}
}
let h2 = document.querySelector('h2');
h2.innerText = 'Score:' + score;
// when the DOM loads
createDivsForColors(shuffledColors);
