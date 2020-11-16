const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('Bundling project...');

function copyFolder(folder, out) {
	// Create folder if not exists
	if (!fs.existsSync(out)) fs.mkdirSync(out);
	const files = fs.readdirSync(folder);

	// Recursion :D
	files.forEach(file => {
		const filePath = path.join(folder, file);
		const outPath = path.join(out, file);

		if (fs.statSync(filePath).isDirectory()) copyFolder(filePath, outPath);
		else if (!fs.existsSync(outPath)) fs.copyFileSync(filePath, outPath);
	});
}

// Run webpack command
exec('yarn webpack --config ./webpack/webpack.prod.js', (stdErr, stdOut) => {
	console.error(stdErr);
	console.log(stdOut);

	// Copy files from public folder
	console.log('Copying public folder...');
	copyFolder('public', 'build');

	console.log('Build complete!');
});
