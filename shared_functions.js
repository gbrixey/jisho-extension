var JISHO_BASE_URL = 'https://jisho.org';

function navigateToJisho(searchText) {
    var jishoURL = `${JISHO_BASE_URL}/search/${searchText}`;
    // If this is a single kanji character, append #kanji to the URL
    // to navigate directly to the kanji page
    if (/^[\u4e00-\u9faf]$/.test(searchText)) {
        jishoURL = jishoURL + "%23kanji";
    }
    chrome.tabs.create({
        url: jishoURL
    });
}

function navigateToJishoHome(){
    chrome.tabs.create({
        url: JISHO_BASE_URL
    });
}
