var USE_FURIGANA_SETTING_KEY = 'useFurigana';
var USING_FURIGANA_TEXT = 'あ';
var USING_ALPHA_TEXT = 'A';

var searchTextFieldFurigana;
var searchTextFieldAlpha;
var furiganaToggleButton;

document.addEventListener("DOMContentLoaded", () => {
    searchTextFieldAlpha = document.getElementById('search-text-alpha');
    searchTextFieldFurigana = document.getElementById('search-text-furigana');
    searchTextFieldAlpha.addEventListener('keypress', handleKeyPress, false);
    searchTextFieldFurigana.addEventListener('keypress', handleKeyPress, false);

    // Setup furigana toggle button
    furiganaToggleButton = document.getElementById('furigana-toggle');
    wanakana.bind(searchTextFieldFurigana);
    furiganaToggleButton.onclick = handleFuriganaToggle;
    loadFuriganaSetting();

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
    // Switch between furigana and alpha by hiding or showing the relevant textfield
    if (useFurigana){
        furiganaToggleButton.innerHTML = USING_FURIGANA_TEXT;
        searchTextFieldAlpha.style.display = "none";
        searchTextFieldFurigana.style.display = "inline";

        searchTextFieldFurigana.value = wanakana.toKana(searchTextFieldAlpha.value);
        searchTextFieldAlpha.value = '';

        searchTextFieldFurigana.focus();
    }else{
        furiganaToggleButton.innerHTML = USING_ALPHA_TEXT;
        searchTextFieldAlpha.style.display = "inline";
        searchTextFieldFurigana.style.display = "none";

        searchTextFieldAlpha.value = wanakana.toRomaji(searchTextFieldFurigana.value);
        searchTextFieldFurigana.value = '';

        searchTextFieldAlpha.focus();
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
        if (result.hasOwnProperty(USE_FURIGANA_SETTING_KEY)) {
            setFuriganaTextMode(result[USE_FURIGANA_SETTING_KEY]);
        } else {
            // No settings, set and use default
            var defaultFuriganaSetting = false;
            saveFuriganaSetting(defaultFuriganaSetting);
            setFuriganaTextMode(defaultFuriganaSetting);
        }
    });
}
