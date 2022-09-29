function showSidebarButtons() {
	hideSidebarContent();
	_.hide("sidebar-back");
	_.show("sidebar-less");
	_.hide("sidebar-more");
	_.show("sidebar-collection");
	_.show("sidebar-shop");
	_.show("sidebar-keepsakes");
	_.show("sidebar-settings");
	_.el("sidebar").style.left = "calc(100% - 448px)";
}

function hideSidebarButtons(delay=0) {
	_.hide("sidebar-back");
	setTimeout(() => {
		_.hide("sidebar-less");
		_.show("sidebar-more");
		_.hide("sidebar-collection");
		_.hide("sidebar-shop");
		_.hide("sidebar-keepsakes");
		_.hide("sidebar-settings");
	}, delay);
	_.el("sidebar").style.left = "calc(100% - 236px)";
}

function showSidebarContent() {
	hideSidebarButtons();
	_.show("sidebar-background");
	_.show("sidebar-back");
	SIDEBAR_CONTENT_IDS.forEach(id => _.hide(id));
	_.el("sidebar").style.left = "calc(100% - 1636px)";
}

function hideSidebarContent() {
	_.hide("sidebar-background");
	_.hide("sidebar-back");
	SIDEBAR_CONTENT_IDS.forEach(id => _.hide(id));
	_.el("sidebar").style.left = "calc(100% - 236px)";
}

function buttonYourKiwi() {
	showSidebarContent();
	_.show("sidebar-content-your-kiwi");
	updateYourKiwi();
	updateYourKiwiInventory();
}

function buttonCollection() {
	showSidebarContent();
	_.show("sidebar-content-collection");
}

function buttonInventory() {
	showSidebarContent();
	_.show("sidebar-content-inventory");
	updateMainInventory();
}

function buttonShop() {
	showSidebarContent();
	_.show("sidebar-content-shop");
	updateShopInventory();
	updateShopDialog();
}

function buttonKeepsakes() {
	showSidebarContent();
	_.show("sidebar-content-keepsakes");
	updateKeepsakesInventory();
}

function buttonSettings() {
	showSidebarContent();
	_.show("sidebar-content-settings");
	updateSettings();
}

function buttonSidebarMore() {
	showSidebarButtons();
}

function buttonSidebarLess() {
	hideSidebarButtons(500);
}
