function sceneTreasure() {
	_.el("scene").style.backgroundImage = "url('./images/scenes/scene-treasure.png')";
	_.el("story").innerText = "Kiwi has found a treasure.";
	let treasurePool = TREASURE_POOL.concat(TREASURE_POOL_EXCLUSIVE[level]);
	let treasure = treasurePool[_.randMax(treasurePool.length - 1)];
	let treasureImage = getTreasureImage(treasure);
	let treasureName = getTreasureName(treasure);
	_.el("explanation").innerHTML = `
		<img class="treasure-image-inline" src="${treasureImage}" /> ${treasureName}
	`;
	_.el("explanation").classList.add("happy");
	_.el("explanation").classList.remove("sad");
	if (!ownedTreasure[treasure]) ownedTreasure[treasure] = 0;
	ownedTreasure[treasure]++;
}
