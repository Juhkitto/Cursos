
// =====================================================
// terceiro exemplo
// =====================================================
var prompt = require('../prompt');

prompt('what is your name ?', function(data){
	// console.log(data);
	process.stdout.write(data + "\n");
	process.exit();
});

process.on('exit',function(){
	// console.log('bye bye!!');
	process.stdout.write('bye bye!! \n');

});