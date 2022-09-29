let inventoryTiles = [];

function updateMainInventory() {
	updateInventory("inventory-table", 8, false, null, ownedTreasure, "treasure");
}

function updateInventory(id, cols, draggable, onclick, inventory=ownedTreasure, tag) {
	let table = _.el(id);
	table.innerHTML = "";
	inventoryTiles = [];
	let row = document.createElement("tr");
	row.height = "100";
	let keys = Object.keys(inventory);
	keys.sort((a, b) => getTreasureSet(a) > getTreasureSet(b)? 1: -1);
	for (let i = 0; i < keys.length; i++) {
		if (inventory[keys[i]] > 0) {
			let treasureTags = getTreasureTags(keys[i]);
			if (!tag || treasureTags.includes(tag)) {
				if (row.children.length >= cols) {
					table.appendChild(row);
					row = document.createElement("tr");
					row.height = "100";
				}
				let cell = document.createElement("td");
				cell.treasureId = keys[i];
				let treasureImage = getTreasureImage(keys[i]);
				if (draggable) {
					cell.draggable = true;
					cell.ondragstart = e => {
						e.dataTransfer.setData("treasure", keys[i]);
						e.dataTransfer.setData("source", "inventory");
						let dragImage = document.createElement("img");
						dragImage.src = treasureImage;
						e.dataTransfer.setDragImage(dragImage, 37, 37);
					};
				}
				if (onclick) {
					cell.onclick = onclick;
					cell.classList.add("clickable");
				}
				cell.style.backgroundImage = `url("${treasureImage}")`;
				cell.title = getTreasureName(keys[i]);
				if (!treasureTags.includes("keepsake")) cell.innerText = inventory[keys[i]];
				else cell.innerText = "\n"
				row.appendChild(cell);
				inventoryTiles.push(cell);
			}
		}
	}
	table.appendChild(row);
}

function selectInventoryCell(cell) {
	inventoryTiles.forEach(cell => {
		cell.classList.remove("selected");
	});
	cell.classList.add("selected");
}
