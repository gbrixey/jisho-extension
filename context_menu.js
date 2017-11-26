chrome.contextMenus.create({
    title: "Search \"%s\" on Jisho.org",
    contexts: ["selection"],
    onclick: navigateToJishoFromContextMenu
});

function navigateToJishoFromContextMenu(info, tab) {
    navigateToJisho(info.selectionText)
};
