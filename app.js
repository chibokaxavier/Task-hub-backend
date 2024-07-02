const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const tasks = require("./routes/tasks");
const employee = require("./routes/employee");
const connectDB = require("./db/connect");
const cookieParser = require("cookie-parser");
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/tasks", tasks);
app.use("/api/v1/employee", employee);
const start = async () => {
  try {
    await connectDB(process.env.URL);
    app.listen(port, console.log(`Listening to ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
