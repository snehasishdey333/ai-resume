import Footer from "@/components/custom/Footer"
import Header from "@/components/custom/Header"
import { Button } from "@/components/ui/button"
import { UserInfoContext } from "@/context/UserInfoContext"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"


const HomePage = () => {
  const { user } = useContext(UserInfoContext)
  const navigate = useNavigate()
  
  if (user) {
    navigate("/dashboard")
  }

  return (
    <main>
      
      <div className="h-[70vh] w-full">
        <div className="w-full mt-32 flex flex-col items-center justify-center space-y-3">
        <h1 className="text-4xl font-bold text-center">Craft Your Perfect Resume with AI Precision</h1>
        <p className="text-sm text-center w-[60%]">Elevate your job search with our advanced AI-powered resume builder. Craft a flawless resume that highlights your strengths and achievements with unparalleled precision. Start today and make your resume shine!</p>
        <div className="flex items-center space-x-4">
            <Button>
              <Link to="/auth/register">Get Started</Link>
          </Button>
            <Button>
              <Link to="/auth/login">Sign In</Link>
          </Button>
        </div>
        
        
      </div>
      <div className="flex items-center justify-center space-y-3 mt-16">
          <p className="text-3xl font-bold text-left w-[60%]">For just $9.99 explore more options from us, create unlimited resumes but premium templates.</p>
        <Button><Link to="/auth/login">Get Premium</Link></Button>
      </div>
      
      {/* <div className="absolute top-[30%] left-[50%] z-[-10]">
        <img className="opacity-60" src="resume-img.webp" alt="" height="500" width="300"/>
      </div> */}
      </div>
      
      
    </main>
  )
}

export default HomePage