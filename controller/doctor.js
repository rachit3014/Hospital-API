const Doctor=require('../models/doctor');

const jwt = require('jsonwebtoken');

// Login doctor 
module.exports.createSession = async function(req, res){

    try{
     //    find doctor by email
        let doctor = await Doctor.findOne({email: req.body.email});
     //    if doctor or password is not match
        if (!doctor || doctor.password != req.body.password){
            return res.status(422).json({
                message: "Invalid username or password"
            });
        }
     //    creating jswt and return message
        return res.status(200).json( {
            message: 'Sign in successful, here is your token, please keep it safe!',
            data:  {
                token: jwt.sign(doctor.toJSON(), 'codeial', {expiresIn:  '10000000'})
            }
        })

    }catch(err){
        console.log('********', err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}




// registre doctor
module.exports.registerDoctor= async function(req,res){
     try {
          const doctoralreadyexist= await Doctor.findOne({email:req.body.email})
          // if doctor exists
          if(doctoralreadyexist)
          {
               return res.status(400).json({
                    sucess:false,
                    message:"Doctor already exist. Please Login"
               })
          }
          // create doctor if not exists
          await Doctor.create(req.body)
          res.status(200).json({
               sucess:true,
               message:'doctor created sucessfully'
          })
          
     } catch (error) {
          console.log(error)
          res.status(500).json({
               sucess:false,
          message:'unable to create'
          })
          

          
     }
}


