let selectedShopItem;

function updateShopInventory() {
	selectedShopItem = null;
	updateInventory("shop-inventory-table", 5, false, e => {
		selectInventoryCell(e.target);
		selectedShopItem = e.target.treasureId;
		updateShopDialog();
	}, shopInventory);
	updateShopDialog();
}

function updateShopDialog() {
	if (selectedShopItem) {
		let treasureName = getTreasureName(selectedShopItem);
		let treasureCost = getTreasureCost(selectedShopItem);
		_.el("shop-dialog-cost").innerText = `${treasureName}\nCost: ${treasureCost}`;
		if (totalCoins < treasureCost) {
			_.el("shop-dialog-buy").classList.add("disabled");
			_.el("shop-dialog-buy").classList.remove("clickable");
		} else {
			_.el("shop-dialog-buy").classList.remove("disabled");
			_.el("shop-dialog-buy").classList.add("clickable");
		}
		_.show("shop-dialog");
	} else {
		_.hide("shop-dialog");
	}
}

function shopBuy() {
	let treasureCost = getTreasureCost(selectedShopItem);
	if (totalCoins >= treasureCost) {
		makePurchaseParticle();
		shopInventory[selectedShopItem]--;
		let treasureId = selectedShopItem;
		updateShopInventory();
		setTimeout(() => {
			if (!ownedTreasure[treasureId]) ownedTreasure[treasureId] = 0;
			ownedTreasure[treasureId]++;
			totalCoins -= treasureCost;
			updateCoins();
		}, 500);
	}
}

function makePurchaseParticle() {
	let treasureId = selectedShopItem;
	let shopRect = _.el("shop-inventory-table").getBoundingClientRect();
	let x1 = shopRect.left + 300;
	let y1 = shopRect.top + 300;
	let inventoryRect = _.el("sidebar-inventory").getBoundingClientRect();
	let x2 = inventoryRect.left + 100 - 75;
	let y2 = inventoryRect.top + 100 - 37;
	makeParticle(
		getTreasureImage(treasureId),
		`${x1}px`, `${y1}px`, 
		`${x2}px`, `${y2}px`
	);
}
