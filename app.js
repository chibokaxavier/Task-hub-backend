const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const tasks = require("./routes/tasks");
const employee = require("./routes/employee");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());

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


