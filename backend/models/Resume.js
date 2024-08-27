const mongoose=require("mongoose")

const resumeSchema=new mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    title: {
        type: String,
        required:true
    },
    template: {
        type: Number,
        default:1
    },
    firstName: {
        type:String,
        
    },
    lastName: {
        type:String,
        
    },
    jobTitle: {
        type:String,
        
    },
    address: {
        type:String,
        
    },
    phone: {
        type:String,
        
    },
    email: {
        type:String,
        
    },
    summary: {
        type:String,
        
    },
    themeColor: {
        type:String,
        
    },
    experience: [
        {
            title: {
        type:String,
        
    },
            city: {
        type:String,
        
    },
            company: {
        type:String,
        
    },
            designation: {
        type:String,
        
    },
            startDate: {
        type:String,
        
    },
            endDate: {
        type:String,
        
    },
            jobSummary:{
        type:String,
        
    },
        }
       

    ],
    education: [
        {
            
            name: {
                type: String,
                required: true
            },
            startDate: {
                type: String,
                required: true
            },
            endDate: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            class: {
                type: String,
                required: true
            },
            percentage: {
                type: String,
                required: true
            },
        }
        
    ],
    projects: [
        {
           
            name: {
        type:String,
        
    },
            tech:{
        type:String,
        
    },
            summary: {
        type:String,
        
    },
            link:{
        type:String,
        
    },
        }
    ],
    skills: [
        {name:{
        type:String,
        
    },},
       
    ],
    achievements: [
        {
            summary:{
        type:String,
        
    },
        },
        
    ]

    
},{timestamps:true})

const Resume=mongoose.model("Resume",resumeSchema)

module.exports=Resume