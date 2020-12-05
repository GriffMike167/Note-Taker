const express = require("express");
const routes = require("./routes/routes.js")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.static(__dirname));

app.use("/api", routes);

// app.listen one line function watch video 11.24 1 hr 10 minutes in
app.listen(PORT, function () {
    console.log("Listening PORT: " + PORT)
});

