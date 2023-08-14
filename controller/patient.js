const Patient=require("../models/patient")
const Report=require("../models/report")
// registre Paitent
module.exports.registerPaitent= async function(req,res){
    try {
         // find patient by phoneNo
         let patient= await Patient.findOne({phoneNo:req.body.phoneNo})
         .populate({
              path:"doctor",
              select:"name email"
         })
         // if patient is not exists then create paitent
         if(!patient)
         {
              req.body.doctor= req.user.id; 
              patient =  await Patient .create(req.body) 
              return  res.status(200).json({
                   sucess:true,
                   message:'successfully paitent created',
                   patient
                   
              })
         }
         // else display paitent alraedy exists
         return  res.status(200).json({
              sucess:true,
              message:' paitent already exists',
              patient
              
         })
   
        
         

    } catch (error) {
         console.log(error)
         res.status(500).json({
              // console.log(error),
              
              sucess:false,
              message:'unable to create paitent'

         })
         
    }
}







//  craete report of paitent
module.exports.createReport= async function(req,res){
    try {
         let paitent =await Patient.findById(req.params.id)
         // if paitent not exists 
         if(!paitent)
         {
              return res.status(404).json({
                   sucess:false,
                   message:"No patient found please register patient"
              })
         }
         // paitent exists create report
         let report =await Report.create({
              Paitent_PhoneNo:paitent.phoneNo,
              doctor:req.user.id,
              status:req.body.status


         })
         // push the new report on reports array of patient
         paitent.reports.push(report.id)
         // save the document
         await paitent.save()



         return res.status(200).json({
              sucess:true,
              message:'sucesfully  created report',
              report
         })
         
    } catch (error) {
         console.log(error)
         res.status(500).json({
              sucesss:false,
              mesaage:'unable to createReport'
         })
         
    }
}


// find all the report  of the paitent
module.exports.allreports=async function(req,res){
    try {
         let patient =await Patient.findById(req.params.id)
         // if patient doesnot exists
         if(!patient)
         {
              return res.status(404).json({
                   sucess:false,
                   message:"no patient found !!"

              })
         }
        //  populate reports
         await patient.populate({
              path:"reports",
              populate:{
                   path:"doctor",
                   select:"name email"
              }

         })
         res.status(200).json({
              // sucess: true,
              // message:'sucesfully fetched data for patient',                     
              reports:patient.reports
         })
         
    } catch (error) {
         res.status(500).json({
              sucess:false,
              message:"unable to fetch all reports of the paitent"
         })
    }

}