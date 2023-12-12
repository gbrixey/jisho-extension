let contextMenuItemId = "JishoChromeExtensionID";

chrome.contextMenus.create({
    id: contextMenuItemId,
    title: "Search Jisho.org for \"%s\"",
    contexts: ["selection"],
});

// Add an event listener to handle the context menu item click
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    // Check if the clicked menu item is the one we created
    if (info.menuItemId === contextMenuItemId) {
        // Call the function to handle the click
        navigateToJishoFromContextMenu(info, tab);
    }
});

function navigateToJishoFromContextMenu(info, tab) {
    navigateToJisho(info.selectionText);
};

chrome.commands.onCommand.addListener(function(command) {
    if (command === "searchFromShortcut") {
            getSelectedText(function (selectedText) {
                navigateToJisho(selectedText);
            });
        } 
  });

function navigateToJisho(searchText) {
    var jishoURL = "https://jisho.org/search/" + searchText.trim();
    // If this is a single kanji character, append #kanji to the URL
    // to navigate directly to the kanji page
    if (/^[\u4e00-\u9faf]$/.test(searchText)) {
        jishoURL = jishoURL + "%23kanji";
    }
    chrome.windows.create({
        url: jishoURL
    });
}

// Function to get the selected text from the content script
function getSelectedText(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { action: "getSelectedText" }, function (response) {
            callback(response.selectedText);
        });
    });
}

