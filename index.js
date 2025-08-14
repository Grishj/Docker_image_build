const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page, Grish joshi!");
});

app.get("/about", (req, res) => {
  res.send("About Page of containerized application");
});

app.get("/chat", (req, res) => {
  res.send("Chat Page");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
//C:/Users/joshi/Desktop/DevImage