$('document').ready(function() {
	
	var politicalTerms = ["economic freedom", "living wage", "patriotic American", "strategy", "recess", "gravitas", "lean forward", "budget buster", "fair trade", "Washington is broken", "insider", "My good friend from", "rest assured", "activist judges", "unelected bureaucrats", "out-of-touch politicians", "backbone of our economy", "minimum wage", "social safety net", "welfare", "war on Christmas", "original intent", "living Constitution", "better roads", "it is for the Children", "bipartisan", "across the aisle", "my colleague", "constitutional", "founding fathers", "pundit", "pork barrel", "war on drug", "war on poverty", "kick the can down the road", "it was Bush's fault", "conservative", "liberal", "silent majority", "chicken hawks", "progressive Democrat", "compassionate conservative", "Tea Party", "gun control", "Obamacare", "states rights", "corporate welfare", "99 percent", "1 percent", "crony capitalism", "illegal alien", "immigrant", "undocumented worker", "inside the beltway", "bureaucrats", "polarized", "unfunded mandate", "war on the West", "lamestream media", "whistleblower", "earmark", "Reagan democrat", "Reagan", "bleeding heart", "Washington insider", "liberal elites", "fresh face", "bipartisanship", "climage change", "drill baby drill", "war on women", "safe, legal, and rare", "shrinking middle class", "flat tax", "lower taxes", "fair share", "free market", "patriot", "hero", "border security", "politically correct", "hate speech", "underprivileged", "white privilege", "black lives matter", "tax increase", "corporate loophole", "wealthy", "shining city on the hill", "tear this wall down", "pro-choice", "pro-abortion", "pro-life"];

	// Define array for all terms

	// Define global variables

	var numberOfParagraphs = 0; 

	// User selects number of paragraphs

	$('#paragraphButton').on('click', function() {
		$('#polipsumText').empty();
		var paragraphLength = 15;
		numberOfParagraphs = $('#paragraphInput').val();
		// Set variable to number of paragraphs

		for (i = 0; i < numberOfParagraphs; i++) {
			paragraphLength = Math.floor(Math.random()*50)
			console.log(paragraphLength);
			paragraphLength = paragraphLength + 15;
					// Variable set to random number between 15 and 65 

			polipsumParagraph = '';
					// Reset paragraph 

			for (j=0; j < paragraphLength; j++) {
						// Loop for number of times of variable for number of paragraphs
				polipsumWord = Math.floor(Math.random()*(politicalTerms.length-1));
						// Variable set to random number between 0 and length of politicalTerms-1

				polipsumParagraph = polipsumParagraph + ' ' + politicalTerms[polipsumWord];
						// Add string located at variable position within array
			}

			$('#polipsumText').append('<p>'+polipsumParagraph);


		// Capitalize first letter
		// Add to HTML 

		}
	});

 	// $(function() {
  //   	$( "#polipsumText" ).selectable();
 	// });

});

