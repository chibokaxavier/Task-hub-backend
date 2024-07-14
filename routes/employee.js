const express = require("express");
const router = express.Router();
const {
  createEmployee,
  logEmployeeIn,
  logEmployeeOut,
} = require("../controllers/employee");
const authenticate = require("../middleware/employee");

router.route("/").post(createEmployee);
router.route("/login").post(logEmployeeIn);
router.route("/logout").post(logEmployeeOut);
router.route("/current").get(authenticate);
router.route("/current").get(authenticate, (req, res) => {
  res.json({ employee: req.employee });
});

module.exports = router;
