function updateCoins() {
	_.el("sidebar-coins").innerText = totalCoins;
}

function updatePoints() {
	if (currentScene != null) {
		_.el("stats").innerText = `Coins: ${points}`
	} else {
		_.el("stats").innerText = "";
	}
}

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

function buttonStart() {
	if (currentScene == null && totalCoins >= COST_PER_GAME) {
		totalCoins -= COST_PER_GAME;
		updateCoins();
		randomScene();
		updateButtons();
	}
}

function buttonKeepGoing() {
	randomScene();
}

function buttonStop() {
	endGame();
}

function buttonPlayAgain() {
	currentScene = null;
	gameOver = false;
	updateButtons();
	execScene();
}
