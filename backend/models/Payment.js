const mongoose=require('mongoose')

const paymentSchema = new mongoose.Schema({
  userId:{ type: String,required:true },
  razorpayOrderId: {
    type: String,
    required: true,
  },
  razorpayPaymentId: {
    type: String,
    required: true,
  },
  razorpaySignature: {
    type: String,
    required: true,
  },
});




const Payment = mongoose.model("Payment", paymentSchema);

module.exports=Payment