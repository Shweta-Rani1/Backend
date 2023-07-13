const EventEmitter = require("events");
const event=new EventEmitter();

/*event.on('saySomething', () => {
    console.log("Helloooooo!! Shweta this side")
});
event.on('saySomething', () => {
    console.log("I hate u Vishwajeet")
});

event.emit("saySomething");
*/
event.on('checkPage', (sc,msg) => {
    console.log(`statuscode is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok");