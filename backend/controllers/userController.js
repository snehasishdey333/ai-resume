const { CustomError } = require('../middlewares/error')
const Resume = require('../models/Resume')
const User = require("../models/User")
const bcrypt=require('bcrypt')

const getUserController = async (req, res, next) => {
    
    const {userId}=req.params
    try{
        const user=await User.findById(userId)
        if(!user){
            throw new CustomError("No user found",404)
        }

        const {password,...data}=user
        res.status(200).json(data._doc)

    }
    catch(error){
        next(error)
    }
}

const updateUserController = async (req, res, next) => {
    
     try {
        const user = await User.findById(req.params.userId)
        if (!user) {
            throw new CustomError(404, "User not found!")
        }

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hashSync(req.body.password, salt)
            req.body.password = hashedPassword
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedUser)

    }
    catch (error) {
        next(error)
    }

}

const deleteUserController = async (req, res, next) => {
    
    const {userId}=req.params

    try{

        const userToDelete=await User.findById(userId)

        if(!userToDelete){
            throw new CustomError("User not found!",404)
        }
        await Resume.deleteMany({ userId: userId })
        await userToDelete.deleteOne()
        res.status(200).json({message:"Everything associated with user is deleted successfully!"})
       
    }
    catch (error) {
        next(error)
    }
}


module.exports = {
    getUserController, updateUserController,
    deleteUserController
}