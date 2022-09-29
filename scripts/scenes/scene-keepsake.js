function sceneKeepsake() {
	_.el("scene").style.backgroundImage = "url('./images/scenes/scene-keepsake.png')";
	_.el("story").innerText = "Kiwi has found a keepsake. This looks like something really special.";
	let pool = KEEPSAKE_POOL.filter(keepsake => !ownedTreasure[keepsake]);
	let keepsake = pool[_.randMax(pool.length - 1)];
	let treasureImage = getTreasureImage(keepsake);
	let treasureName = getTreasureName(keepsake);
	_.el("explanation").innerHTML = `
		<img class="treasure-image-inline" src="${treasureImage}" /> ${treasureName}
	`;
	_.el("explanation").classList.add("happy");
	_.el("explanation").classList.remove("sad");
	if (!ownedTreasure[keepsake]) ownedTreasure[keepsake] = 0;
	ownedTreasure[keepsake]++;
}
