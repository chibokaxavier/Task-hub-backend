const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const tasks = require("./routes/tasks");

app.listen(port, console.log(`Listening to ${port}`));

// middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1/tasks", tasks);
