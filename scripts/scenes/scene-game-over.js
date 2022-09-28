function sceneGameOver() {
	_.el("scene").style.backgroundImage = "url('./images/scenes/scene-game-over.png')";
	_.el("story").innerText = "Uh oh! Kiwi got lost and had to call the rescue team. Kiwi gave them the backpack as thanks.";
	let pointsLost = points;
	_.el("explanation").innerText = `-${pointsLost} coin(s)`;
	_.el("explanation").classList.add("sad");
	_.el("explanation").classList.remove("happy");
	points = 0;
	endGame();
}
