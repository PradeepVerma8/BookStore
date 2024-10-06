import mongoose from "mongoose";
const supportSchema = mongoose.Schema({
    name:{
        type : String
    },
    email :{
        type:String,
    
        required:true
    },
    phone:{
        type:Number
    

    },
    location:{
        type:String

    },
    query :{
        type:String
    }
  
})

const Support = mongoose.model("Support",supportSchema);

export default Support;