var USE_FURIGANA_SETTING_KEY = 'useFurigana';
var USING_FURIGANA_TEXT = 'あ';
var USING_ALPHA_TEXT = 'A';

var searchTextField;
var furiganaToggleButton;

document.addEventListener("DOMContentLoaded", () => {
    searchTextField = document.getElementById("search-text");
    searchTextField.addEventListener('keypress', handleKeyPress, false);

    // Setup furigana toggle button
    furiganaToggleButton = document.getElementById('furigana-toggle');
    wanakana.bind(searchTextField);
    loadFuriganaSetting();
    furiganaToggleButton.onclick = handleFuriganaToggle;

    // Setup jisho link
    var jishoLink = document.getElementById("jisho-link");
    jishoLink.onclick = (event) => {
        event.stopPropagation();
        navigateToJishoHome();
    };
});

function handleKeyPress(event) {
    var keyCode = event.keyCode;
    // Search when Enter/Return key is pressed
    if (keyCode == 13) {
        navigateToJishoFromPopup();
    }
};

function navigateToJishoFromPopup() {
    var searchText = document.getElementById("search-text").value;
    searchText = searchText.trim();
    
    if (searchText != ""){
        navigateToJisho(searchText);
    }
};

function setFuriganaTextMode(useFurigana){
    if (useFurigana){
        furiganaToggleButton.innerHTML = USING_FURIGANA_TEXT;
        wanakana.bind(searchTextField);
    }else{
        furiganaToggleButton.innerHTML = USING_ALPHA_TEXT;
        wanakana.unbind(searchTextField);
    }
}

function handleFuriganaToggle(){
    var useFurigana = furiganaToggleButton.innerHTML == USING_FURIGANA_TEXT;
    useFurigana = !useFurigana;

    setFuriganaTextMode(useFurigana);
    saveFuriganaSetting(useFurigana);
}

function saveFuriganaSetting(useFurigana){
    var useFuriganaSetting = {};
    useFuriganaSetting[USE_FURIGANA_SETTING_KEY] = useFurigana;
    chrome.storage.sync.set(useFuriganaSetting);
}

function loadFuriganaSetting(){
    chrome.storage.sync.get(USE_FURIGANA_SETTING_KEY, function(result){
        if (typeof result === "undefined") {
            // No settings, set and use default
            saveFuriganaSetting(true);
            setFuriganaTextMode(true);
        } else {
            setFuriganaTextMode(result[USE_FURIGANA_SETTING_KEY]);
        }
    });
}
