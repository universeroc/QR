chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  jQuery('#qrcode').qrcode({
    width: 212,
    height: 212,
    text: tabs[0].url
  });
});
