function updateSettings() {
	
}

function setTheme(theme) {
	let links = document.getElementsByTagName("link");
	for (let i = 0; i < links.length; i++) {
		let link = links[i];
		if (link.className == "theme") document.head.removeChild(link);
	};
	let link = document.createElement("link");
	link.href = getThemeStylesheet(theme);
	link.rel = "stylesheet";
	link.className = "theme";
	document.head.appendChild(link);
}
