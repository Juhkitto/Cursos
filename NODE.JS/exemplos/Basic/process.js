// =====================================================
// primeiro exemplo
// =====================================================

// Object.keys(process).forEach(function(value, key){

// 	console.log(value);

// });


// =====================================================
// segundo exemplo
// =====================================================

// function prompt(question, callback){
// 	var stdin = process.stdin;
// 	var stdout = process.stdout;

// 	stdin.resume();
// 	stdout.write(question);

// 	stdin.once('data', function(data) {
// 		callback(data.toString().trim());
// 	});
// }

// prompt('what is your name ?', function(data){
// 	// console.log(data);
// 	process.stdout.write(data + "\n");
// 	process.exit();
// })

// process.on('exit',function(){
// 	// console.log('bye bye!!');
// 	process.stdout.write('bye bye!! \n');

// })


// =====================================================
// terceiro exemplo
// =====================================================

// function prompt(question, callback){
// 	var stdin = process.stdin;
// 	var stdout = process.stdout;

// 	stdin.resume();
// 	stdout.write(question);

// 	stdin.once('data', function(data) {
// 		callback(data.toString().trim());
// 	});
// }

// module.exports = prompt;