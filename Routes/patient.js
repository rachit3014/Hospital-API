// import express
const express=require('express');
// import  express router
const router=express.Router();
const passport = require('passport');
// import patient file from controller folder
const paitentController=require('../controller/patient')
// routes for register patient
router.post('/register',passport.authenticate('jwt',{session:false}),paitentController.registerPaitent)
// routes for create a patient report 
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),paitentController.createReport)
// routes for get all reports
router.get('/:id/all_reports',paitentController.allreports)
module.exports=router;
