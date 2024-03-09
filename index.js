const Express  =require("express");
const userRouter =require("./src/Routes/user.js");
const postRouter = require ("./src/Routes/post.js");
const mongoose = require("mongoose");

const PORT = 3000;
const app = Express();

//MongoDB server conection

let server;
mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("mongodb connected");
})


//middlewares
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(Express.json({limit:'1000mb'}));


// User Routes creation
app.use("/user", userRouter);
app.use("/post", postRouter);


// route-check route
app.use("/health", function(req, res){
    console.log("Health Check");
    res.send("health check working");
})


// Listening on Port
app.listen(PORT, function(){
    console.log("Server is up and running at PORT 3000")
})