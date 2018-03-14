module.exports = function(command) {
	return require("child_process").execSync(command, {stdio:[process.stdin, process.stdout, process.stderr]});
};