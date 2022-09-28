function sceneAddPoints() {
	_.el("scene").style.backgroundImage = "url('./images/scenes/scene-add-points.png')";
	_.el("story").innerText = "Kiwi has found a coin stash.";
	let pointsAdded = _.randRange(1 + 2 * (level - 1), 3 * level);
	_.el("explanation").innerText = `+${pointsAdded} coin(s)`;
	_.el("explanation").classList.add("happy");
	_.el("explanation").classList.remove("sad");
	points += pointsAdded;
}
