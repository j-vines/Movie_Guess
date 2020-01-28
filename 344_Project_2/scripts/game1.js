var gameMode = "";

var hint = "";

var startPosters = ["alien0.jpg", "thing0.jpg", "thecrow0.jpg", "ghostbusters0.jpg", "killerklowns0.jpg", "evildead0.jpg", "halloween0.jpg", "chucky0.jpg"]; 

var progress = 0;

var score = 0;

var alienSolved = 0;
var thingSolved = 0;
var crowSolved = 0;
var gbSolved = 0;
var klownsSolved = 0;
var edSolved = 0;
var halloweenSolved = 0;
var chuckySolved = 0;

function showHint() {
	console.log("User is requesting a hint.");
	
	document.getElementById("hint").style.visibility = "visible";
	document.getElementById("requestHint").innerHTML = "Here's a hint..."
}

function hideHint() {
	document.getElementById("hint").style.visibility = "hidden";
	document.getElementById("requestHint").innerHTML = "Want a hint?"
}

function setHint(message) {
	document.getElementById("hint").innerHTML = message;
}

function alreadySolved(){
	console.log("User has already solved this puzzle!");
	gameStart();
}

//runs when page is loaded
function gameStart() { 
	hideHint();
	if (alienSolved === 1
			&& thingSolved === 1
			&& crowSolved ===1
			&& gbSolved === 1
			&& klownsSolved === 1
			&& edSolved === 1
			&& halloweenSolved === 1
			&& chuckySolved === 1) {
		
		allSolved();
		return 0;
	}
	
	document.getElementById("subButton").value = "Guess!";
		
	console.log("STARTING GAME.");
	
	document.getElementById("progress").style.visibility = 'visible';
	document.getElementById("triesRemaining").style.visibility = 'visible';
	document.getElementById("guessingGame").style.visibility = 'visible';
	document.getElementById("gameOver").style.visibility = 'hidden';
	document.getElementById("newGame").style.visibility = 'hidden';
	document.getElementById("requestHint").style.visibility = 'visible';
	document.getElementById("userGuess").value = ""; //clears last input
	
	progress = 4;
	
	document.getElementById("progress").innerHTML = progress;
	
	var randomSel = (Math.floor((Math.random() * startPosters.length) + 1)) - 1; //chooses movie to guess at random from array
	
	document.getElementById("posterPic").src = "images/" + startPosters[randomSel];
	
	if (randomSel === 0) { //user guessing for ALIEN
		if (alienSolved === 0) {
			console.log("Setting game-mode to: ALIEN");
			setHint("Sigourney Weaver fights a bug monster in space in this movie.");
			gameMode = "alien";
		} else alreadySolved();
	}
	
	if (randomSel === 1) { //user guessing for THE THING
		if (thingSolved === 0) {
			console.log("Setting game-mode to: THE THING");
			setHint("Kurt Russel plays a scared man who is very cold in this movie.");
			gameMode = "thing";
		} else alreadySolved();
	}
	
	if (randomSel === 2) { //user guessing for THE CROW
		if (crowSolved === 0) {
			console.log("Setting game-mode to: THE CROW");
			setHint("Brandon Lee plays an angry emo ghost in this movie.");
			gameMode = "crow";
		} else alreadySolved();
	}
	
	if (randomSel === 3) { //user guessing for GHOSTBUSTERS 2
		if (gbSolved === 0) {
			console.log("Setting game-mode to: GHOSTBUSTERS 2");
			setHint("It's like Ghostbusters but worse!");
			gameMode = "gb2";
		} else alreadySolved();
	}
	
	if (randomSel === 4) { //user guessing for KILLER KLOWNS
		if (klownsSolved === 0) {
			console.log("Setting game-mode to: KILLER KLOWNS");
			setHint("Evil alien circus clowns turn people into cotton candy in this movie.");
			gameMode = "klowns";
		} else alreadySolved();
	}
	
	if (randomSel === 5) { //user guessing for EVIL DEAD
		if (edSolved === 0) {
			console.log("Setting game-mode to: EVIL DEAD");
			setHint("Someone gets stabbed in the ankle with a pencil in this movie.");
			gameMode = "evildead";
		} else alreadySolved();
	}
	
	if (randomSel === 6) { //user guessing for HALLOWEEN
		if (halloweenSolved === 0) {
			console.log("Setting game-mode to: HALLOWEEN");
			setHint("Jamie Lee Curtis is terrified of a very slow man with a knife in this movie.");
			gameMode = "halloween";
		} else alreadySolved();
	}
	
	if (randomSel === 7) { //user guessing for CHILD'S PLAY 2
		if (chuckySolved === 0) {
			console.log("Setting game-mode to: CHILDS PLAY 2");
			setHint("A murderous doll terrorizes a terrible child actor for the second time in this movie.");
			gameMode = "cp2";
		} else alreadySolved();
	}
}

//runs when user submits their guess
function processGuess() {
	var guess = document.getElementById("userGuess").value;
	var winImg = ""; //poster displayed when user guesses correctly
	console.log("User guesses: " + guess);
	
	if (gameMode === "alien") {
		winImg = "images/alien1.jpg";
			
		if (guess === "alien") { //USER WINS
			document.getElementById("posterPic").src = winImg;
			alienSolved = 1;
			congrats();
		} else { //USER LOSES
			loser();
		}
	}
	
	if (gameMode === "thing") {
		winImg = "images/thing1.jpg";
			
		if (guess === "the thing") { //USER WINS
			document.getElementById("posterPic").src = winImg;
			thingSolved = 1;
			congrats();
		} else { //USER LOSES
			loser();
		}
	}
	
	if (gameMode === "crow") {
		winImg = "images/thecrow1.jpg";
			
		if (guess === "the crow") { //USER WINS
			document.getElementById("posterPic").src = winImg;
			crowSolved = 1;
			congrats();
		} else { //USER LOSES
			loser();
		}
	}
	
	if (gameMode === "gb2") {
		winImg = "images/ghostbusters1.jpg";
			
		if (guess === "ghostbusters 2") { //USER WINS
			document.getElementById("posterPic").src = winImg;
			gbSolved = 1;
			congrats();
		} else { //USER LOSES
			loser();
		}
	}
	
	if (gameMode === "klowns") {
		winImg = "images/killerklowns1.jpg";
			
		if (guess === "killer klowns" || guess === "killer klowns from outer space") { //USER WINS
			document.getElementById("posterPic").src = winImg;
			klownsSolved = 1;
			congrats();
		} else { //USER LOSES
			loser();
		}
	}
	
	if (gameMode === "evildead") {
		winImg = "images/evildead1.jpg";
			
		if (guess === "evil dead" || guess === "the evil dead") { //USER WINS
			document.getElementById("posterPic").src = winImg;
			edSolved = 1;
			congrats();
		} else { //USER LOSES
			loser();
		}
	}
	
	if (gameMode === "halloween") {
		winImg = "images/halloween1.jpg";
			
		if (guess === "halloween") { //USER WINS
			document.getElementById("posterPic").src = winImg;
			halloweenSolved = 1;
			congrats();
		} else { //USER LOSES
			loser();
		}
	}
	
	if (gameMode === "cp2") {
		winImg = "images/chucky1.jpg";
			
		if (guess === "childs play 2") { //USER WINS
			document.getElementById("posterPic").src = winImg;
			chuckySolved = 1;
			congrats();
		} else { //USER LOSES
			loser();
		}
	}
}

function congrats() { //creates PLAY AGAIN button
	console.log("USER WINS!");
	score = score + 100;
	
	gameOverStuff();
	
	document.getElementById("gameOver").innerHTML = "Congratulations! You got it!";
	document.getElementById("newGameButton").value = "Play Again!";
	document.getElementById("score").innerHTML = score;
}

function loser() {
	console.log("User is incorrect!");
	document.getElementById("subButton").value = "Guess Again!";
	document.getElementById("userGuess").value = "";
	
	subtractTry();
	
}

function subtractTry() {
	console.log("Subtracting 1 from remaining tries.");
	progress = progress - 1;
	document.getElementById("progress").innerHTML = progress;
	
	score = score - 20;
	document.getElementById("score").innerHTML = score;
	
	if (progress === 0) { //OUT OF ATTEMPTS
		console.log("GAME OVER.");
		
		gameOverStuff();
		
		document.getElementById("gameOver").innerHTML = "Maybe we'll come back to this one...";
		document.getElementById("newGameButton").value = "Try Another";
	}

}

function gameOverStuff() {
	document.getElementById("progress").style.visibility = 'hidden';
	document.getElementById("triesRemaining").style.visibility = 'hidden';
	document.getElementById("guessingGame").style.visibility = 'hidden';
	document.getElementById("gameOver").style.visibility = 'visible';
	document.getElementById("newGame").style.visibility = 'visible';
	document.getElementById("requestHint").style.visibility = 'hidden';
}

function allSolved() {
	console.log("User has solved every puzzle!");
	
	gameOverStuff();
	document.getElementById("gameOver").innerHTML = "You've guessed every movie correctly! I hope you feel good about yourself.";
	document.getElementById("scoreMessage").innerHTML = "Final Score:&nbsp;&nbsp;&nbsp;";
	document.getElementById("newGameButton").style.visibility = 'hidden';
	
	var rankMessage = document.getElementById("progress");
	var rank = document.getElementById("triesRemaining");
	
	rank.style.visibility = "visible";
	rankMessage.style.visibility = "visible";
	
	rank.innerHTML = "Rank: ";
	
	if (score === 800) {
		rankMessage.innerHTML = "PERFECT";
	}
	else if (score >= 700) {
		rankMessage.innerHTML = "GREAT";
	}
	else if (score >= 500) {
		rankMessage.innerHTML = "GOOD";
	}
	else if (score >= 300) {
		rankMessage.innerHTML = "OKAY";
	}
	else if (score >= 200) {
		rankMessage.innerHTML = "...EH";
	}
	else if (score >= 100) {
		rankMessage.innerHTML = "BAD";
	}
	else if (score < 0) {
		rankMessage.innerHTML = "Wow, you're awful.";
	}
}