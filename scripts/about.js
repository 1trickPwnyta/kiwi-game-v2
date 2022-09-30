function buttonAbout() {
	let about = document.createElement("div");
	about.id = "about-dialog";
	
	let image = document.createElement("div");
	image.id = "about-image";
	about.appendChild(image);
	
	let text = document.createElement("span");
	text.innerText = "Kiwi Game (working title) is a silly little game drawn by Mouse and coded by 1trickPwnyta. It is very much a work in progress, but we are excited to share it as we go! If you like what we have so far and would like to support us or give feedback, please stop by ko-fi or Twitter!";
	about.appendChild(text);
	
	let twitter = document.createElement("div");
	twitter.id = "about-twitter";
	twitter.className = "clickable";
	twitter.onclick = () => {
		window.open("https://twitter.com/mouse_draws", "_blank");
	};
	about.appendChild(twitter);
	
	let kofi = document.createElement("div");
	kofi.id = "about-kofi";
	kofi.className = "clickable";
	kofi.onclick = () => {
		window.open("https://ko-fi.com/1trickpwnyta", "_blank");
	};
	about.appendChild(kofi);
	
	showDialog(about, 900, 800);
}
