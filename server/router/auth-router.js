const express = require("express");
// const {home, register} = require("../controllers/auth-controller");
const authcontroller = require("../controllers/auth-controller")

const router = express.Router();

router.route("/").get(authcontroller.home);

router.route("/register").post(authcontroller.register)


module.exports = router;