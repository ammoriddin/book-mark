const elsTabItem = document.querySelectorAll(".tabs__item");
const elsTabPanel = document.querySelectorAll(".tabs__panel");
const elsTabLink = document.querySelectorAll(".js-tab-link");

function deactivateTabItems () {
  elsTabItem.forEach(elTabsItem => {
    elTabsItem.classList.remove("tabs__item--active");
  });
};

function deactivateTabPanels () {
  elsTabPanel.forEach(elTabsPanel => {
    elTabsPanel.classList.remove("tabs__panel--active");
  });
};


elsTabLink.forEach(elTabLink => {
  elTabLink.addEventListener("click", function(evt) {
    // Pravent page move
    evt.preventDefault();

    // Remove active class from tabs__item elements
    deactivateTabItems();

    // Add active class to current tabs__item
    elTabLink.parentElement.classList.add("tabs__item--active");

    // Remove active class from tabs__panel elements
    deactivateTabPanels();

    // Show active tab panel
    const elTargetPanel = document.querySelector(`${elTabLink.dataset.tabTarget}`);
    elTargetPanel.classList.add("tabs__panel--active")
  });
});