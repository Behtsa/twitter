document.getElementById('submit-tweet').addEventListener('click',showTweet);
document.getElementById('tweet').addEventListener('keyup',availableCharacters);

function showTweet() {
	document.getElementById('tweets').style.display = 'block';
	var tweet = document.getElementById('tweet').value;
	//document.getElementById('tweet-content').innerHTML = tweet;
	var pTweet = document.createElement('p');
	pTweet.className = "tweet-content";
	pTweet.innerHTML = tweet;
	var tweetContainer = document.createElement('article');
	tweetContainer.className = "tweet";
	tweetContainer.appendChild(pTweet);
	//console.log(tweetContainer);
	document.getElementById("tweets").appendChild(tweetContainer);
	document.getElementById('tweet').value = "";
	console.log(document.getElementById('tweets'));
}

function availableCharacters() {
	var tweet = document.getElementById('tweet').value;
	var availableCharacters = 140 - tweet.length;
	document.getElementById('submit-tweet').disabled = tweet.length > 0 ? false : true;
	document.getElementById('available-characters').innerHTML = availableCharacters;
	document.getElementById('submit-tweet').disabled = availableCharacters <= 0 ? true : false;
	if(availableCharacters <= 20 && availableCharacters > 10) {
		document.getElementById('available-characters').style.color = 'red';
	} else if (availableCharacters <= 10) {
		document.getElementById('available-characters').style.color = 'blue';
	}
}	