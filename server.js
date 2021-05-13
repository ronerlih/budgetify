const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

// body middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// compression middleware
app.use(compression());

// static middleware
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
   useNewUrlParser: true,
   useFindAndModify: false,
});

// routes
app.use(require("./routes/api.js"));

//listening
app.listen(PORT, () => {
   console.log(`App running on port ${PORT}!`);
});
