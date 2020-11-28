const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.static(__dirname));

require('/endpoints/endpoints')(app);
// app.listen one line function watch video 11.24 1 hr 10 minutes in
app.listen(PORT, function () {
    console.log("Listening PORT: " + PORT)
});

