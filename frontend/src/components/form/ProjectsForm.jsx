import { DeleteIcon, PlusIcon, SaveIcon } from "lucide-react"
import { Button } from "../ui/button"
import RichTextEditor from "../custom/RichTextEditor"
import { Input } from "../ui/input"
import { useContext, useEffect, useState } from "react"
import { ResumeInfoContext } from "@/context/ResumeInfoContext"
import axios from "axios"
import { useParams } from "react-router-dom"
import { TemplateInfoContext } from "@/context/TemplateInfoContext"

const projectFields = {
  name: "",
  tech:"",
  summary: "",
  link:""
}

const ProjectsForm = ({ setEnableNext }) => {
  const resumeId = useParams().resumeId
  const { info, setInfo } = useContext(ResumeInfoContext)
  const {template,setTemplate}=useContext(TemplateInfoContext)
  const [projectList, setProjectList] = useState([projectFields])
  useEffect(()=>{
        info?.projects.length>0 && setProjectList(info?.projects)
        
    },[])
  const handleInputChange = (event, index) => {
    setEnableNext(false)
    const newProjects = projectList.slice()
    const { name, value } = event.target
    newProjects[index][name] = value
    setProjectList(newProjects)
    
  }
  const handleAddMoreProject = () => {
    setProjectList([...projectList, projectFields])
  }

  const handleRemoveProject = () => {
    
    setProjectList(prev=>prev.slice(0,-1))
  }

  const handleRichTextEditorChange = (event, name, index)=> {
     const newProjects = projectList.slice()
     const value=event.target.value
    newProjects[index][name] = value
    setProjectList(newProjects)
  }

  // console.log(experienceList)
  useEffect(() => {
    setInfo({
      ...info,
      projects:projectList
    })
  }, [projectList])
  
  const onSave = async () => {
    try {
            const response = await axios.put(import.meta.env.VITE_BACKEND_URL + "/api/resume/update/" + resumeId, {
              projects: info?.projects,
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
    <div className="p-5 rounded-lg border-2 border-t-primary shadow-md">
      <h1 className="pl-3 text-lg font-bold">Projects</h1>
      <p className="pl-3">Add your projects to showcase your skills</p>
      <div>
        {projectList?.map((p,index) => (
          <div className="" key={index}>
            <div className="grid grid-cols-2 gap-3 my-5 border p-3">
              <div className="flex flex-col items-start space-y-1">
                  <label>Project Name</label>
                  <Input name="name" value={p?.name} required onChange={(event)=>handleInputChange(event,index)}/> 
              </div>
              
              <div className="flex flex-col items-start space-y-1">
                  <label>Project Link</label>
                  <Input name="link" value={p?.link} required onChange={(event)=>handleInputChange(event,index)}/> 
              </div>
              <div className="flex flex-col col-span-2 items-start space-y-1">
                  <label>Technology used</label>
                  <Input name="tech" value={p?.tech} required onChange={(event)=>handleInputChange(event,index)}/> 
              </div>
              <div className="col-span-2 ">
                <RichTextEditor val={p?.summary} onRichTextEditorChange={(event)=>handleRichTextEditorChange(event,"summary",index)}/>
              </div>
              </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <Button onClick={handleAddMoreProject} variant="outline" className="text-primary flex items-center space-x-2">
          <><PlusIcon />
            <span>Add more projects</span></>
          </Button>
          {projectList?.length>1 && <Button onClick={handleRemoveProject} variant="outline" className="text-primary flex items-center space-x-2">
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

export default ProjectsForm