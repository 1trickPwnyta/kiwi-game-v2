let messages = [];

// determines positioning for each message
function updateMessages() {
	let verticalPosition = 12;
	messages.reverse().forEach(message => {
		setTimeout(() => message.style.left = "0px", 1); // message slides in from the left
		message.style.top = `${verticalPosition}px`;
		let rect = message.getBoundingClientRect();
		verticalPosition += rect.height + 12;
	});
}

// shows a message on the left side of the screen
function showMessage(message) {
	let div = document.createElement("div");
	div.className = "message";
	div.innerText = message;
	
	// dismiss button
	let dismiss = document.createElement("div");
	dismiss.className = "message-dismiss clickable";
	dismiss.innerText = "X";
	dismiss.onclick = e => {
		e.target.parentElement.parentElement.removeChild(e.target.parentElement); // remove the message element
		let index = messages.indexOf(e.target.parentElement);
		messages.splice(index, 1);
		updateMessages();
	};
	div.appendChild(dismiss);
	
	_.el("messages").appendChild(div);
	messages.push(div);
	
	updateMessages();
}
