const db_name = path.join(__dirname, "data", "apptest.db");
const db = new sqlite3.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'apptest.db'");
});

const express = require("express");

const sqlite3 = require("sqlite3").verbose();

const app = express();

app.listen(3000, () => { 
  console.log("Server started (http://localhost:3000/) !");
});

app.get("/", (req, res) => { 
  res.send ("Hello world...");
});

app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.get("/", (req, res) => { 
  // res.send("Hello world...");
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/data", (req, res) => {
  const test = {
    title: "Test",
    items: ["one", "two", "three"]
  };
  res.render("data", { model: test });
});