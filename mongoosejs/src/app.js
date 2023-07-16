const mongoose=require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/mngodbtutorial", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("DB Connetion Successfull" ))
  .catch((err) =>  console.log(err.message));

