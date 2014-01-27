smart-playlist
==============
The best playlist you ever did see!

Setup (OSX)
---------------------------
1. Install [homebrew](http://brew.sh/).
2. Make `brew doctor` happy if it has any serious problems with your environment. I had a lot of warnings and it was fine, though.
3. Download and install [node.js](http://nodejs.org/download/) or just `brew install node`
4. Do `brew install libspotify`
5. Clone this repo (if you haven't already)!
6. In project root, do `npm install`
7. Get your spotify developer key (see below).

Installing Chrome Extension
---------------------------
1. In Chrome, go to `chrome://extensions`.
2. Make sure Developer Mode checkbox in top right is checked.
3. Click "Load unpacked extension..."
4. Navigate to and select `smart-playlist/chrome-extension`.

Spotify Developer Key
---------------------
1. Go to the Spotify [Application Keys](https://devaccount.spotify.com/my-account/keys/) page and get yours (register if necessary).
2. Put the key in `provider_modules/spotify/`
 
