// import express
const express=require('express')
// import express router
const router =express.Router();
// import report file from controller folder
const reportController=require('../controller/report');
// routes for get the report by status
router.get('/:status',reportController.report_by_status)
module.exports=router
