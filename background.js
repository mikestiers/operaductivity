chrome.browserAction.onClicked.addListener(function() {
	alert("your goal should be to not need this button")
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		chrome.tabs.create({
			"url": "https://en.wikipedia.org/wiki/Self-control"

		});
	});
});
