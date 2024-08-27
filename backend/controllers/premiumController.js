const User=require("../models/User")
const { CustomError } = require("../middlewares/error")
const razorpay = require('razorpay')
const crypto=require('crypto')
const Payment = require("../models/Payment")



const orderPremiumController = async (req, res, next) => {
    
    try {
        
        const razorpaySession = new razorpay({
            key_id: process.env.RAZORPAY_PROD_KEY_ID,
            key_secret:process.env.RAZORPAY_PROD_KEY_SECRET
      })
      
        
        const options = {
            amount: req.body.amount,
            currency: "INR",
            receipt: req.body.userId,
        }

        razorpaySession.orders.create(options, (err, data) => {
            if (err) {
                throw new CustomError("something went wrong with payment",400)
            }
            res.status(200).json( data )
        })
    }
    catch (error) {
        next(error)
    }
}

const verifyOrderPremiumController = async (req, res, next) => {
    
const { razorpayOrderId
, razorpayPaymentId, razorpaySignature,userId } =
    req.body;

  const body = razorpayOrderId
 + "|" + razorpayPaymentId;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_PROD_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

 

  const isAuthentic = expectedSignature === razorpaySignature;

  if (isAuthentic) {

    const payment = new Payment({
      userId,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    });
    await payment.save();
    await User.findByIdAndUpdate(userId,{$set:{
subscribed:true}},{new:true})
      res.status(201).json({url:"http://localhost:5173/premium/success"})
  } else {
    res.status(400).json({
      success: false,
    });
  }


}




module.exports = { orderPremiumController,verifyOrderPremiumController }


