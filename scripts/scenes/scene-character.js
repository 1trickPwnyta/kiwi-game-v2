function sceneCharacter() {
	_.el("scene").style.backgroundImage = "url('./images/scenes/scene-character.png')";
	_.el("story").innerText = "It looks like Adventurer Kiwi has found a new friend!";
	let pool = CHARACTER_POOL.filter(character => !ownedTreasure[character]);
	let character = pool[_.randMax(pool.length - 1)];
	let treasureImage = getTreasureImage(character);
	let treasureName = getTreasureName(character);
	_.el("explanation").innerHTML = `
		<img class="treasure-image-inline" src="${treasureImage}" /> ${treasureName}
	`;
	_.el("explanation").classList.add("happy");
	_.el("explanation").classList.remove("sad");
	if (!ownedTreasure[character]) ownedTreasure[character] = 0;
	ownedTreasure[character]++;
}
