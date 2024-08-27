import Footer from "@/components/custom/Footer"
import Header from "@/components/custom/Header"
import { Button } from "@/components/ui/button"
import { UserInfoContext } from "@/context/UserInfoContext"
import { displayRazorpay } from "@/utils/apiCalls"
// import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"



const Premium = () => {
  // const navigate=useNavigate()
  const { user } = useContext(UserInfoContext)
  const userId = user?._id
  
  

  
  return (
      <main>
         
          <section className="min-h-[75vh]">
        <h1 className="font-bold text-primary text-2xl text-center mt-16">Get Premium membership only on $9.99</h1>
        <p className="font-semibold text-[16px] text-center mt-4">Create as many as resume you want</p>
        <div className="w-full flex items-center justify-center flex-col my-8">
          <h3 className="text-xl font-bold text-primary">Benefits:</h3>
          <ul className="my-4 flex items-start flex-col justify-center space-y-2 font-[12px]">
            <li>1. Create unlimited resumes</li>
            <li>2. Get premium themes</li>
            <li>3. Get color options</li>
            <li>4. more customizations</li>
            <li>5. Life time free membership</li>
          </ul>
          <Button onClick={()=>displayRazorpay(userId)} size="lg" className="mt-8">Get Premium</Button>
        </div>
          </section>
      
    </main>
  )
}

export default Premium