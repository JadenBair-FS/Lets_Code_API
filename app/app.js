const express = require("express");
const todosRouter = require("./router/todosRouter");

const app = express();

// http://localhost:3000
app.get("/", (req, res, next) => {
  res.status(200).send("Service is up");
});

//router middleware
app.use("/jokes", todosRouter);


// add middleware to handle errors and bad url paths
app.use((req,res,next)=>{
  const error = new Error("NOT FOUND");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next)=>{
  res.status(error.staus || 500).json({
    error:{
      message: error.message,
      status: error.status,
      method: req.method,
    }
  })
})


module.exports = app;
