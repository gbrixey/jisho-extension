document.addEventListener("DOMContentLoaded", () => {
    var searchTextField = document.getElementById("search-text");
    searchTextField.addEventListener('keypress', handleKeyPress, false);
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
    navigateToJisho(searchText)
};
