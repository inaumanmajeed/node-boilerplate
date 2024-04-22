import Express, { json } from "express";
import userRouter from "./src/Routes/user.js";
import postRouter from "./src/Routes/post.js";
import authRouter from "./src/Routes/userAuth.js";
import { connect } from "mongoose";

const PORT = 3000;
const app = Express();

//MongoDB server conection

let server;
connect("mongodb://localhost:27017").then(()=>{
    console.log("mongodb connected");
})


//middlewares
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(json({limit:'1000mb'}));


// User Routes creation
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/auth", authRouter);


// route-check route
app.use("/health", function(req, res){
    console.log("Health Check");
    res.send("health check working");
})


// Listening on Port
app.listen(PORT, function(){
    console.log(`Server is up and running at PORT ${PORT}`)
});