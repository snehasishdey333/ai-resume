import { DeleteIcon, PlusIcon, SaveIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useContext, useEffect, useState } from "react"
import { ResumeInfoContext } from "@/context/ResumeInfoContext"
import { Textarea } from "../ui/textarea"
import { useParams } from "react-router-dom"
import axios from "axios"
import { TemplateInfoContext } from "@/context/TemplateInfoContext"

const eduFields = {
            name: "",
            startDate: "",
            endDate: "",
            address:"",
            class: "",
            percentage:""
        }

const EducationForm = ({ setEnableNext }) => {
  const resumeId = useParams().resumeId
  const { info, setInfo } = useContext(ResumeInfoContext)
  const {template,setTemplate}=useContext(TemplateInfoContext)
  const [educationList, setEducationList] = useState([eduFields])
  useEffect(()=>{
        info?.education.length>0 && setEducationList(info?.education)
    },[])
  const handleInputChange = (event, index) => {
    setEnableNext(false)
    const newEdu = educationList.slice()
    const { name, value } = event.target
    newEdu[index][name] = value
    setEducationList(newEdu)
  }
  const handleAddMoreEducation = () => {
    setEducationList([...educationList, eduFields])
  }

  const handleRemoveEducation = () => {
    
    setEducationList(prev=>prev.slice(0,-1))
  }

  

  // console.log(experienceList)
  useEffect(() => {
    setInfo({
      ...info,
      education:educationList
    })
  }, [educationList])
  
  const onSave = async () => {
    try {
            const response = await axios.put(import.meta.env.VITE_BACKEND_URL + "/api/resume/update/" + resumeId, {
              education: info?.education,
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
      <h1 className="pl-3 text-lg font-bold">Education</h1>
      <p className="pl-3">Add your educational details</p>
      <div>
        {educationList?.map((edu,index) => (
          <div className="" key={index}>
            <div className="grid grid-cols-2 gap-3 my-5 border p-3">
              <div className="flex flex-col items-start space-y-1">
                  <label>Name</label>
                  <Input name="name" value={edu?.name} required onChange={(event)=>handleInputChange(event,index)}/> 
              </div>
              <div className="flex flex-col items-start space-y-1">
                  <label>Class</label>
                  <Input name="class" value={edu?.class} required onChange={(event)=>handleInputChange(event,index)}/> 
              </div>
              <div className="flex flex-col items-start space-y-1">
                  <label>Percentage</label>
                  <Input name="percentage" value={edu?.percentage} required onChange={(event)=>handleInputChange(event,index)}/> 
              </div>
              <div className="flex flex-col items-start space-y-1">
                  <label>Address</label>
                  <Input name="address" value={edu?.address} required onChange={(event)=>handleInputChange(event,index)}/> 
              </div>
              <div className="flex flex-col items-start space-y-1">
                  <label>Start date</label>
                  <Input type="date" name="startDate" value={edu?.startDate} required onChange={(event)=>handleInputChange(event,index)}/> 
              </div>
              <div className="flex flex-col items-start space-y-1">
                  <label>End date</label>
                  <Input type="date" name="endDate" value={edu?.endDate} required onChange={(event)=>handleInputChange(event,index)}/> 
              </div>

              </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <Button onClick={handleAddMoreEducation} variant="outline" className="text-primary flex items-center space-x-2">
          <><PlusIcon />
            <span>Add more education</span></>
          </Button>
          {educationList?.length>1 && <Button onClick={handleRemoveEducation} variant="outline" className="text-primary flex items-center space-x-2">
            <><DeleteIcon/>
            <span>Remove</span></>
          </Button>}
        </div>
        
        <Button onClick={onSave} className="flex items-center space-x-2">
          <><SaveIcon />
            <span>Save</span></>
        </Button>
      </div>
     </div> 
  )
}

export default EducationForm