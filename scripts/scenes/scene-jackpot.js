function sceneJackpot() {
	_.el("scene").style.backgroundImage = "url('./images/scenes/scene-jackpot.png')";
	_.el("story").innerText = "Success! Kiwi has tracked down the treasture.";
	let jackpot = 100;
	_.el("explanation").innerText = `+${jackpot} coin(s)`;
	_.el("explanation").classList.add("happy");
	_.el("explanation").classList.remove("sad");
	points += jackpot;
	endGame();
}
