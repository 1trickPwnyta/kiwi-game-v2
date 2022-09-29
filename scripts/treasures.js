function getTreasureName(id) {
	return TREASURES[id].name;
}

function getTreasureSet(id) {
	return TREASURES[id].set;
}

function getTreasureImage(id) {
	return `./images/treasure/treasure-${id}.png`;
}

function getTreasureCost(id) {
	if (getTreasureSet(id) == "stars") return 200;
	else return 10;
}

function getTreasureTags(id) {
	return TREASURES[id].tags;
}

function getTreasureDesc(id) {
	return TREASURES[id].description;
}

const TREASURES = {
	"heart-cyan": {
		id: "heart-cyan",
		name: "cyan heart",
		set: "hearts",
		tags: ["wearable", "treasure"]
	},
	"heart-red": {
		id: "heart-red",
		name: "red heart",
		set: "hearts",
		tags: ["wearable", "treasure"]
	},
	"heart-yellow": {
		id: "heart-yellow",
		name: "yellow heart",
		set: "hearts",
		tags: ["wearable", "treasure"]
	},
	"triangle-cyan": {
		id: "triangle-cyan",
		name: "cyan triangle",
		set: "triangles",
		tags: ["wearable", "treasure"]
	},
	"triangle-red": {
		id: "triangle-red",
		name: "red triangle",
		set: "triangles",
		tags: ["wearable", "treasure"]
	},
	"triangle-yellow": {
		id: "triangle-yellow",
		name: "yellow triangle",
		set: "triangles",
		tags: ["wearable", "treasure"]
	},
	"star-cyan": {
		id: "star-cyan",
		name: "cyan star",
		set: "stars",
		tags: ["wearable", "treasure"]
	},
	"star-red": {
		id: "star-red",
		name: "red star",
		set: "stars",
		tags: ["wearable", "treasure"]
	},
	"star-yellow": {
		id: "star-yellow",
		name: "yellow star",
		set: "stars",
		tags: ["wearable", "treasure"]
	},
	"cat-cyan": {
		id: "cat-cyan",
		name: "cyan cat",
		set: "cats",
		tags: ["wearable", "treasure"]
	},
	"cat-red": {
		id: "cat-red",
		name: "red cat",
		set: "cats",
		tags: ["wearable", "treasure"]
	},
	"cat-yellow": {
		id: "cat-yellow",
		name: "yellow cat",
		set: "cats",
		tags: ["wearable", "treasure"]
	},
	"moo-cyan": {
		id: "moo-cyan",
		name: "cyan moo",
		set: "moos",
		tags: ["wearable", "treasure"]
	},
	"moo-red": {
		id: "moo-red",
		name: "red moo",
		set: "moos",
		tags: ["wearable", "treasure"]
	},
	"moo-yellow": {
		id: "moo-yellow",
		name: "yellow moo",
		set: "moos",
		tags: ["wearable", "treasure"]
	},
	"bone-cyan": {
		id: "bone-cyan",
		name: "cyan bone",
		set: "bones",
		tags: ["wearable", "treasure"]
	},
	"bone-red": {
		id: "bone-red",
		name: "red bone",
		set: "bones",
		tags: ["wearable", "treasure"]
	},
	"bone-yellow": {
		id: "bone-yellow",
		name: "yellow bone",
		set: "bones",
		tags: ["wearable", "treasure"]
	},
	"blue-rose": {
		id: "blue-rose",
		name: "blue rose",
		tags: ["wearable", "keepsake"],
		description: "Testing"
	},
	"awkward-trio": {
		id: "awkward-trio",
		name: "awkward trio",
		tags: ["wearable", "keepsake"],
		description: "Testing"
	}
};
