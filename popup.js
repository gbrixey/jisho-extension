document.addEventListener("DOMContentLoaded", () => {
    var kanjiField = document.getElementById("kanji");
    kanjiField.addEventListener('keypress', handleKeyPress, false);
});

function handleKeyPress(event) {
    var keyCode = event.keyCode;
    if(keyCode == 13) {
        navigateToJisho();
    }
};

function navigateToJisho() {
    var kanji = document.getElementById("kanji").value;
    var jishoURL = "http://jisho.org/search/" + kanji + "%23kanji";
    chrome.tabs.update({
        url: jishoURL
    });
};
