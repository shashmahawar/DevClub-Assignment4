const http = require("http");

const SECRET = "NGINX"; // You can set any word as the secret answer

function myFunction(req, res) {
	// console.log({req}); // You can uncomment this to see the request object
	const tGUESS = req.url.split('q=')[1];
	let GUESS = tGUESS.toUpperCase();
	let GUESSLIST = GUESS.split('');
	let SECRETLIST = SECRET.split('');
	if (GUESS.length != 5) {
		return res.end('Please enter a 5 letter word!');
	}
	for (i in GUESSLIST) {
		if (GUESSLIST[i] === SECRETLIST[i]) {
			GUESSLIST[i] = 'g';
			SECRETLIST[i] = '0'
		}
	}
	for (i in GUESSLIST) {
		if (SECRETLIST.indexOf(GUESSLIST[i]) > -1) {
			GUESSLIST[i] = 'y';
			SECRETLIST[SECRETLIST.indexOf(GUESSLIST[i])] = '0';
		}
	}
	for (i in GUESSLIST) {
		if (GUESSLIST[i] != 'g' && GUESSLIST[i] != 'y') {
			GUESSLIST[i] = 'b';
		}
	}
	res.setHeader('Content-Type', 'text/plain');
	
	res.end(GUESSLIST.join(''));
}

http.createServer(myFunction).listen(8080);