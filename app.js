const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.listen(port, console.log(`Listening to ${port}`));

// middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});
