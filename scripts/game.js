let currentScene = null;
let points;
let level;
let gameOver = false;

function endGame() {
	gameOver = true;
	totalCoins += points;
	updateCoins();
	updateButtons();
}

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
		default: alert("No such scene: " + currentScene); break;
	}
	
	updatePoints();
}

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
	let missingKeepsake = false;
	KEEPSAKE_POOL.forEach(keepsake => {
		if (!ownedTreasure[keepsake]) missingKeepsake = true;
	});
	if (missingKeepsake) possibleScenes.push("keepsake");
	
	currentScene = possibleScenes[_.randMax(possibleScenes.length - 1)];
	execScene();
}

window.onload = () => {
	updateCoins();
	updateButtons();
	execScene();
};
