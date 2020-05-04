(function () {
	window.addEventListener("DOMContentLoaded", () => {
		function vsCode() {

			const HIDDEN_CLASS = "hidden";
			const SELECTED_SIDE_MENU_ITEM_CLASS = "selectedSideMenuItem";
			const FLYOUT_PANE_ITEM_CLASS = "flyoutPaneItem";

			let flyoutPane = document.getElementById("flyoutPane");

			let explorerMenuItem = document.getElementById("explorerMenuItem");
			let explorerFlyoutPane = document.getElementById("explorerFlyoutPane");

			let searchMenuItem = document.getElementById("searchMenuItem");
			let searchFlyoutPane = document.getElementById("searchFlyoutPane");

			let sourceControlMenuItem = document.getElementById("sourceControlMenuItem");
			let sourceControlFlyoutPane = document.getElementById("sourceControlFlyoutPane");

			let runMenuItem = document.getElementById("runMenuItem");
			let runFlyoutPane = document.getElementById("runFlyoutPane");

			let remoteExplorerMenuItem = document.getElementById("remoteExplorerMenuItem");
			let remoteExplorerFlyoutPane = document.getElementById("remoteExplorerFlyoutPane");

			let extensionsMenuItem = document.getElementById("extensionsMenuItem");
			let extensionsFlyoutPane = document.getElementById("extensionsFlyoutPane");

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
				explorerMenuItem.onclick = function () {
					updateFlyoutPane(this, explorerFlyoutPane);
				};

				searchMenuItem.onclick = function () {
					updateFlyoutPane(this, searchFlyoutPane);
				};

				sourceControlMenuItem.onclick = function () {
					updateFlyoutPane(this, sourceControlFlyoutPane);
				};

				runMenuItem.onclick = function () {
					updateFlyoutPane(this, runFlyoutPane);
				};

				remoteExplorerMenuItem.onclick = function () {
					updateFlyoutPane(this, remoteExplorerFlyoutPane);
				};

				extensionsMenuItem.onclick = function () {
					updateFlyoutPane(this, extensionsFlyoutPane);
				};
			})();
		}

		let website = new vsCode();
	});
})();
