import { Loader2, PlusCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useContext, useState } from "react"
import { Button } from "../ui/button"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import { createResume, getResumes } from "@/utils/apiCalls"
import { UserInfoContext } from "@/context/UserInfoContext"



const AddResume = () => {

    const { user } = useContext(UserInfoContext)
    const userId = user?._id
    const [open, setOpen] = useState(false)
    const [settingsOpen,setSettingsOpen]=useState(false)
    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(false)
    const navigation=useNavigate()
   
    
    
  const handleCreate = async (userId,title) => {
      
    try {
      const totalResumes = await getResumes(userId)
      // console.log("this is total resumes",totalResumes)
      if (totalResumes?.length < 5 || user?.subscribed) {
        const data = await createResume(userId, title);
        setTitle("")
        setOpen(false)
      }
      else {
        setOpen(false)
        setTimeout(() => {
          setSettingsOpen(true)
        },1000)
         
        }
      }
      catch (err) {
        console.log(err)
      }
    }

    return (
      <div>
        <div onClick={()=>setOpen(true)} className="cursor-pointer flex flex-col items-center justify-center space-y-4 w-[150px] h-[150px] md:w-[200px] md:h-[220px] lg:w-[200px] lg:h-[220px] bg-secondary rounded-md shadow-md hover:scale-95 ease-in duration-200">
          <PlusCircle />
          <h1 className="font-semibold text-[12px] md:text-[14px]">Add Resume</h1>
            </div>
            <Dialog open={open}>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Step Closer to Your Dream Job</DialogTitle>
                        <DialogDescription>
                            <div className="my-2">
                              <p className="font-bold text-lg mt-3 mb-2">Create Your Resume Title!!</p>
                              <Input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Full stack developer resume"/>
                            </div>
                        
                        </DialogDescription>
                        <div className="w-full flex items-center justify-end space-x-2">
                            <Button onClick={()=>setOpen(false)} variant="outline">Cancel</Button>
                            <Button disabled={!title || loading} onClick={() => handleCreate(userId,title)}>{loading ? <Loader2 className="animate-spin"/> : <p>Create</p>}</Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
        </Dialog>
        
        <Dialog open={settingsOpen}>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Get AIResume subscription to create more resumes!</DialogTitle>
                        <DialogDescription>
                            <div className="my-2">
                              <p className="font-bold text-lg mt-3 mb-2">Create unlimited resumes!</p>
                            </div>
                        
                        </DialogDescription>
                        <div className="w-full flex items-center justify-end space-x-2">
                            <Button onClick={()=>setSettingsOpen(false)} variant="outline">Cancel</Button>
                            <Button onClick={() => {}}><Link to="/premium">Get Premium</Link></Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
                </Dialog>

      </div>
      
  )
}

export default AddResume