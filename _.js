const _ = {
	el: id => document.getElementById(id), 
	show: id => document.getElementById(id).style.visibility = "visible", 
	hide: id => document.getElementById(id).style.visibility = "hidden", 
	randMax: max => Math.floor(Math.random() * (max + 1)), 
	randRange: (min, max) => min + Math.floor(Math.random() * (max - min + 1))
};
