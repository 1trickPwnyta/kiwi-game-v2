// shows all sidebar buttons
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

// hides non-default sidebar buttons
function hideSidebarButtons(delay=0) {
	_.hide("sidebar-back");
	setTimeout(() => { // delay is so buttons don't disappear before the sidebar slides over
		_.hide("sidebar-less");
		_.show("sidebar-more");
		_.hide("sidebar-collection");
		_.hide("sidebar-shop");
		_.hide("sidebar-keepsakes");
		_.hide("sidebar-settings");
	}, delay);
	_.el("sidebar").style.left = "calc(100% - 236px)";
}

// shows the content window for the sidebar
function showSidebarContent() {
	hideSidebarButtons();
	_.show("sidebar-background");
	_.show("sidebar-back");
	SIDEBAR_CONTENT_IDS.forEach(id => _.hide(id));
	_.el("sidebar").style.left = "calc(100% - 1636px)";
}

// hides the content window for the sidebar
function hideSidebarContent() {
	_.hide("sidebar-background");
	_.hide("sidebar-back");
	SIDEBAR_CONTENT_IDS.forEach(id => _.hide(id));
	_.el("sidebar").style.left = "calc(100% - 236px)";
}

// opens and updates the your kiwi sidebar content
function buttonYourKiwi() {
	showSidebarContent();
	_.show("sidebar-content-your-kiwi");
	updateYourKiwi();
	updateYourKiwiInventory();
}

// opens and updates the collection sidebar content
function buttonCollection() {
	showSidebarContent();
	_.show("sidebar-content-collection");
}

// opens and updates the inventory sidebar content
function buttonInventory() {
	showSidebarContent();
	_.show("sidebar-content-inventory");
	updateMainInventory();
}

// opens and updates the shop sidebar content
function buttonShop() {
	showSidebarContent();
	_.show("sidebar-content-shop");
	updateShopInventory();
	updateShopDialog();
}

// opens and updates the keepsakes sidebar content
function buttonKeepsakes() {
	showSidebarContent();
	_.show("sidebar-content-keepsakes");
	updateKeepsakesInventory();
}

// opens and updates the settings sidebar content
function buttonSettings() {
	showSidebarContent();
	_.show("sidebar-content-settings");
	updateSettings();
}

// shows all sidebar buttons
function buttonSidebarMore() {
	showSidebarButtons();
}

// hides non-default sidebar buttons
function buttonSidebarLess() {
	hideSidebarButtons(500);
}
