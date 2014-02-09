var acceptableURLs = ["https://youtube.com", "http://youtube.com", "www.youtube.com",
            "https://soundcloud.com", "http://soundcloud.com", "www.soundcloud.com",
            "https://spotify.com", "http://spotify.com", "www.spotify.com"];

function isValidURL(tabURL) {
  var isAcceptableURL = false;
  for(var i = 0; i < acceptableURLs.length; i++) {
    if(tabURL.indexOf(acceptableURLs[i]) > -1) {
      isAcceptableURL = true;
      break;
    }
  }
  return isAcceptableURL;
};

function showStuffIfValidUrl(tab) {
  chrome.browserAction.setBadgeText({"text": (isValidURL(tab.url) ? "HEY!" : "")})
}

chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab) {
    showStuffIfValidUrl(tab);
  });
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  showStuffIfValidUrl(tab);
});
