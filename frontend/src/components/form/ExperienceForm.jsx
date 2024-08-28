import { useContext, useEffect, useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { DeleteIcon, Minus, PlusIcon, SaveIcon } from "lucide-react"
import RichTextEditor from "../custom/RichTextEditor"
import { ResumeInfoContext } from "@/context/ResumeInfoContext"
import axios from "axios"
import { useParams } from "react-router-dom"
import { TemplateInfoContext } from "@/context/TemplateInfoContext"

const expFields = {
            title: "",
            city: "",
            company: "",
            designation: "",
            startDate: "",
            endDate: "",
            jobSummary:""
        }

const ExperienceForm = ({ setEnableNext }) => {
  const resumeId = useParams().resumeId
  const { info, setInfo } = useContext(ResumeInfoContext)
  const {template,setTemplate}=useContext(TemplateInfoContext)
   
  const [experienceList, setExperienceList] = useState([expFields])
  useEffect(()=>{
        info?.experience?.length>0 && setExperienceList(info?.experience)
        console.log(info?.experience)
    },[])
  const handleInputChange = (event, index) => {
    setEnableNext(false)
    const newExp = experienceList.slice()
    const { name, value } = event.target
    newExp[index][name] = value
    setExperienceList(newExp)
    // setInfo({ ...info, experience: experienceList })
  }
  const handleAddMoreExperience = () => {
    setExperienceList([...experienceList, expFields])
  }

  const handleRemoveExperience = () => {
    
    setExperienceList(prev=>prev.slice(0,-1))
  }

  const handleRichTextEditorChange = (event, name, index)=> {
     const newExp = experienceList.slice()
     const value=event.target.value
    newExp[index][name] = value
    setExperienceList(newExp)
  }

  // console.log(experienceList)
  useEffect(() => {
    setInfo({
      ...info,
      experience:experienceList
    })
  }, [experienceList])
  
  const onSave = async () => {
    try {
            const response = await axios.put(import.meta.env.VITE_BACKEND_URL + "/api/resume/update/" + resumeId, {
              experience: info?.experience,
              template:template
            })
            console.log(response.data)
            setEnableNext(true)
        }
        catch (error) {
            console.log(error)
        }
  }
  return (
    <div className="p-5 rounded-lg border-2 border-t-primary shadow-md">
      <h1 className="pl-3 text-lg font-bold">Professional Experience</h1>
      <p className="pl-3">Add you work experience</p>
      <div>
        {experienceList?.map((exp,index) => (
          <div className="" key={index}>
            <div className="grid grid-cols-2 gap-3 my-5 border p-3">
              <div className="flex flex-col items-start space-y-1">
                  <label>Job Title</label>
                  <Input name="title" value={exp?.title} required onChange={(event)=>handleInputChange(event,index)}/> 
              </div>
              <div className="flex flex-col items-start space-y-1">
                  <label>City</label>
                  <Input name="city" value={exp?.city} required onChange={(event)=>handleInputChange(event,index)}/> 
              </div>
              <div className="flex flex-col items-start space-y-1">
                  <label>Company name</label>
                  <Input name="company" value={exp?.company} required onChange={(event)=>handleInputChange(event,index)}/> 
              </div>
              <div className="flex flex-col items-start space-y-1">
                  <label>Designation</label>
                  <Input name="designation" value={exp?.designation} required onChange={(event)=>handleInputChange(event,index)}/> 
              </div>
              <div className="flex flex-col items-start space-y-1">
                  <label>Start date</label>
                  <Input type="date" name="startDate" value={exp?.startDate} required onChange={(event)=>handleInputChange(event,index)}/> 
              </div>
              <div className="flex flex-col items-start space-y-1">
                  <label>End date</label>
                  <Input type="date" name="endDate" value={exp?.endDate} required onChange={(event)=>handleInputChange(event,index)}/> 
              </div>
              <div className="col-span-2 ">
                <RichTextEditor val={exp?.jobSummary} onRichTextEditorChange={(event)=>handleRichTextEditorChange(event,"jobSummary",index)}/>
              </div>
              </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <Button onClick={handleAddMoreExperience} variant="outline" className="text-primary flex items-center space-x-2">
          <><PlusIcon />
            <span>Add more experience</span></>
          </Button>
          {experienceList?.length>1 && <Button onClick={handleRemoveExperience} variant="outline" className="text-primary flex items-center space-x-2">
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

export default ExperienceForm