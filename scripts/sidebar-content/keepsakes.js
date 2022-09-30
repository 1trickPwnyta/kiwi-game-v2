let selectedKeepsakesItem;

function updateKeepsakesInventory() {
	updateInventory("keepsakes-inventory-table", 8, false, e => {
		selectInventoryCell(e.target);
		selectedKeepsakesItem = e.target.treasureId;
		updateKeepsakesDialog();
	}, ownedTreasure, ["keepsake"]);
}

function updateKeepsakesDialog() {
	if (selectedKeepsakesItem) {
		let treasureName = getTreasureName(selectedKeepsakesItem);
		let treasureDesc = getTreasureDesc(selectedKeepsakesItem);
		_.el("keepsakes-dialog").innerText = `${treasureName}. ${treasureDesc}`;
		_.show("keepsakes-dialog");
	} else {
		_.hide("keepsakes-dialog");
	}
}
