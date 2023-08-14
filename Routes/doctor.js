// import express
const express=require('express');
// import express router
const router =express.Router();
// import doctor file from controller folder
const doctorController=require("../controller/doctor")
// routes for register doctor
router.post('/register',doctorController.registerDoctor)
// routes for login doctor
router.post('/login',doctorController.createSession)
module.exports=router;