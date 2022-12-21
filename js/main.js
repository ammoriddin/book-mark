const modifiers = {
  tabItemActive: "tabs__item--active",
  tabPanelActive: "tabpanels__item--active",
  accardionItemOpen: "accardion__item--open",
}


const elsTabItem = document.querySelectorAll(".tabs__item");
const elsTabPanel = document.querySelectorAll(".tabpanels__item");
const elsTabLink = document.querySelectorAll(".js-tab-link");

const elsAccardionItemToggler = document.querySelectorAll(".accardion__item-toggler");  
const elsAccardionItem = document.querySelectorAll(".accardion__item");  

function deactivateTabItems () {
  elsTabItem.forEach(elTabsItem => {
    elTabsItem.classList.remove(modifiers.tabItemActive);
  });
};

function deactivateTabPanels () {
  elsTabPanel.forEach(elTabsPanel => {
    elTabsPanel.classList.remove(modifiers.tabPanelActive);
  });
};

function closeAccardionItems() {
  elsAccardionItem.forEach(elAccardionItem => {
    elAccardionItem.classList.remove(modifiers.accardionItemOpen)
  });
}

elsTabLink.forEach(elTabLink => {
  elTabLink.addEventListener("click", function(evt) {
    // Pravent page move
    evt.preventDefault();

    // Remove active class from tabs__item elements
    deactivateTabItems();

    // Add active class to current tabs__item
    elTabLink.parentElement.classList.add(modifiers.tabItemActive);

    // Remove active class from tabs__panel elements
    deactivateTabPanels();

    // Show active tab panel
    const elTargetPanel = document.querySelector(`${elTabLink.dataset.tabTarget}`);
    elTargetPanel.classList.add(modifiers.tabPanelActive)
  });
});

elsAccardionItemToggler.forEach(elAccardionItemToggler => {
  elAccardionItemToggler.addEventListener("click", function() {
    closeAccardionItems();
    elAccardionItemToggler.closest(".accardion__item").classList.add(modifiers.accardionItemOpen)
  })
});