// shows the element in a pop-up dialog box
function showDialog(element, width, height) {
	let dialog = _.el("dialog");
	dialog.innerHTML = "";
	
	// size the box
	dialog.style.width = `${width + 48}px`;
	dialog.style.height = `${height + 48}px`;
	
	// center the box on the screen
	let dialogRect = dialog.getBoundingClientRect();
	dialog.style.left = `calc(50% - ${dialogRect.width/2}px)`;
	dialog.style.top = `calc(50% - ${dialogRect.height/2}px)`;
	
	// create the dismiss button
	let dismiss = document.createElement("div");
	dismiss.id = "dialog-dismiss";
	dismiss.className = "clickable";
	dismiss.innerText = "X";
	dismiss.onclick = () => {
		_.hide("dialog");
		_.hide("dialog-background");
	};
	dialog.appendChild(dismiss);
	
	dialog.appendChild(element);
	
	_.show("dialog");
	_.show("dialog-background");
}
