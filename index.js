const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));
const route = require("./Router/restRoute");
const frontend = require("./Router/frontend");

app.use("/", route);
app.use("/frontend", frontend);
app.listen(PORT, () => {
  console.log(`Server is Running at PORT:${PORT}`);
});
