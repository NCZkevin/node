var fs = require('fs')
	,stdin = process.stdin
	,stdout = process.stdout

function file(i){
	var filename = files[i];

	fs.stat(__dirname + '/' + filename,function (err, stat){
		if (stat.isDirectory()) {
			console.log('  ');
		}
		else {
			console.log('  ');
		}
		if (++i == files.length) {
			read();
		} else {
			file(i);
		}

	});
}