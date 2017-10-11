function setUpQRHandler(tabId) {
  chrome.pageAction.show(tabId);
  chrome.pageAction.setPopup({
    tabId: tabId,
    popup: 'qr.html'
  });
}

chrome.tabs.onCreated.addListener(setUpQRHandler);
chrome.tabs.onUpdated.addListener(setUpQRHandler);
chrome.tabs.onSelectionChanged.addListener(setUpQRHandler);
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  lastTabId = tabs[0].id;
  setUpQRHandler(lastTabId);
});
