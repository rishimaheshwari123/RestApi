const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/student-api",{
}).then(()=>{
    console.log("connection succesfull");
}).catch((err)=>{
    console.log("connection faild");
})