const express = require("express");
const fs = require("fs");
const path = require("path");
const { allowedNodeEnvironmentFlags } = require("process");
const app = express();
const PORT = 8080;

app.use(exprees.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.static(__dirname));
// app.listen one line function watch video 11.24 1 hr 10 minutes in
app.listen(PORT, => (console.log("Listening PORT: " + PORT));

