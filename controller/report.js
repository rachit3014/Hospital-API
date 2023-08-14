const Report=require("../models/report")
// fnding report by status
module.exports.report_by_status=async function(req,res)

{
     try {
        // finding report by status 
          let report= await Report.find({status:req.params.status})
        //   populate doctor
          .populate({
               path:"doctor",
               select:"name email"
          })
        //   return the report as json
          res.status(200).json({
               sucess:true,
               data:report
          })
     } catch (error) {
          res.status(500).json({
               sucess:false,
               message:'unable to fetch data'
          })
          
     }

}