# jisho-extension (Now Manifest V3) ![icon](icon32.png)
A Chrome extension that makes it slightly more convenient to look up kanji on Jisho.org.

[Here is a link to the extension on the Chrome Web Store.](https://chrome.google.com/webstore/detail/jisho-extension/iblocgbegbfbikfpjajboohgnegaonho)

----
<img src="https://raw.githubusercontent.com/gbrixey/jisho-extension/main/screenshot.png" alt="Screenshot of the Jisho extension in action"/>

----
## Update
Now opens a new window so you can close it and return to your most recent tab more easily.  Also allows for the use of the keyboard shortcut "CTRL-Y" to do the same action with highlighted text so no right-clicking neccessary.  In order to do this it injects js into every webpage that listens for a message from the chrome extension that asks for the selectedText on the page (what is currently highlighted).