const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Must provide name "],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Must provide email "],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Must provide password "],
      trim: true,
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
