var http = require('http');
var	dt = require('./datetime.js');
var os = require('os');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("Dorian donne moi l'heure et la date" + os.EOL + "Dorian : Tres bien il est actuellement " + dt.datetime());
	res.end('benbozo le clown ' + os.EOL + 'Moi : Merci Dbebou');
}).listen(8080);