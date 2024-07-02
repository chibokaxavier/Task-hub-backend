const Employee = require("../models/Employee");
const cookieParser = require("cookie-parser");
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json({ employee });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const logEmployeeIn = async (req, res) => {
  try {
    const { email, password } = req.Body;
    const employee = await Employee.findOne({ email });
    if (!employee || employee.password !== password) {
      return res.status(401).json({ message: "Invalid Email or password" });
    }
    const token = jwt.sign({ employeeId: employee._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "logged in successfully" });
  } catch (error) {
    console.log(error, "Failed to log in");
  }
};

module.exports = { createEmployee, logEmployeeIn };
