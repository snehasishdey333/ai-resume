const express=require("express")
const { orderPremiumController, verifyOrderPremiumController } = require("../controllers/premiumController")
const router = express.Router()

//GET PREMIUM SUBSCRIPTION
router.post("/", orderPremiumController)

//VERIFY PAYMENT
router.post("/verify-payment",verifyOrderPremiumController)

module.exports=router