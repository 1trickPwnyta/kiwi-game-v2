function updateShopInventory() {
	updateInventory("shop-inventory-table", 5, false, e => {
		makePurchaseParticle(e);
		shopInventory[e.target.treasureId]--;
		updateShopInventory();
		setTimeout(() => {
			if (!ownedTreasure[e.target.treasureId]) ownedTreasure[e.target.treasureId] = 0;
			ownedTreasure[e.target.treasureId]++;
		}, 1000);
	}, shopInventory);
}

function makePurchaseParticle(e) {
	let treasureId = e.target.treasureId;
	let x1 = e.clientX - 37;
	let y1 = e.clientY - 37;
	let inventoryRect = _.el("sidebar-inventory").getBoundingClientRect();
	let x2 = inventoryRect.left + 100 - 75;
	let y2 = inventoryRect.top + 100 - 37;
	makeParticle(
		getTreasureImage(treasureId),
		`${x1}px`, `${y1}px`, 
		`${x2}px`, `${y2}px`, 
		1000
	);
}
