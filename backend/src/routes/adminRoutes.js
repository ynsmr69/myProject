const express = require("express")
const router = express.Router()
const {login, register, find, update, remove} = require("../service/adminService.js")




router.post("/login", login);
router.post("/register", register);
router.get("/:id", find);
router.patch("/", update);
router.delete("/:id", remove); // secure

// router.get("/", auth, logger, logger, logger, findAll); // secure



module.exports = router
