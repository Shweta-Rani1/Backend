
const os = require("os");
const chalk = require("chalk");
const validator=require("validator");

//console.log(chalk.red.underline.inverse("Failure"));



const res=validator.isEmail('foo@ar.com'); //=> true
console.log(res ? chalk.green.underline.inverse(res) : chalk.red.underline.inverse(res));