const express = require("express")
const { getUserController, updateUserController, deleteUserController } = require("../controllers/userController")
const router=express.Router()

//GET USER
router.get("/:userId", getUserController)

//UPDATE USER
router.put("/update/:userId", updateUserController)

//DELETE USER
router.delete("/delete/:userId", deleteUserController)



module.exports=router