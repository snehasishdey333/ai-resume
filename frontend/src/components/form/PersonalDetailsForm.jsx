import { ResumeInfoContext } from "@/context/ResumeInfoContext"
import { useContext, useState } from "react"

import { Button } from "../ui/button"
import { Loader2Icon, SaveIcon } from "lucide-react"
import { Input } from "../ui/input"
import { useParams } from "react-router-dom"
import { toast } from "../ui/use-toast"
import axios from "axios"
import { TemplateInfoContext } from "@/context/TemplateInfoContext"


const PersonalDetailsForm = ({ setEnableNext }) => {
    const resumeId = useParams().resumeId
    const [loading,setLoading]=useState(false)
    
    const { info, setInfo } = useContext(ResumeInfoContext)
    const {template,setTemplate}=useContext(TemplateInfoContext)
   console.log(info?.phone)
    
    const handleInputChange = (e) => {
        setEnableNext(false)
        const { name, value } = e.target
        
        setInfo({
            ...info,
            [name]: value
        })
    }

    const handleSave = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.put(import.meta.env.VITE_BACKEND_URL + "/api/resume/update/" + resumeId, {
                firstName: info?.firstName,
                lastName: info?.lastName,
                jobTitle: info?.jobTitle,
                address: info?.address,
                phone: info?.phone, 
                email: info?.email,
                template:template
            },{withCredentials:true})
            console.log(response.data)
            setEnableNext(true)
        }
        catch (error) {
            console.log(error)
        }
        
    }

  return (
      <div className="p-5 rounded-lg border-2 border-t-primary shadow-md">
          <h1 className="pl-3 text-lg font-bold">Personal Details</h1>
          <p className="pl-3">Get started with the basic information</p>
          <form onSubmit={handleSave} className="p-3 grid grid-cols-2 gap-3">
              <div className="flex flex-col items-start space-y-1">
                  <label>First Name</label>
                  <Input name="firstName" value={info?.firstName} required onChange={handleInputChange}/> 
              </div>
              <div className="flex flex-col items-start space-y-1">
                  <label>Last Name</label>
                  <Input name="lastName" value={info?.lastName} required onChange={handleInputChange}/> 
              </div>
              <div className="flex flex-col items-start space-y-1 col-span-2">
                  <label>Job Title</label>
                  <Input name="jobTitle" value={info?.jobTitle} required onChange={handleInputChange}/> 
              </div>
              <div className="flex flex-col items-start space-y-1 col-span-2">
                  <label>Address</label>
                  <Input name="address" value={info?.address} required onChange={handleInputChange}/> 
              </div>
              <div className="flex flex-col items-start space-y-1 ">
                  <label>Phone</label>
                  <Input name="phone" value={info?.phone} required onChange={handleInputChange}/> 
              </div>
              <div className="flex flex-col items-start space-y-1 ">
                  <label>Email</label>
                  <Input name="email" value={info?.email} required onChange={handleInputChange}/> 
              </div>
              <div className="w-full flex justify-end col-span-2">
                  <Button className="flex items-center space-x-2 mt-4">
                      {loading ?<>
                          <Loader2Icon/>
                      </>:<><SaveIcon />
                      <span>Save</span></>}
                  </Button>
                  
              </div>
          </form>
    </div>
  )
}

export default PersonalDetailsForm