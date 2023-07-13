/*const fs = require("fs");

//fs.writeFileSync('read.txt', "Welcome to my channel");


//fs.appendFileSync('read.txt', "  hii,shweta this side")

//fs.readFileSync('read.txt');
const buf_data = fs.readFileSync("read.txt");
org_data = buf_data.toString();
console.log(org_data);
*/

const {add,sub,mul,name}= require("./oper");
console.log(add(5,5));
console.log(sub(10,5));
console.log(mul(10,5));
console.log(name);