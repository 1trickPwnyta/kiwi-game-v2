let selectedCharacter = "character-default";
let depthToggled = false;

// updates the your kiwi display
function updateYourKiwi() {
	// fake kiwi is the container for your kiwi and all items so that z-index can be properly 
	// used between your kiwi and the items
	
	// empty the fake kiwi container
	_.el("fake-kiwi").innerHTML = "";
	
	let yourKiwi = document.createElement("div");
	yourKiwi.id = "your-kiwi";
	
	// set the your kiwi image based on selected character
	yourKiwi.style.backgroundImage = `url("${getTreasureImage(selectedCharacter)}")`;
	
	_.el("fake-kiwi").appendChild(yourKiwi);
	
	// place each item on fake kiwi
	yourKiwiOrnaments.forEach(ornament => {
		let placedOrnament = document.createElement("img");
		let treasureImage = getTreasureImage(ornament.id);
		placedOrnament.src = treasureImage;
		placedOrnament.className = "placed-ornament";
		placedOrnament.style.left = `${ornament.x}px`;
		placedOrnament.style.top = `${ornament.y}px`;
		placedOrnament.style.zIndex = ornament.depth;
		placedOrnament.style.transform = `rotate(${ornament.rotation}deg)`;
		placedOrnament.draggable = true;
		placedOrnament.ondragstart = e => {
			e.dataTransfer.setData("treasure", ornament.id);
			e.dataTransfer.setData("source", "ornament");
			e.dataTransfer.setData("instanceid", ornament.instanceid);
			let dragImage = document.createElement("img");
			dragImage.src = treasureImage;
			document.body.appendChild(dragImage); // bounding client rect only works in dom
			let imageRect = dragImage.getBoundingClientRect();
			document.body.removeChild(dragImage);
			e.dataTransfer.setData("imageWidth", imageRect.width);
			e.dataTransfer.setData("imageHeight", imageRect.height);
			e.dataTransfer.setDragImage(dragImage, imageRect.width/2, imageRect.height/2);
		};
		_.el("fake-kiwi").appendChild(placedOrnament);
	});
}

function updateYourKiwiCharacterInventory() {
	let cells = updateInventory("your-kiwi-character-inventory-table", 0, false, e => {
		selectInventoryCell(e.target);
		selectedCharacter = e.target.treasureId;
		updateYourKiwi();
	}, ownedTreasure, ["character"]);
	cells.filter(cell => cell.treasureId == selectedCharacter).forEach(cell => selectInventoryCell(cell));
}

function updateYourKiwiInventory() {
	updateInventory("your-kiwi-inventory-table", 2, true, null, ownedTreasure, ["wearable"]);
	updateYourKiwiCharacterInventory();
}

function updateDepthToggle() {
	let depthToggle = _.el("depth-toggle");
	if (depthToggled) depthToggle.style.filter = "brightness(0.8)";
	else depthToggle.style.filter = "none";
}

function buttonDepthToggle() {
	depthToggled = !depthToggled;
	updateDepthToggle();
}

function buttonRemoveAllOrnaments() {
	let kiwiRect = _.el("your-kiwi").getBoundingClientRect();
	yourKiwiOrnaments.forEach(ornament => {
		if (!ownedTreasure[ornament.id]) ownedTreasure[ornament.id] = 0;
		let treasureTags = getTreasureTags(ornament.id);
		if (!treasureTags.includes("keepsake")) ownedTreasure[ornament.id]++;
		let x = kiwiRect.left + ornament.x;
		let y = kiwiRect.top + ornament.y;
		makeParticle(
			getTreasureImage(ornament.id), 
			`${x}px`, `${y}px`, 
			"calc(100% - 150px)", `${_.randRange(200, 800)}px`
		);
	});
	yourKiwiOrnaments = [];
	updateYourKiwi();
	setTimeout(() => {
		updateYourKiwiInventory();
	}, 500);
}
