document.addEventListener("DOMContentLoaded", function() {

	/*  Load saved values  */
	chrome.storage.sync.get('autoSkip', function(data) {
		document.getElementById("toggle-autoSkip").checked = data.autoSkip;
	});

	chrome.storage.sync.get('stillThere', function(data) {
		document.getElementById("toggle-stillThere").checked = data.stillThere;
	});

	chrome.storage.sync.get('blurredDesc', function(data) {
		document.getElementById("toggle-blurredDesc").checked = data.blurredDesc;
	});

	/*  Add listener and function for saving data  */
	document.getElementById("saveButton").addEventListener("click", saveChanges);


	function saveChanges() {

		// Get a value
		var autoSkip    = document.getElementById("toggle-autoSkip").checked;
		var stillThere  = document.getElementById("toggle-stillThere").checked;
		var blurredDesc = document.getElementById("toggle-blurredDesc").checked;

		// Save it using the Chrome extension storage API.
		chrome.storage.sync.set( {
			'autoSkip'    : autoSkip,
			'stillThere'  : stillThere,
			'blurredDesc' : blurredDesc
		});

		/*  Close the popup  */
		window.close();

	}

});
