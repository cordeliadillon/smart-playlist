var acceptableURLs = ["https://youtube.com", "http://youtube.com", "www.youtube.com",
            "https://soundcloud.com", "http://soundcloud.com", "www.soundcloud.com",
            "https://spotify.com", "http://spotify.com", "www.spotify.com"];

function checkForValidUrl(tabId, changeInfo, tab) {
  var isAcceptableURL = false;
  for(var i = 0; i < acceptableURLs.length; i++) {
    if(tab.url.indexOf(acceptableURLs[i]) > -1) {
      isAcceptableURL = true;
      break;
    }
  }
  if(isAcceptableURL) {
    chrome.browserAction.setBadgeText({"text": "Hey!"});
  } else {
    chrome.browserAction.setBadgeText({"text": ""});
  }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);