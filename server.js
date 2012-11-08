var BinaryServer = require('binaryjs').BinaryServer;
var fs = require('fs');

var server = BinaryServer({port: 8081});

server.on('connection', function newClient(client)
{
	console.log('new client');
	var file = fs.createReadStream(__dirname + '/beastieBoys-03-justATest-leoNeviloRemix.ogg');
	client.send(file);
});
