function prompt(question, callback){
	var stdin = process.stdin;
	var stdout = process.stdout;

	stdin.resume();
	stdout.write(question);

	stdin.once('data', function(data) {
		callback(data.toString().trim());
	});
}

module.exports = prompt;