function navigateToJisho(searchText) {
    var jishoURL = "http://jisho.org/search/" + searchText;
    // If this is a single kanji character, append #kanji to the URL
    // to navigate directly to the kanji page
    if (/^[\u4e00-\u9faf]$/.test(searchText)) {
        jishoURL = jishoURL + "%23kanji";
    }
    chrome.tabs.create({
        url: jishoURL
    });
}
