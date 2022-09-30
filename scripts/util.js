// returns the stylesheet to use for each theme
function getThemeStylesheet(theme) {
	switch (theme) {
		case "light": return "./style/themes/light.css";
		case "dark": return "./style/themes/dark.css";
		default: alert("No such theme: " + theme);
	}
}

// makes an image element that moves from one location to another then disappears
function makeParticle(image, x1, y1, x2, y2) {
	let particle = document.createElement("img");
	particle.src = image;
	particle.className = "particle";
	particle.style.left = x1;
	particle.style.top = y1;
	setTimeout(() => {
		particle.style.left = x2;
		particle.style.top = y2;
	}, 1);
	document.body.appendChild(particle);
	setTimeout(() => document.body.removeChild(particle), 500);
}
