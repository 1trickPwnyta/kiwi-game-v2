// performed when an item is drag and dropped onto the your kiwi display
function dropTreasureOnKiwi(e) {
	let treasureId = e.dataTransfer.getData("treasure");
	let treasureTags = getTreasureTags(treasureId);
	let source = e.dataTransfer.getData("source");
	let instanceid = e.dataTransfer.getData("instanceid");
	let imageWidth = e.dataTransfer.getData("imageWidth");
	let imageHeight = e.dataTransfer.getData("imageHeight");
	
	// determine where to drop the item
	let kiwiRect = _.el("your-kiwi").getBoundingClientRect();
	let imageRect = e.target.getBoundingClientRect();
	let x = e.clientX - kiwiRect.left - imageWidth/2;
	let y = e.clientY - kiwiRect.top - imageHeight/2;
	
	// add the item to your kiwi
	yourKiwiOrnaments.push({
		instanceid: `${treasureId}-${_.randMax(999999999)}`,
		id: treasureId,
		x: x,
		y: y,
		depth: depthToggled? -1: 1,
		rotation: 0
	});
	
	// remove the item from your inventory
	if (source == "inventory" && !treasureTags.includes("keepsake")) ownedTreasure[treasureId]--;
	
	// move the item from another location on your kiwi
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
