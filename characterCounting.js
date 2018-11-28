//enter input phrase in command line using node
//output will show 

var userInput = process.argv[2];

var characterCount = {

};

var countLetters = function(phrase) {
	var lowerPhrase = phrase.toLowerCase();
	var len = lowerPhrase.length;
	for (var i = 0; i < len; i++) {
		if (lowerPhrase[i] === " ") {
			continue;
		}
		if (characterCount[lowerPhrase[i]]) {
			characterCount[lowerPhrase[i]] = [];
		} else {
			characterCount[lowerPhrase[i]] = [i];
		}
	}
	console.log(characterCount);
}

countLetters(userInput);