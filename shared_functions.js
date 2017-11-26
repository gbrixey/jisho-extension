function navigateToJisho(searchText) {
    var jishoURL = "http://jisho.org/search/" + searchText;
    chrome.tabs.create({
        url: jishoURL
    });
}
