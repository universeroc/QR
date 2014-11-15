
chrome.tabs.onSelectionChanged.addListener(function(tabId) {
  lastTabId = tabId;
  chrome.pageAction.show(lastTabId);

  chrome.pageAction.setPopup({
    tabId: lastTabId,
    popup: 'qr.html'
  });
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  lastTabId = tabs[0].id;
  chrome.pageAction.show(lastTabId);

  chrome.pageAction.setPopup({
    tabId: lastTabId,
    popup: 'qr.html'
  });
});
