const express = require("express");
require("./db/conn"); // without export 
const Student = require("./models/students").Student; // with export
const app = express();
const port = process.env.PORT  || 8000;

// convert post man data into json 
app.use(express.json());

// app.get("/", (req, res)=>{
//     res.send("Hello");
// })

// create a new student  
app.post("/student", (req, res)=>{
    // git postman data  
    console.log(req.body);
    const user = new Student(req.body);

    // save data into database 
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
   
})

app.listen(port,()=>{
    console.log(`Server is running on port number ${port}`);
})