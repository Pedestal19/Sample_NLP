const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Aylien = require("aylien_textapi");

const PORT = process.env.PORT;
const dir = "dist";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(dir));


const nlpApi = new Aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.get("/", (req, res) => res.sendFile("index.html"));

app.post("/analyseText", (req, res) => {
  const { text } = req.body;
  console.log("Request to Aylien::", text);
  nlpApi.sentiment({ url: text }, (error, result, remaining) => {
    console.log("got this from API::", result, remaining);
    res.send(result);
  });
});

app.post("/api", (req, res) => {
  const { text } = req.body;
  console.log("Request to Aylien::", text);
  nlpApi.sentiment({ text }, (error, result, remaining) => {
    console.log("got this from API::", result, remaining);
    res.send(result);
  });
});


app.listen(PORT, () => console.log(`App Running on Port: ${PORT}!`));
