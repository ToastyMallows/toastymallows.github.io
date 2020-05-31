(function () {
	window.addEventListener("DOMContentLoaded", () => {
		function vsCode() {

			const HIDDEN_CLASS = "hidden";
			const SELECTED_SIDE_MENU_ITEM_CLASS = "selectedSideMenuItem";
			const FLYOUT_PANE_ITEM_CLASS = "flyoutPaneItem";

			let bodyWrapper = document.getElementById("bodyWrapper");
			let flyoutPane = document.getElementById("flyoutPane");

			let explorerSideMenuItem = document.getElementById("explorerMenuItem");
			let explorerFlyoutPane = document.getElementById("explorerFlyoutPane");

			let searchSideMenuItem = document.getElementById("searchMenuItem");
			let searchFlyoutPane = document.getElementById("searchFlyoutPane");

			let sourceControlSideMenuItem = document.getElementById("sourceControlMenuItem");
			let sourceControlFlyoutPane = document.getElementById("sourceControlFlyoutPane");

			let runSideMenuItem = document.getElementById("runMenuItem");
			let runFlyoutPane = document.getElementById("runFlyoutPane");

			let remoteExplorerSideMenuItem = document.getElementById("remoteExplorerMenuItem");
			let remoteExplorerFlyoutPane = document.getElementById("remoteExplorerFlyoutPane");

			let extensionsSideMenuItem = document.getElementById("extensionsMenuItem");
			let extensionsFlyoutPane = document.getElementById("extensionsFlyoutPane");

			let fileMenuItem = document.getElementById("fileMenuItem");

			function isSideMenuItemSelected(sideMenuItem) {
				return sideMenuItem.classList.contains(SELECTED_SIDE_MENU_ITEM_CLASS);
			}

			function removeAllSelectedMenuItems() {
				const selectedMenuItems = document.getElementsByClassName(SELECTED_SIDE_MENU_ITEM_CLASS);

				for (let i = 0; i < selectedMenuItems.length; i++) {
					const selectedMenuItem = selectedMenuItems[i];

					selectedMenuItem.classList.remove(SELECTED_SIDE_MENU_ITEM_CLASS);
				}
			}

			function hideAllFlyoutPaneItems() {
				const flyoutPaneItems = document.getElementsByClassName(FLYOUT_PANE_ITEM_CLASS);

				for (let i = 0; i < flyoutPaneItems.length; i++) {
					const element = flyoutPaneItems[i];
					element.classList.add(HIDDEN_CLASS);
				}
			}

			function updateFlyoutPane(sideMenuItem, flyoutPaneItem) {
				const isSelected = isSideMenuItemSelected(sideMenuItem);

				if (isSelected) {
					sideMenuItem.classList.remove(SELECTED_SIDE_MENU_ITEM_CLASS);
					flyoutPane.classList.add(HIDDEN_CLASS);
				} else {
					removeAllSelectedMenuItems();
					flyoutPane.classList.remove(HIDDEN_CLASS);
					hideAllFlyoutPaneItems();
					sideMenuItem.classList.add(SELECTED_SIDE_MENU_ITEM_CLASS);
					flyoutPaneItem.classList.remove(HIDDEN_CLASS);
				}
			}

			(function () {
				explorerSideMenuItem.onclick = function () {
					updateFlyoutPane(this, explorerFlyoutPane);
				};

				searchSideMenuItem.onclick = function () {
					updateFlyoutPane(this, searchFlyoutPane);
				};

				sourceControlSideMenuItem.onclick = function () {
					updateFlyoutPane(this, sourceControlFlyoutPane);
				};

				runSideMenuItem.onclick = function () {
					updateFlyoutPane(this, runFlyoutPane);
				};

				remoteExplorerSideMenuItem.onclick = function () {
					updateFlyoutPane(this, remoteExplorerFlyoutPane);
				};

				extensionsSideMenuItem.onclick = function () {
					updateFlyoutPane(this, extensionsFlyoutPane);
				};

				fileMenuItem.onclick = function () {
					// https://javascript.info/coordinates#using-for-fixed-positioning
					let menu = document.createElement("div");
					menu.classList.add("menu");

					let coords = fileMenuItem.getBoundingClientRect();

					menu.style.left = coords.left + "px";
					menu.style.top = coords.bottom + "px";

					menu.innerText = "file menu";

					document.body.append(menu);
				};
			})();
		}

		let website = new vsCode();
	});
})();
