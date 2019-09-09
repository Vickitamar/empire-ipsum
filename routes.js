const loremIpsum = require("./generator.js");
const querystring = require("querystring");
const fs = require("fs");

const express = require("express");
const router = express.Router();

// Route that serves index.html
router.get("/", (request, response) => {
  response.setHeader("Content-Type", "text/html");
  let fileContents = fs.readFileSync("./public/index.html", {
    encoding: "utf8"
  });
  response.write(fileContents);
  response.end();
});

// Route that generates the lorem ipsum and reloads a modified index.html
router.post("/", (request, response) => {
  request.on("data", function(inputValue) {
    // convert the POST data into a readable string
    let query = inputValue.toString();
    // Parse the query into a key/value pair and store the value of numberOfParagraphs
    // in a variable.
    let numberOfParagraphs = querystring.parse(query).numberOfParagraphs;
    let loremIpsumText = loremIpsum.getAllParagraphs(numberOfParagraphs);
    let fileContents = fs.readFileSync("./public/index.html", {
      encoding: "utf8"
    });
    // Replace the placeholder <div> with the lorem ipsum text
    fileContents = fileContents.replace(
      '<div class="placeholder-div"></div>',
      loremIpsumText
    );
    response.setHeader("Content-Type", "text/html");
    response.write(fileContents);
    response.end();
  });
});

module.exports = router;
