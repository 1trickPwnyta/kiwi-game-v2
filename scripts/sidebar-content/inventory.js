function updateInventory(id, cols, draggable, onclick, inventory=ownedTreasure) {
	let table = _.el(id);
	table.innerHTML = "";
	let row = document.createElement("tr");
	let keys = Object.keys(inventory);
	keys.sort((a, b) => getTreasureSet(a) > getTreasureSet(b)? 1: -1);
	for (let i = 0; i < keys.length; i++) {
		if (inventory[keys[i]] > 0) {
			if (row.children.length >= cols) {
				table.appendChild(row);
				row = document.createElement("tr");
			}
			let cell = document.createElement("td");
			cell.treasureId = keys[i];
			let treasureImage = getTreasureImage(keys[i]);
			if (draggable) {
				cell.draggable = true;
				cell.ondragstart = e => {
					e.dataTransfer.setData("treasure", keys[i]);
					let dragImage = document.createElement("img");
					dragImage.src = treasureImage;
					e.dataTransfer.setDragImage(dragImage, 37, 37);
				};
			}
			if (onclick) cell.onclick = onclick;
			cell.style.backgroundImage = `url("${treasureImage}")`;
			cell.title = getTreasureName(keys[i]);
			cell.innerText = inventory[keys[i]];
			row.appendChild(cell);
		}
	}
	table.appendChild(row);
}
