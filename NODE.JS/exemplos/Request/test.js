// ========================================
// primeiro exemplo
// ========================================

// var http = require('http');

// http.createServer(function(request, response) {
// 	console.log(request);
// 	response.writeHead(200,{
// 		'Content-Type' : 'text/plain'
// 	})
// 	return response.end('Hello Word');
// }).listen(3000,'127.0.0.1');



// ========================================
// segundo exemplo - criando um weserver
// ========================================

// var http = require('http');
// function handleRequest(request, response) {
// 	response.writeHead(200, {
// 		'Content-Type' : 'text/plain'
// 	})

// 	var count = 2 + 2;

// 	return response.end('the value of count is =>'.concat(count));
// }
// var server = http.createServer(handleRequest);

// server.on('connection', function(client) {
// 	console.log('There is a new connection'.concat(client.remoteAddress));
// });

// server.listen(3000,'127.0.0.1');

// ========================================
// terceiro exemplo
// ========================================

var http = require('http');
var EventEmitter = require('events').EventEmitter;

function handleRequest(request, response) {
	response.writeHead(200, {
		'Content-Type' : 'text/plain'
	})

	var count = 2 + 2;

	return response.end('the value of count is =>'.concat(count));
}

var server = http.createServer(handleRequest);
var ee = new EventEmitter();

server.on('connection', function(client) {

	ee.emit('newConnection', {
		num1: 10,
		num: 5
	});

	console.log('There is a new connection !!'.concat(client.remoteAddress));
});

ee.on('newConnection', function(data) {
	console.log('Hey, I am a new event registered by event connection from Http module');
	// console.log('data => '.concat(data))
	var count = parseInt(data.num1) + parseInt(data.num2);
	console.log('Result of count equals =>',count)
});

server.listen(3000,'127.0.0.1');





