const { CustomError } = require('../middlewares/error')
const Resume=require('../models/Resume')
const User = require("../models/User")



const createResumeController = async (req, res, next) => {
    
    try {
       const newResume=new Resume(req.body)
       const savedResume = await newResume.save()
        
        const updatedUserResumes=await User.findByIdAndUpdate(req.body.userId, {
            $push: { resumes: savedResume._id }
        }).populate("resumes");
        
        
       res.status(201).json(updatedUserResumes.resumes)
    }
    catch (error) {
        next(error)
    }
}

const getUserResumesController = async (req, res, next) => {
    const {userId}=req.params
    try {
        const user=await User.findById(userId)
        
        if(!user){
            throw new CustomError("No user found",404)
        }

        const resumes=await Resume.find({userId:userId})

        res.status(200).json(resumes)
    }
    catch (error) {
        next(error)
    }
}
const getUserResumeController = async (req,res,next) => {
    const {resumeId}=req.params
    try {
        const resume=await Resume.findById(resumeId)
        
        if(!resume){
            throw new CustomError("No resume found",404)
        }

        res.status(200).json(resume)
    }
    catch (error) {
        next(error)
    }
}

const updateResumeController = async (req,res,next) => {
    const {resumeId}=req.params
    try {
        const resume=await Resume.findById(resumeId)
        
        if(!resume){
            throw new CustomError("No resume found",404)
        }

        const updatedResume = await Resume.findByIdAndUpdate(
            resumeId,
            req.body,
            { new: true }
          );

        res.status(200).json(updatedResume)
    }
    catch (error) {
        next(error)
    }
}
const deleteResumeController = async () => {
    
}

module.exports = {
    createResumeController, getUserResumesController,
    getUserResumeController, updateResumeController,
    deleteResumeController
}