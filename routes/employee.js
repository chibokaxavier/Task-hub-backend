const express = require("express");
const router = express.Router();
const {
  createEmployee,
  logEmployeeIn,
  logEmployeeOut,
} = require("../controllers/employee");

router.route("/").post(createEmployee);
router.route("/login").post(logEmployeeIn);
router.route("/logout").post(logEmployeeOut);

module.exports = router;
