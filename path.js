const path= require("path");
console.log(path.dirname('C:\Users\acer\Nodedynamic\path.js'));
console.log(path.extname('C:\Users\acer\Nodedynamic\path.js'));
console.log(path.basename('C:\Users\acer\Nodedynamic\path.js'));

const myPath=path.parse('C:\Users\acer\Nodedynamic\path.js');
console.log(myPath.name);