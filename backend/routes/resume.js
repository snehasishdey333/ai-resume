const express=require("express")
const { createResumeController, getUserResumesController, getUserResumeController, updateResumeController, deleteResumeController } = require("../controllers/resumeController")
const router=express.Router()

//CREATE RESUME
router.post("/create", createResumeController)

//GET ALL USER RESUMES
router.get("/all/:userId", getUserResumesController)

//GET RESUME
router.get("/user/:resumeId", getUserResumeController)

//UPDATE RESUME
router.put("/update/:resumeId", updateResumeController)

//DELETE RESUME
router.delete("/delete/:resumeId", deleteResumeController)



module.exports=router