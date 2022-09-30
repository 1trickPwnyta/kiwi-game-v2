const MAX_LEVEL = 5;
const COST_PER_GAME = 5;

const TREASURE_POOL = [
	"heart-cyan",
	"heart-red",
	"heart-yellow",
	"triangle-cyan",
	"triangle-red",
	"triangle-yellow", 
	"cat-cyan",
	"cat-red",
	"cat-yellow",
	"moo-cyan",
	"moo-red",
	"moo-yellow",
	"bone-cyan",
	"bone-red",
	"bone-yellow"
];
const TREASURE_POOL_EXCLUSIVE = [ // treasures exclusive to particular levels
	[],	// There is no level 0
	[],
	[],
	[],
	[],
	[
		"star-cyan",
		"star-red",
		"star-yellow"
	]
];

const KEEPSAKE_POOL = [
	"blue-rose",
	"awkward-trio"
];

const CHARACTER_POOL = [
	"character-mint"
];

const SIDEBAR_CONTENT_IDS = [ // these are hidden when the sidebar is closed or changed
	"sidebar-content-your-kiwi",
	"sidebar-content-collection",
	"sidebar-content-inventory",
	"sidebar-content-shop",
	"shop-dialog",
	"sidebar-content-keepsakes",
	"keepsakes-dialog",
	"sidebar-content-settings"
];
