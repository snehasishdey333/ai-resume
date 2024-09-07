const User=require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { CustomError } = require("../middlewares/error")

const registerController = async (req, res, next) => {
    
    try{
       const {password,fullName,email}=req.body
       const existingUser=await User.findOne({email:email})
       if(existingUser){
         throw new CustomError("email already exists!",400)
       }

       const salt=await bcrypt.genSalt(10)
       const hashedPassword=await bcrypt.hashSync(password,salt)
       const newUser=new User({...req.body,password:hashedPassword})
        const savedUser = await newUser.save()
         const token=jwt.sign({_id:savedUser._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE})
        res.cookie("token",token,{secure:true,httpOnly:true, sameSite:'strict'}).status(200).json(savedUser)
       
       
    }
    catch(error){
        next(error)
    }
}

const loginController=async (req,res,next)=>{
    try{
        
           let user=await User.findOne({email:req.body.email})

        if(!user){
            throw new CustomError("User not found!",404)
        }

        const match=await bcrypt.compare(req.body.password,user.password)

        if(!match){
            throw new CustomError("Wrong Credentials!",401)
        }

        const {password,...data}=user._doc
        const token=jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE})
        res.cookie("token",token,{secure:true,httpOnly:true, sameSite:'strict'}).status(200).json(data)
    //    sameSite:'none',httpOnly:false
    }
    catch(error){
        next(error)
    }
}

const logoutController=async(req,res,next)=>{
    try{
        res.clearCookie("token").status(200).json("user logged out successfully!")

    }
    catch(error){
        next(error)
    }
}

const refetchUserController=async(req,res,next)=>{
    const token=req.cookies.token
    jwt.verify(token,process.env.JWT_SECRET,{},async(err,data)=>{
        if(err){
            throw new CustomError(err,404)
        }
        try{
          const id=data._id
          const user=await User.findOne({_id:id})
          res.status(200).json(user)
        }
        catch(error){
            next(error)
        }
    })
}

module.exports={registerController,loginController,
                logoutController,refetchUserController}