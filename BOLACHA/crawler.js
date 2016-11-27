var crawlerjs = require('crawler-js');

var data = ['http://www.folha.uol.com.br/'];
var timeResponse = 1000;

var initCrawler = function(url){
  var crawler = {
    interval: timeResponse,
    getSample: url,
    get: url,
    preview: 0,
    extractors: [
      {
        selector: 'a',
        callback: function(err, html){       
          if(!err){
            if (inArray()) {}
            data.push(html.attr('href'));
            

          }else{
            console.log(err);
          }
        },


      }
    ]
  }
  crawlerjs(crawler);
  setTimeout(function(){console.log(data.length)},timeResponse)

}

initCrawler(data[0]);
console.log(data[0]);

setTimeout(function(){
  initCrawler(data[1]);
  console.log(data[0]);
},timeResponse)
