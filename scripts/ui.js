// updates the coins display in the sidebar
function updateCoins() {
	_.el("sidebar-coins").innerText = totalCoins;
	updateButtons();
}

// updates the coins display at the bottom of the game
function updatePoints() {
	if (currentScene != null) {
		_.el("stats").innerText = `Coins: ${points}`
	} else {
		_.el("stats").innerText = "";
	}
}

// shows/hides game buttons based on scene and game state
function updateButtons() {
	if (currentScene == null) {
		_.hide("button-keep-going");
		_.hide("button-stop");
		_.hide("button-play-again");
		if (totalCoins >= COST_PER_GAME) {
			_.show("button-start");
			_.hide("no-coins-to-play");
		} else {
			_.hide("button-start");
			_.show("no-coins-to-play");
		}
	} else {
		_.hide("button-start");
		_.hide("no-coins-to-play");
		if (gameOver) {
			_.hide("button-keep-going");
			_.hide("button-stop");
			_.show("button-play-again");
		} else {
			_.show("button-keep-going");
			_.show("button-stop");
			_.hide("button-play-again");
		}
	}
}

// starts the game
function buttonStart() {
	if (currentScene == null && totalCoins >= COST_PER_GAME) {
		totalCoins -= COST_PER_GAME;
		updateCoins();
		randomScene();
		updateButtons();
	}
}

// continues to a new random scene
function buttonKeepGoing() {
	randomScene();
}

// ends the game
function buttonStop() {
	endGame();
}

// returns to the start scene
function buttonPlayAgain() {
	currentScene = null;
	gameOver = false;
	updateButtons();
	execScene();
}
