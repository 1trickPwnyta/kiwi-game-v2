function sceneSubtractPoints() {
	_.el("scene").style.backgroundImage = "url('./images/scenes/scene-subtract-points.png')";
	_.el("story").innerText = "Oops! There's a hole in Kiwi's backpack.";
	let pointsSubtracted = _.randRange(1 + 2 * (level - 1), 3 * level);
	_.el("explanation").innerText = `-${pointsSubtracted} coin(s)`;
	_.el("explanation").classList.add("sad");
	_.el("explanation").classList.remove("happy");
	points -= pointsSubtracted;
	points = Math.max(0, points);
}
