const mongoose=require('mongoose')
// creating report Schema
const reportSchema = new mongoose.Schema({
  
    status: {
        type:String,
        required:true,
        enum:["Negative", "Travelled-Quarantine", "Symptoms-Quarantine",
            "Positive-Admit"],
    },
    Paitent_PhoneNo:
    { 
        type:Number,
        required:true

    },
    doctor:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doct",
        required:true
    },



},{timestamps:true})
const Report= new mongoose.model("Report",reportSchema)
module.exports=Report