const Employee = require("../models/Employee");
const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json({ employee });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { createEmployee };
