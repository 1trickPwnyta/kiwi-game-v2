const MAX_LEVEL = 5;

let currentScene = null;
let points = 0;
let level = 1;

function gameOver() {
	_.hide("button-start");
	_.hide("button-keep-going");
	_.hide("button-stop");
	_.show("button-play-again");
}

function execScene() {
	_.el("story").innerText = "";
	_.el("explanation").innerText = "";
	
	switch (currentScene) {
		case null:
			_.el("scene").style.backgroundImage = "url('./images/scenes/scene-start.png')";
			_.el("story").innerText = "Adventure with Kiwi for 5 coins?";
			points = 0;
			level = 1;
			break;
		case "add points":
			_.el("scene").style.backgroundImage = "url('./images/scenes/scene-add-points.png')";
			_.el("story").innerText = "Kiwi has found a coin stash.";
			let pointsAdded = _.randRange(1 + 2 * (level - 1), 3 * level);
			_.el("explanation").innerText = `+${pointsAdded} coin(s)`;
			_.el("explanation").style.color = "green";
			points += pointsAdded;
			break;
		case "subtract points":
			_.el("scene").style.backgroundImage = "url('./images/scenes/scene-subtract-points.png')";
			_.el("story").innerText = "Oops! There's a hole in Kiwi's backpack.";
			let pointsSubtracted = _.randRange(1 + 2 * (level - 1), 3 * level);
			_.el("explanation").innerText = `-${pointsSubtracted} coin(s)`;
			_.el("explanation").style.color = "red";
			points -= pointsSubtracted;
			points = Math.max(0, points);
			break;
		case "nothing":
			_.el("scene").style.backgroundImage = "url('./images/scenes/scene-nothing.png')";
			_.el("story").innerText = "Nothing has caught Kiwi's eye.";
			break;
		case "level up":
			_.el("scene").style.backgroundImage = "url('./images/scenes/scene-level-up.png')";
			_.el("story").innerText = "Kiwi has discovered the pathway to the next area.";
			if (level < MAX_LEVEL) level++;
			break;
		case "level down":
			_.el("scene").style.backgroundImage = "url('./images/scenes/scene-level-down.png')";
			_.el("story").innerText = "Oh no! Kiwi has gotten lost and ended up back where they started."
			if (level > 1) level--;
			break;
		case "jackpot":
			_.el("scene").style.backgroundImage = "url('./images/scenes/scene-jackpot.png')";
			_.el("story").innerText = "Success! Kiwi has tracked down the treasture.";
			let jackpot = 100;
			_.el("explanation").innerText = `+${jackpot} coin(s)`;
			_.el("explanation").style.color = "green";
			points += jackpot;
			gameOver();
			break;
		case "game over":
			_.el("scene").style.backgroundImage = "url('./images/scenes/scene-game-over.png')";
			_.el("story").innerText = "Uh oh! Kiwi got lost and had to call the rescue team. Kiwi gave them the backpack as thanks.";
			let pointsLost = points;
			_.el("explanation").innerText = `-${pointsLost} coin(s)`;
			_.el("explanation").style.color = "red";
			points = 0;
			gameOver();
			break;
		default: alert("No such scene: " + currentScene); break;
	}
	
	_.el("stats").innerText = `Coins: ${points}`;
}

function randomScene() {
	let possibleScenes = [
		"add points", 
		"subtract points", 
		"nothing", 
		"level up", 
		"game over"
	];
	if (level > 1) possibleScenes.push("level down");
	if (level == MAX_LEVEL) possibleScenes.push("jackpot");
	
	currentScene = possibleScenes[_.randMax(possibleScenes.length - 1)];
	execScene();
}

function buttonStart() {
	if (currentScene == null) {
		randomScene();
		_.hide("button-start");
		_.show("button-keep-going");
		_.show("button-stop");
		_.hide("button-play-again");
	}
}

function buttonKeepGoing() {
	randomScene();
}

function buttonStop() {
	gameOver();
}

function buttonPlayAgain() {
	currentScene = null;
	_.show("button-start");
	_.hide("button-keep-going");
	_.hide("button-stop");
	_.hide("button-play-again");
	execScene();
}

window.onload = () => {
	_.show("button-start");
	execScene();
};
