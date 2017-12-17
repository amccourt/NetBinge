var autoSkip    = false;
var	stillThere  = false;
var blurredDesc = false; 

/*  Load saved values  */
chrome.storage.sync.get('autoSkip', function(data) {
	autoSkip = data.autoSkip;
});

chrome.storage.sync.get('stillThere', function(data) {
	stillThere = data.stillThere;
});

chrome.storage.sync.get('blurredDesc', function(data) {
	blurredDesc = data.blurredDesc;
});


setInterval(function() { 

	/*  Skip intro if selected  */
	if (autoSkip) {
		try {
			if (!document.querySelector('div.skip-credits').classList.contains('skip-credits-hidden')) {
				document.querySelector('a.nf-icon-button.nf-flat-button.no-icon').click();
    		}
    	}
    	catch(err) {
    		console.log(err);
    	}
	}

	/*  Skip "Are You Still There"  if selected  */
	if (stillThere) {
		try {
			var buttons = document.getElementsByClassName('continue-playing');

			for (var i = 0; i < buttons.length; i++) {
				buttons[i].click();
			}
		}
		catch(err) {
			console.log(err);
		}
	}

	/*  Blur Episode Descriptions if selected  */
	if (blurredDesc) {
		try {
			var descList = document.getElementsByClassName('episodeSynopsis');

			for (var i = 0; i < descList.length; i++) {
				descList[i].setAttribute("style", "color: transparent; text-shadow: 0 0 10px white;");
			}

			descList = document.getElementsByClassName('synopsis');

			for (var i = 0; i < descList.length; i++) {
				descList[i].setAttribute("style", "color: transparent; text-shadow: 0 0 10px white;");
			}
		}
		catch(err) {
			console.log(err);
		}
	}

}, 100);

