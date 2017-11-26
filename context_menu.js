chrome.contextMenus.create({
    title: "Search Jisho.org for \"%s\"",
    contexts: ["selection"],
    onclick: navigateToJishoFromContextMenu
});

function navigateToJishoFromContextMenu(info, tab) {
    navigateToJisho(info.selectionText)
};
