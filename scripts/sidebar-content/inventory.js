function updateMainInventory() {
	updateInventory("inventory-table", 8, false, null, ownedTreasure, null, ["keepsake", "character"]);
}

function updateInventory(id, cols, draggable, onclick, inventory=ownedTreasure, tags, nottags) {
	// find the table and empty it
	let table = _.el(id);
	table.innerHTML = "";
	
	// create the first row
	let row = document.createElement("tr");
	row.height = "100";
	
	// sort inventory by set
	let keys = Object.keys(inventory);
	keys.sort((a, b) => getTreasureSet(a) > getTreasureSet(b)? 1: -1);
	
	let cells = []; // this function returns all the cells it creates
	
	for (let i = 0; i < keys.length; i++) {
		
		if (inventory[keys[i]] > 0) { // only show inventory with a positive quantity
		
			// filter by tags
			let treasureTags = getTreasureTags(keys[i]);
			let matchesTags = true;
			if (tags) {
				let found = false;
				tags.forEach(tag => {
					if (treasureTags.includes(tag)) found = true;
				});
				if (!found) matchesTags = false;
			}
			if (nottags) {
				nottags.forEach(tag => {
					if (treasureTags.includes(tag)) matchesTags = false;
				});
			}
			
			if (matchesTags) {
				
				// if the number of columns has been reached, start a new row
				if (cols && row.children.length >= cols) {
					table.appendChild(row);
					row = document.createElement("tr");
					row.height = "100";
				}
				
				// create the inventory cell
				let cell = document.createElement("td");
				cell.treasureId = keys[i];
				let treasureImage = getTreasureImage(keys[i]);
				
				// define drag behavior
				if (draggable) {
					cell.draggable = true;
					cell.ondragstart = e => {
						e.dataTransfer.setData("treasure", keys[i]);
						e.dataTransfer.setData("source", "inventory");
						let dragImage = document.createElement("img");
						dragImage.src = treasureImage;
						document.body.appendChild(dragImage); // bounding client rect only works in dom
						let imageRect = dragImage.getBoundingClientRect();
						document.body.removeChild(dragImage);
						e.dataTransfer.setData("imageWidth", imageRect.width);
						e.dataTransfer.setData("imageHeight", imageRect.height);
						e.dataTransfer.setDragImage(dragImage, imageRect.width/2, imageRect.height/2);
					};
				}
				
				// define click behavior
				if (onclick) {
					cell.onclick = onclick;
					cell.classList.add("clickable");
				}
				
				// fill in the cell's content
				cell.style.backgroundImage = `url("${treasureImage}")`;
				cell.title = getTreasureName(keys[i]);
				
				if (!treasureTags.includes("keepsake") && !treasureTags.includes("character")) {
					cell.innerText = inventory[keys[i]]; // keepsakes and characters don't have quantity
				}
				else cell.innerText = "\n"
				
				row.appendChild(cell);
				cells.push(cell);
				
			}
			
		}
		
	}
	table.appendChild(row);
	return cells;
}

// selects a cell in an inventory table
function selectInventoryCell(cell) {
	// get a reference to the containing table
	let table = cell.parentElement.parentElement;
	
	// iterate through all the table's cells and remove selected status
	for (let i = 0; i < table.rows.length; i++) {
		for (let j = 0; j < table.rows[i].cells.length; j++) {
			let currentCell = table.rows[i].cells[j];
			currentCell.classList.remove("selected");
			if (currentCell.checkmark) {
				currentCell.removeChild(currentCell.checkmark);
				currentCell.checkmark = null;
			}
		}
	}
	
	// add selected status to the cell
	cell.classList.add("selected");
	cell.style.position = "relative";
	cell.checkmark = document.createElement("div");
	cell.checkmark.className = "checkmark";
	cell.appendChild(cell.checkmark);
}
