import { Link, useLocation } from "react-router-dom"
import { Button } from "../ui/button"
import { StarIcon, StarOffIcon } from "lucide-react"
import { useContext } from "react"
import { UserInfoContext } from "@/context/UserInfoContext"



const Header = () => {
    
    const { user } = useContext(UserInfoContext)
    const pathname = useLocation().pathname
    // console.log(user)
    
    return (
      user ? 
      <nav id="no-print" className="w-full lg:px-16 md:px-6 px-2 md:py-3 lg:py-3 py-2 flex items-center justify-between shadow-md">
          <Link to={user? "/dashboard":"/"} className="flex items-center space-x-2">
              <img src="/logo.svg" alt="logo" width={50} height={50} />
              <h1 className="text-xl font-bold text-[#510AC9] ">ResumeAI</h1>
          </Link>
          
              <div className="flex items-center space-x-4">
                  {!user?.subscribed ? <Button size="sm">
                      <Link to="/premium">
                          <StarOffIcon size={12}/>
                      </Link>
                    </Button> : 
                    
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <StarIcon size={12} color="white"/>
                      </div>
                    
                  }
                  <p className="text-primary font-semibold text-[12px] md:text-base">Hi, {user?.fullName}</p>
                  {pathname == "/dashboard" ?
                      <Button variant="outline">
                      <Link to="/account">Account</Link>
                      </Button> :
                      <Button variant="outline">
                      <Link to="/dashboard">Dashboard</Link>
                      </Button>
                  }
                  
              </div> 
            </nav>
            :
            <nav className="w-full lg:px-16 md:px-6 px-2 md:py-3 lg:py-3 py-2 flex items-center justify-between shadow-md">
          <Link to={user? "/dashboard":"/"} className="flex items-center space-x-2">
              <img src="/logo.svg" alt="logo" width={50} height={50} />
              <h1 className="text-xl font-bold text-[#510AC9] ">ResumeAI</h1>
          </Link>
          
              <Link to="/auth/login">
              <Button >Get Started</Button>
              </Link>
    </nav>
  )
}

export default Header


              