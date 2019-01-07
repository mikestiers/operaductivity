chrome.browserAction.onClicked.addListener(function() {
	alert("test")
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		chrome.tabs.create({
			"url": "http://dev.opera.com"

		});
	});
});
