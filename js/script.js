$('document').ready(function() {
	
	var politicalTerms = ["economic freedom", "living wage", "patriotic American", "strategy", "recess", "gravitas", "lean forward", "budget buster", "fair trade", "Washington is broken", "insider", "My good friend from", "rest assured", "activist judges", "unelected bureaucrats", "out-of-touch politicians", "backbone of our economy", "minimum wage", "social safety net", "welfare", "war on Christmas", "original intent", "living Constitution", "better roads", "it is for the Children", "bipartisan", "across the aisle", "my colleague", "constitutional", "founding fathers", "pundit", "pork barrel", "war on drug", "war on poverty", "kick the can down the road", "it was Bush's fault", "conservative", "liberal", "silent majority", "chicken hawks", "progressive Democrat", "compassionate conservative", "Tea Party", "gun control", "Obamacare", "states rights", "corporate welfare", "99 percent", "1 percent", "crony capitalism", "illegal alien", "immigrant", "undocumented worker", "inside the beltway", "bureaucrats", "polarized", "unfunded mandate", "war on the West", "lamestream media", "whistleblower", "earmark", "Reagan democrat", "Reagan", "bleeding heart", "Washington insider", "liberal elites", "fresh face", "bipartisanship", "climage change", "drill baby drill", "war on women", "safe, legal, and rare", "shrinking middle class", "flat tax", "lower taxes", "fair share", "free market", "patriot", "hero", "border security", "politically correct", "hate speech", "underprivileged", "white privilege", "black lives matter", "tax increase", "corporate loophole", "wealthy", "shining city on the hill", "tear this wall down", "pro-choice", "pro-abortion", "pro-life"];

	// Define array for all terms

	// Add in Trump phrases 

	politicalTerms.push ("USA, USA, USA", "the most in the history of the Republican Party", "the Republican Party would get 60 percent more votes than it received eight years ago", "who would’ve believed this", "not so good, not so good", "together, we will lead our party back to the White House", "we will lead our country back to safety, prosperity, and peace", "we will be a country of generosity and warmth", "we will also be a country of law and order", "our convention occurs at a moment of crisis for our nation", "the attacks on our police, and the terrorism of our cities, threaten our very way of life", "any politician who does not grasp this danger is not fit to lead our country", "the crime and violence that today afflicts our nation will soon and I mean very soon", "it is finally time for a straightforward assessment of the state of our nation", "I will present the facts plainly and honestly", "we cannot afford to be so politically correct anymore", "if you want to hear the corporate spin, the carefully-crafted lies, and the media myths, the Democrats are holding their convention next week", "We will honor the American people with the truth, and nothing else", "at our convention, there will be no lies", "decades of progress made in bringing down crime are now being reversed by this Administration’s rollback of criminal enforcement", "they are being released by the tens of thousands into our communities with no regard for the impact on public safety or resources", "One more child to sacrifice on the altar of open borders", "What about our economy?", "We’re gonna fix that", "the budget is no better", "President Obama has almost doubled our national debt to more than $19 trillion, and growing", "our roads and bridges are falling apart, our airports are Third World condition, and forty-three million Americans are on food stamps", "now let us consider the state of affairs abroad", "it will go down in history as one of the worst deals ever negotiated", "another humiliation came when president Obama drew a red line in Syria – and the whole world knew it meant absolutely nothing", "America is far less safe – and the world is far less stable – than when Obama made the decision to put Hillary Clinton in charge of America’s foreign policy", "let's defeat her in November", "After four years of Hillary Clinton, what do we have?", "ISIS has spread across the region, and the entire world", "Libya is in ruins, and our Ambassador and his staff were left helpless to die at the hands of savage killers", "Egypt was turned over to the radical Muslim brotherhood, forcing the military to retake control", "Iraq is in chaos", "Iran is on the path to nuclear weapons", "Syria is engulfed in a civil war and a refugee crisis now threatens the West", "after fifteen years of wars in the Middle East, after trillions of dollars spent and thousands of lives lost, the situation is worse than it has ever been before", "This is the legacy of Hillary Clinton: death, destruction, terrorism and weakness", "Hillary Clinton’s legacy does not have to be America’s legacy", "the problems we face now – poverty and violence at home, war and destruction abroad – will last only as long as we continue relying on the same politicians who created them in the first place", "a change in leadership is required to produce a change in outcomes", "I will share with you my plan of action for America", "the most important difference between our plan and that of our opponent, is that our plan will put America first", "Americanism, not globalism, will be our credo", "As long as we are led by politicians who will not put America first, then we can be assured that other nations will not treat America with respect the respect that we deserve", "American people will come first once again", "my plan will begin with safety at home – which means safe neighborhoods, secure borders, and protection from terrorism", "there can be no prosperity without law and order", "I will outline reforms to add millions of new jobs and trillions in new wealth that can be used to rebuild America", "special interests have rigged our political and economic system for their exclusive benefit", "big business, elite media and major donors are lining up behind the campaign of my opponent because they know she will keep our rigged system in place", "she is their puppet, and they pull the strings", "my message is that things have to change – and they have to change right now", "every day I wake up determined to deliver a better life for the people all across this nation that have been neglected, ignored, and abandoned", "I have visited the laid-off factory workers, and the communities crushed by our horrible and unfair trade deals", "these are the forgotten men and women of our country and they are forgotten but they’re not going to be forgotten long", "These are people who work hard but no longer have a voice", "I am your voice", "I have embraced crying mothers who have lost their children because our politicians put their personal agendas before the national good", "I have no patience for injustice, no tolerance for government incompetence, no sympathy for leaders who fail their citizens");

	// Define global variables

	var numberOfParagraphs = 0; 

	// User selects number of paragraphs

	$('#paragraphButton').on('click', function() {
		$('#polipsumText').empty();
		var paragraphLength = 40;
		numberOfParagraphs = $('#paragraphInput').val();
		// Set variable to number of paragraphs

		for (i = 0; i < numberOfParagraphs; i++) {
			paragraphLength = Math.floor(Math.random()*50)
			paragraphLength = paragraphLength + 4;
					// Variable set to random number between 40 and 90 

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

