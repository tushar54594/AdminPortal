const express = require("express");
// const {home, register} = require("../controllers/auth-controller");
const authcontroller = require("../controllers/auth-controller");
const {signupSchema, loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware")

const router = express.Router();

router.route("/").get(authcontroller.home);

router.route("/register").post(validate(signupSchema), authcontroller.register);
router.route("/login").post(validate(loginSchema), authcontroller.login);

module.exports = router;