import { navigateToJisho } from "./shared_functions.js";

document.addEventListener("DOMContentLoaded", () => {
    var searchTextField = document.getElementById("search-text");
    searchTextField.addEventListener('keypress', handleKeyPress, false);

    var searchButton = document.getElementById("search-submit");
    searchButton.onclick = handleSearchButton;

    var jishoLink = document.getElementById("jisho-link");
    jishoLink.onclick = (event) => {
        event.stopPropagation();
        navigateToJisho("");
    };
});

function handleKeyPress(event) {
    var keyCode = event.keyCode;
    // Search when Enter/Return key is pressed
    if (keyCode == 13) {
        var searchText = event.target.value;
        navigateToJisho(searchText);
    }
};

function handleSearchButton() {
    var searchText = document.getElementById("search-text").value;
    navigateToJisho(searchText)
};
