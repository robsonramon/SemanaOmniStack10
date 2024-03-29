const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");
const app = express();

mongoose.connect(
  "mongodb+srv://oministack:oministack@cluster0.tenaa.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);
