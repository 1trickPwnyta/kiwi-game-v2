let currentScene = null;
let points;
let level;
let gameOver = false;

// end the game and earn collected coins
function endGame() {
	gameOver = true;
	totalCoins += points;
	updateCoins();
	updateButtons();
}

// executes the current scene
function execScene() {
	_.el("story").innerText = "";
	_.el("explanation").innerText = "";
	
	switch (currentScene) {
		case null: sceneNull(); break;
		case "add points": sceneAddPoints(); break;
		case "subtract points": sceneSubtractPoints(); break;
		case "nothing": sceneNothing(); break;
		case "level up": sceneLevelUp(); break;
		case "level down": sceneLevelDown(); break;
		case "jackpot": sceneJackpot(); break;
		case "game over": sceneGameOver(); break;
		case "treasure": sceneTreasure(); break;
		case "keepsake": sceneKeepsake(); break;
		case "character": sceneCharacter(); break;
		default: alert("No such scene: " + currentScene); break;
	}
	
	updatePoints();
}

// picks a random scene to use
function randomScene() {
	let possibleScenes = [
		"add points", 
		"subtract points", 
		"nothing", 
		"level up", 
		"game over", 
		"treasure"
	];
	
	if (level > 1) possibleScenes.push("level down");
	if (level == MAX_LEVEL) possibleScenes.push("jackpot");
	
	// keepsake scene is only available when you don't already have them all
	let missingKeepsake = false;
	KEEPSAKE_POOL.forEach(keepsake => {
		if (!ownedTreasure[keepsake]) missingKeepsake = true;
	});
	if (missingKeepsake) possibleScenes.push("keepsake");
	
	// character scene is only available when you don't already have them all
	let missingCharacter = false;
	CHARACTER_POOL.forEach(character => {
		if (!ownedTreasure[character]) missingCharacter = true;
	});
	if (missingCharacter) possibleScenes.push("character");
	
	currentScene = possibleScenes[_.randMax(possibleScenes.length - 1)];
	execScene();
}

window.onload = () => {
	updateCoins();
	updateButtons();
	execScene(); // starting scene
	
	// remove this in final version
	setTimeout(() => {
		showMessage("This is a rough draft.");
	}, 1000);
};
