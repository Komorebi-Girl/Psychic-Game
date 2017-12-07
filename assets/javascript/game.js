

console.log("working!")

var wrongGuesses = [];
var wins = 0;
var losses = 0; 
var tries = 9; 
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v" , "w", "x", "y", "z"];
var computerGuess = options[Math.floor(Math.random() * options.length)];



document.onkeyup = function(event){
	var keyStroke = event.key;

	var userGuess = keyStroke.toLowerCase();


	if (tries == 0) {
		tries = 9; 
		losses++;
		computerGuess = options[Math.floor(Math.random() * options.length)];
		wrongGuesses = [];
	}	else {
		if (userGuess == computerGuess) {
			wins++;
			tries = 9; 	
			computerGuess = options[Math.floor(Math.random() * options.length)];
			wrongGuesses = [];
		} else{
			tries--;
			wrongGuesses.push(userGuess);
		}
	}


	document.getElementById("tries").textContent = tries;
	document.getElementById("wins").textContent = wins;
	document.getElementById("losses").textContent = losses;
	document.getElementById("wrongGuesses").textContent = wrongGuesses;



	// console.log("CPU guessed: " + computerGuess);
	// console.log("You guessed: " + wrongGuesses);
	// console.log("Number of wins: " + wins);
	// console.log("Number of losses" + losses);
	// console.log("Number of tries: " + tries);
}

























	// if ((wins == 1) || (losses == 1)) {
	// 	 // wins = 0;
	// 	 // losses = 0; 
	// 	 tries = 9; 
	// } else {
	// 	if (tries == 0) {
	// 		losses++;
	// 	}

	// 	else {
	// 		if (userGuess != computerGuess) {
	// 			tries--;
	// 			wrongGuesses.push(userGuess);
	// 		} else {
	// 			wins++;
	// 		}
	// 	}







