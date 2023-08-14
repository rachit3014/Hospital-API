const mongoose=require('mongoose')
// creating doctor Schema
const doctorSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:[true,'plz enter your name']
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        
        required:[true,'plz enter your password'],
        minLength:[6,'paswword should min length six']
    }
})
const Doct=new mongoose.model("Doct",doctorSchema)

module.exports=Doct