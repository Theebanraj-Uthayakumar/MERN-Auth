const express = require("express");
const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

// Login routes
router.post("/signin", loginUser);

// Signup routes
router.post("/signup", signupUser);

module.exports = router;
