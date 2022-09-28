function sceneLevelDown() {
	_.el("scene").style.backgroundImage = "url('./images/scenes/scene-level-down.png')";
	_.el("story").innerText = "Oh no! Kiwi has gotten lost and ended up back where they started."
	if (level > 1) level--;
}
