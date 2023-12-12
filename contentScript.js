// contentScript.js

// Listen for the 'getSelectedText' message from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "getSelectedText") {
        // Get the selected text from the current page
        const selectedText = window.getSelection().toString();
        
        // Send the selected text back to the background script
        sendResponse({ selectedText: selectedText });
    }
});