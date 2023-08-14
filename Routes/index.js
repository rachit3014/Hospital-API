// import express
const express =require('express');
// import router
const router=express.Router();
//  all the request with suffix (/doctor) will require the user file to compute
router.use('/doctor',require('./doctor'));
//  all the request with suffix (/patient) will require the user file to compute
router.use('/paitent',require('./patient'));
//  all the request with suffix (/report) will require the user file to compute
router.use('/reports',require('./report'))
module.exports=router