var crawlerjs = require('crawler-js');
var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	passaword: '',
	database: 'bd_oompa'
})

connection.connect(function(error) {
	// body...
	if (!!error)
		console.log('Error');
	else
		console.log('Connected'); 
});





var data = [];
var masterCount = 0;
var myStop = 10000;
var title = "";
var helperOompa = {
	inArray: function(el, arr){
		for (var i = 0; i < arr.length; i++) {

			if (el == arr[i])
				return true;

			return false;
		}
	},
	validUrl: function(url) {
		var itensValid = [
			'undefined',
			'javascript:'

		]
		for (var i = 0; i < itensValid.length; i++) {
			if (String(url).indexOf(itensValid[i]) != -1)
				return false;
		}
		return true;
	}
}



var oompaLoompaLink = function(url){
	masterCount++;
	// data = [];
	var crawler = {
	  interval: 1000,
	  getSample: url,
	  get: url,
	  preview: 0,
	  extractors: [
	    {
	      selector: 'a',
	      callback: function(err, html){
	      	
	        if(!err){
	        	var newUrl = html.attr('href')
	          if ((!helperOompa.inArray(newUrl, data))&&(helperOompa.validUrl(newUrl))&&(masterCount < myStop)) {
	          		if (String(newUrl).indexOf('http') != -1) 
	          			data.push(newUrl);
	          		else {
	          			newUrl = url + newUrl;
	          		}
	          		// console.log(newUrl+ " ---> "+ data.length);
	          		// console.log(url+ " ---> "+ data.length);
	          		oompaLoompaLink(newUrl);
	          		console.log("==========================================================================");
	          		console.log("===========================" + masterCount + "==============================");
	          		console.log("==========================================================================");
	          		oompaLoompaSite(newUrl);

	          		app.get('/', function(req,resp) {
						connection.query("INSERT INTO site (link, title) VALUES ('"+ newUrl +"','"+ title +"')", function(error, rows, fields){
							if (!!error)
								console.log('erro query');
							else
								console.log('sucesso query');
						})
					})
	          		
	          }
	          else
	          	return false;

	        }else{
	          // console.log(err);
	        }
	      }
	    }
	  ]
	}

	crawlerjs(crawler);
}

var oompaLoompaSite = function(url){
	data = [];
	masterCount++;
	var crawler = {
	  interval: 1000,
	  getSample: url,
	  get: url,
	  preview: 0,
	  extractors: [
	    {
	      selector: 'html',
	      callback: function(err, html){
	        if(!err){
	          if (masterCount < myStop) {
	        	title = html.find('title').text();
	        	console.log(html.find('title').text())
	          }
	          else
	          	return false;
	        }else{
	          // console.log(err);
	        }
	      }
	    }
	  ]
	}

	crawlerjs(crawler);
}


oompaLoompaLink('http://www.juliaplus.com.br/');
setTimeout(function(){
	console.log('===================================================================');
	// oompaLoompaSite(data[data.length - 1]);
},1000);

app.listen(3306);