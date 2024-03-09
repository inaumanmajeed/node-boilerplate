const Express  =require("express");
const userRouter =require("./src/Routes/user.js");
// import postRouter from "./src/Routes/post.js";
const mongoose = require("mongoose");

let server;
mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("mongodb connected");
})

const app = new Express();
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(Express.json({limit:'1000mb'}));

app.use("/user", userRouter);
// app.use("/post", postRouter);


app.use("/health", function(req, res){
    console.log("Health Check");
    res.send("health check working");
})


app.listen(3000, function(){
    console.log("Server is up and running at PORT 3000")
})