const express = require("express");
const router = express.Router();
const { createEmployee,logEmployeeIn } = require("../controllers/employee");

router.route("/").post(createEmployee).post(logEmployeeIn);

module.exports = router;
