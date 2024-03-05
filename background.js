import { navigateToJisho } from "./shared_functions.js";

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "search-jisho",
        title: "Search Jisho.org for \"%s\"",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "search-jisho") {
        navigateToJisho(info.selectionText)
    }
});
