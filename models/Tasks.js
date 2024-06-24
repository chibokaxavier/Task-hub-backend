const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TaskSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Must provide name"],
      trim: true,
      maxlength: [20, "Characters cant exceed 20"],
    },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }  
);

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task; 
