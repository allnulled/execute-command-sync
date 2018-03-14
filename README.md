# execute-command-sync


## 1. Introduction

This is a module for Node.js that will let you run console commands redirecting the input, output and error streams, directly to the console, and also in synchronous code.

## 2. Installation

Download the repository from NPM. To do it, type from the command line:

	npm install -s execute-command-sync

Import in your code the module:

	const executeCommand = require("execute-command-sync");

## 3. Usage

Start using the command like this:

	const output = executeCommand("ls -lA");

## 4. Conclusion

This module is just a wrapper for this answer at StackOverflow:

[Use child_process.execSync but keep output in console](https://stackoverflow.com/questions/30134236/use-child-process-execsync-but-keep-output-in-console#answer-31104898)

Thanks to the great developers that are on StackOverflow, helping every day to do our life a bit easier. Their wisdom is always an honor.

