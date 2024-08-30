import AddResume from "@/components/custom/AddResume"
import ResumeCard from "@/components/custom/ResumeCard"
import { UserInfoContext } from "@/context/UserInfoContext"
import { fetchResumes } from "@/utils/apiCalls"
import { useContext, useEffect, useState } from "react"
import HomePage from "../home"
import { Loader2 } from "lucide-react"


const DashboardPage =  () => {
  const [resumes, setResumes] = useState([])
  const [loading,setLoading]=useState(false)
  const { user } = useContext(UserInfoContext)
  const userId = user?._id
  
  
  useEffect(() => {

    if (user) {
      fetchResumes(setResumes,userId,setLoading)
    }
    
  }, [user,userId])
 
 
  
  return (
    user ? 
    <main className="min-h-[90vh] w-full lg:px-16 md:px-6 px-4 lg:py-8 md:py-4 py-2">
      <h1 className="font-bold text-xl md:text-2xl">Resume Dashboard</h1>
      <p className="font-semibold text-[12px] md:text-[16px] text-sm">Start crafting your personalized resume effortlessly with our intuitive tools. Tailor your experience, skills, and achievements to stand out to potential employers.</p>
      <div className="min-h-[50vh] flex items-center justify-center">
        {loading ? <Loader2 className="animate-spin"/> : <div className="mt-4 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-2 md:p-4">
            <AddResume />
        {resumes?.reverse().map((props,index) => (
          <ResumeCard key={index} props={props}/>
        ))}
      </div>}
      </div>
      
      </main> : 
      <HomePage/>
  )
}

export default DashboardPage