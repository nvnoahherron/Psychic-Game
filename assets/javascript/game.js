var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var wins = 0;
var losses = 0;
var guesses = 0;
var guessleft = 20;
var yourguesses = [];
var randomletter;
var nextletter;


var pickletter = function () {
	randomletter = alphabet[Math.floor(Math.random() * 26)];
	console.log(randomletter);
	//return randomletter;
};
 var updateguesses = function(){
 		document.getElementById("guessleft").innerHTML = ("Guesses Left: " + guessleft)
 	};
var lettersguessed = function(){
	document.getElementById("guesses").innerHTML = ("Guesses:" + yourguesses);
	console.log(yourguesses);
}
var newgame = function(){
	guesses = 0;
	yourguesses = [];
	guessleft = 20;

	updateguesses();
	lettersguessed();
	pickletter();

}

pickletter();

document.onkeyup = function(event){
	var userPick = event.key;
	console.log(userPick);
	yourguesses.push(userPick);
	guessleft--;
if (guessleft > 0) {
	if (randomletter === userPick) {

		wins++;
	document.getElementById("wins").innerHTML = ("Wins: " + wins);
		
	lettersguessed();
	updateguesses();
	pickletter();

	}

	else if (randomletter !== userPick) {
		losses++;
		document.getElementById("losses").innerHTML = ("Losses: " + losses);

		lettersguessed();

		updateguesses();
		pickletter();
	}
}
else if (guessleft <= 0){
	newgame();
}
}

//You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
//Guess what letter I'm thinking of
//Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the game over again (without refreshing theen the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).