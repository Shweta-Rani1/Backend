const fs=require("fs");

const biodata = {
    name: "Shweta",
    age : 20,
    college: "BIT Sindri, Dhanbad",
};

//console.log(biodata.name);


const jsondata=JSON.stringify(biodata);
fs.writeFile("json1.json", jsondata, (err) => {
    console.log("done");
});
//console.log(jsondata);

//const objdata=JSON.parse(jsondata);
//console.log(objdata);
//console.log(biodata.name);

fs.readFile("json1.json", "utf-8", (err,data)=> {
    const orgdata = JSON.parse(data);
    console.log(data);
    console.log(orgdata);
});