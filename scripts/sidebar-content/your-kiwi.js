let depthToggled = false;

function updateYourKiwi() {
	_.el("fake-kiwi").innerHTML = "<div id='your-kiwi'></div>";
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
			e.dataTransfer.setDragImage(dragImage, 37, 37);
		};
		_.el("fake-kiwi").appendChild(placedOrnament);
	});
}

function updateYourKiwiInventory() {
	updateInventory("your-kiwi-inventory-table", 2, true, null, ownedTreasure, "wearable");
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
