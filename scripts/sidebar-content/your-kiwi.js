let depthToggled = false;

function updateYourKiwi() {
	_.el("your-kiwi").innerHTML = "";
	yourKiwiOrnaments.forEach(ornament => {
		let placedOrnament = document.createElement("img");
		let treasureImage = getTreasureImage(ornament.id);
		placedOrnament.src = treasureImage;
		placedOrnament.className = "placed-ornament";
		placedOrnament.style.left = `${ornament.x}px`;
		placedOrnament.style.top = `${ornament.y}px`;
		placedOrnament.style.zIndex = ornament.depth;
		placedOrnament.draggable = false;
		_.el("your-kiwi").appendChild(placedOrnament);
	});
}

function updateYourKiwiInventory() {
	updateInventory("your-kiwi-inventory-table", 2, true);
}

function updateDepthToggle() {
	let depthToggle = _.el("depth-toggle");
	if (depthToggled) depthToggle.style.filter = "invert(100%)";
	else depthToggle.style.filter = "none";
}

function dropTreasureOnKiwi(e) {
	let treasureId = e.dataTransfer.getData("treasure");
	let kiwiRect = _.el("your-kiwi").getBoundingClientRect();
	let x = e.clientX - kiwiRect.left - 37;
	let y = e.clientY - kiwiRect.top - 37;
	yourKiwiOrnaments.push({
		id: treasureId,
		x: x,
		y: y,
		depth: depthToggled? -1: 1
	});
	ownedTreasure[treasureId]--;
	updateYourKiwiInventory();
	updateYourKiwi();
}

function buttonDepthToggle() {
	depthToggled = !depthToggled;
	updateDepthToggle();
}

function buttonRemoveAllOrnaments() {
	let kiwiRect = _.el("your-kiwi").getBoundingClientRect();
	yourKiwiOrnaments.forEach(ornament => {
		if (!ownedTreasure[ornament.id]) ownedTreasure[ornament.id] = 0;
		ownedTreasure[ornament.id]++;
		let x = kiwiRect.left + ornament.x;
		let y = kiwiRect.top + ornament.y;
		makeParticle(
			getTreasureImage(ornament.id), 
			`${x}px`, `${y}px`, 
			"calc(100% - 150px)", `${_.randRange(200, 800)}px`, 
			1000
		);
	});
	yourKiwiOrnaments = [];
	updateYourKiwi();
	setTimeout(() => {
		updateYourKiwiInventory();
	}, 1000);
}
