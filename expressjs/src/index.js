const path=require("path");
const express= require('express');
const hbs = require("hbs");
const requests = require("requests");
const app = express();
const port =8000;
//console.log(__dirname);
//console.log(path.join());

//built-in middleware;
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.static(staticPath));

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);


//app.use(express.static(staticPath));

//app.use(express.static(staticPath));
/*app.get("/", (req,res) =>{
    res.send("<h1>Hello world from shweta</h1>");
    res.send("<h1>Welcome to my home page</h1>");
    res.send();
   });
*/
app.get("", (req,res) =>{
    requests(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=2fa13e0ee644ef32a5e930a9f361cab8;`
      )
        .on("data", (chunk) => {
          const objdata = JSON.parse(chunk);
          const arrData = [objdata];
          console.log(`city name is ${arrData[0].main} and the temp is ${arrData[0].main.temp}`);
          res.write(realTimeData);
});
   app.get("/", (req,res) =>{
    res.send("Hello world from aboutus page");
   });
/*
   app.get("/temp", (req,res) =>{
    res.send([
        {
        id:1,
        name: "Shweta",
        },
        {
            id:1,
            name: "Shweta",  
        },
        {
            id:1,
            name: "Shweta",  
        },
    ]);
   });*/
    app.listen(port, () => {
        console.log(`listening the port at ${port}`)
    });