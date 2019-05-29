const express = require("express");
const bodyParser = require("body-parser");
const app = express();

function startServer(){
  //Connect to database
}

startServer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

//Create
app.post("/api/entity", (req, res, next) => {

});

//Read
app.get("/api/passwords", (req, res, next) => {

});

//Update
app.put("/api/passwords", (req, res, next) => {

});


//Delete
app.delete("/api/passwords/:id", (req, res, next) => {
  console.log(req.params)
  Password.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({ message: "Password deleted!" });
  });
});

module.exports = app;
