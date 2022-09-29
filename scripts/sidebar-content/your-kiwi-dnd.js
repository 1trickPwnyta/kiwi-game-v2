function dropTreasureOnKiwi(e) {
	let treasureId = e.dataTransfer.getData("treasure");
	let treasureTags = getTreasureTags(treasureId);
	let source = e.dataTransfer.getData("source");
	let instanceid = e.dataTransfer.getData("instanceid");
	let kiwiRect = _.el("your-kiwi").getBoundingClientRect();
	let x = e.clientX - kiwiRect.left - 37;
	let y = e.clientY - kiwiRect.top - 37;
	yourKiwiOrnaments.push({
		instanceid: `${treasureId}-${_.randMax(999999999)}`,
		id: treasureId,
		x: x,
		y: y,
		depth: depthToggled? -1: 1,
		rotation: 0
	});
	if (source == "inventory" && !treasureTags.includes("keepsake")) ownedTreasure[treasureId]--;
	if (source == "ornament") {
		for (let i = 0; i < yourKiwiOrnaments.length; i++) {
			if (yourKiwiOrnaments[i].instanceid == instanceid) {
				yourKiwiOrnaments.splice(i, 1);
				break;
			}
		}
	}
	updateYourKiwiInventory();
	updateYourKiwi();
}

function dropTreasureInInventory(e) {
	let treasureId = e.dataTransfer.getData("treasure");
	let treasureTags = getTreasureTags(treasureId);
	let source = e.dataTransfer.getData("source");
	let instanceid = e.dataTransfer.getData("instanceid");
	if (source == "ornament") {
		for (let i = 0; i < yourKiwiOrnaments.length; i++) {
			if (yourKiwiOrnaments[i].instanceid == instanceid) {
				yourKiwiOrnaments.splice(i, 1);
				break;
			}
		}
		if (!ownedTreasure[treasureId]) ownedTreasure[treasureId] = 0;
		if (!treasureTags.includes("keepsake")) ownedTreasure[treasureId]++;
	}
	updateYourKiwiInventory();
	updateYourKiwi();
}
