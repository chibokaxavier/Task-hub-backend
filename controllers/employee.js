const Employee = require("../models/Employee");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
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
    const { email, password } = req.body;
    const employee = await Employee.findOne({ email });
    if (!employee || employee.password !== password) {
      return res.status(401).json({ message: "Invalid Email or password" });
    }
    const token = jwt.sign({ employeeId: employee._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    res.json({ message: "logged in successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const logEmployeeOut = async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};

module.exports = {
  createEmployee,
  logEmployeeIn,
  logEmployeeOut,
};
