const jwt = require("jsonwebtoken");
const Employee = require("../models/Employee");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const authenticate = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "unauthorized ,No token" });
  }
  try {
    const decode = jwt.verify(token, JWT_SECRET);
    res.json({ message: "Protected content", userId: decode.employeeId });
  } catch (error) {
    res.status(401).json({ message: "unauthorizedd" });
  }
};

module.exports = authenticate;
