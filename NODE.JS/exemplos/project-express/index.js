// ========================================
// primeiro exemplo
// ========================================

// var express = require('express');

// var app = express();

// app.get('/', function(request, response) {
// 	response.end('hello word from scool of net');
// })

// app.listen(300, function() {
// 	console.log('The express server has been started...');
// });

// ========================================
// segundo exemplo
// ========================================

var express = require('express');
var app     = express();
var data    = [];

// 1 - não esta pronto
// 2 - esta pronto

//http://localhost:3000/TesteTarefa/0
app.post('/create/:name/:done', function(request, response) {
	var obj = {
		name: request.params.name,
		done: request.params.done
	}

	data.push(obj);

	return response.status(200).json({
		status : true,
		message: 'Your data has been created',
		data   : obj
	});
});


app.get('/', function(request, response) {
	return response.status(200).json(data);
})


app.listen(300, function(){
	console.log('The server has been started');
})