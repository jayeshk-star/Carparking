const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/cars", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
      console.log("conncetion sucssful")
  })
 .catch((e)=>{
    console.log("error")
 })
