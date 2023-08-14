const mongoose=require('mongoose')
// creating patient Schema
const patientSchema= new mongoose.Schema({
    name:
    {
        type:String,
        required:[true,'plz provide name']
    },
    phoneNo:
    {
        type:Number,
        unique:true,
        required:true

    },
    reports:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Report"
        }
    ],
    doctor:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doct",
        required:true
    }
})
const Patient=new mongoose.model('Pt',patientSchema)
module.exports=Patient