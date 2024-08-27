import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"


const PaymentSuccessPage = () => {
  return (
    <main className="min-h-[70vh]">
      <h1 className="text-xl md:text-3xl text-green-500 font-bold my-8 text-center">Congratualtions! you have successfully unlocked premium version of AI RESUME!</h1>
      <div className="w-full flex items-center justify-center flex-col my-8">
          <h3 className="text-xl font-bold text-primary">Benefits:</h3>
          <ul className="my-4 flex items-start flex-col justify-center space-y-2 font-[12px]">
            <li>1. Create unlimited resumes</li>
            <li>2. Get premium themes</li>
            <li>3. Get color options</li>
            <li>4. more customizations</li>
            <li>5. Life time free membership</li>
          </ul>
          <Button><Link to="/dashboard">Go to Dashboard</Link></Button>
        </div>
    </main>
  )
}

export default PaymentSuccessPage