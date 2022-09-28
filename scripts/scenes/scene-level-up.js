function sceneLevelUp() {
	_.el("scene").style.backgroundImage = "url('./images/scenes/scene-level-up.png')";
	_.el("story").innerText = "Kiwi has discovered the pathway to the next area.";
	if (level < MAX_LEVEL) level++;
}
