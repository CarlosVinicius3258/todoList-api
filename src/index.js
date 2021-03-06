const express = require("express");
const mongooose = require("mongoose");
const cors = require("cors");

const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 4000;

mongooose.connect("mongodb://localhost/todos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.set("PORT", PORT);

module.exports = app;
