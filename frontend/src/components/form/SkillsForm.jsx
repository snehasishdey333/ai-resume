import { ResumeInfoContext } from "@/context/ResumeInfoContext"
import { useContext, useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { DeleteIcon, PlusIcon, SaveIcon } from "lucide-react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { TemplateInfoContext } from "@/context/TemplateInfoContext"


const SkillsForm = ({ setEnableNext }) => {
  const resumeId = useParams().resumeId
  const { info, setInfo } = useContext(ResumeInfoContext)
  const {template,setTemplate}=useContext(TemplateInfoContext)
  const [skillsList, setSkillsList] = useState([{name:""}])
  useEffect(()=>{
        info?.skills?.length>0 && setSkillsList(info?.skills)
    },[])
  

  const handleAddMoreSkill = (e) => {
    e.preventDefault()
    setSkillsList([...skillsList, {name:""}])
  }

  const handleRemoveSkill = (e) => {
    e.preventDefault()
    setSkillsList(prev=>prev.slice(0,-1))
  }
  
  const handleInputChange = (index,name,value) => {
    setEnableNext(false)
    const newSkills = skillsList.slice()
    newSkills[index][name] = value
    setSkillsList(newSkills)
   
  }

  useEffect(() => {
    setInfo({
      ...info,
      skills:skillsList
    })
  }, [skillsList])

  const onSave = async (e) => {
    e.preventDefault()
    try {
            const response = await axios.put(import.meta.env.VITE_BACKEND_URL + "/api/resume/update/" + resumeId, {
              skills: info?.skills,
              template:template
            },{ withCredentials: true })
            console.log(response.data)
            setEnableNext(true)
        }
        catch (error) {
            console.log(error)
        }
  }

  return (
    <div className="p-5 rounded-lg border-2 border-t-primary shadow-md w-full">
      <h1 className="pl-3 text-lg font-bold">Skills</h1>
      <p className="pl-3">Add your technical skills</p>
      <form  className="mt-4">
        {skillsList?.map((s, index) => (
          
           <div key={index} className="flex flex-col items-start space-y-1 my-3">
                  <label>Skill Name</label>
                  <Input name={name} value={s?.name} required onChange={(event)=>handleInputChange(index,'name',event.target.value)}/> 
              </div>
        ))}
        <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <Button onClick={handleAddMoreSkill} variant="outline" className="text-primary flex items-center space-x-2">
          <><PlusIcon />
            <span>Add more skills</span></>
          </Button>
          {skillsList?.length>1 && <Button onClick={handleRemoveSkill} variant="outline" className="text-primary flex items-center space-x-2">
            <><DeleteIcon/>
            <span>Remove</span></>
          </Button>}
        </div>
        
        <Button onClick={onSave} className="flex items-center space-x-2">
          <><SaveIcon />
            <span>Save</span></>
        </Button>
      </div>
      </form>
      
      
      </div>
  )
}

export default SkillsForm