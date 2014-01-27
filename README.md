smart-playlist
==============

The best playlist you ever did see!

Installing Chrome Extension
---------------------------
1. Clone this repo!
2. In Chrome, go to `chrome://extensions`.
3. Make sure Developer Mode checkbox in top right is checked.
4. Click "Load unpacked extension..."
5. Navigate to and select `smart-playlist/chrome-extension`.

Installing node-spotify (OSX)
-----------------------------
1. Install [node.js](http://nodejs.org/download/).
2. Install [homebrew](http://brew.sh/).
3. Make homebrew happy (do `brew doctor`) if it has any serious problems with your environment. I had a lot of warnings and it was fine, though.
4. Do `brew install libspotify`
5. In project root, do `npm install`

Spotify Developer Key
---------------------
1. Go to the Spotify [Application Keys](https://devaccount.spotify.com/my-account/keys/) page and get yours (register if necessary).
2. Put the key in `provider_modules/spotify/`
 
