const express = require("express");
const router = express.Router();
const { createEmployee } = require("../controllers/employee");

router.route("/").post(createEmployee);
module.exports = router;
