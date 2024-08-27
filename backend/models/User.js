const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    resumes: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Resume"
    }],
    subscribed: {
        type: Boolean,
        default: false
    }
    
},{timestamps:true})

const User=mongoose.model("User",userSchema)

module.exports=User