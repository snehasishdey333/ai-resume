import { DeleteIcon, PlusIcon, SaveIcon } from "lucide-react"
import { Button } from "../ui/button"
import { useContext, useEffect, useState } from "react"
import { ResumeInfoContext } from "@/context/ResumeInfoContext"
import { Input } from "../ui/input"
import axios from "axios"
import { useParams } from "react-router-dom"
import { TemplateInfoContext } from "@/context/TemplateInfoContext"


const AchievementForm = ({ setEnableNext }) => {
  const resumeId = useParams().resumeId
  const { info, setInfo } = useContext(ResumeInfoContext)
  const {template,setTemplate}=useContext(TemplateInfoContext)
  const [achievementList, setAchievementList] = useState([{summary:""}])
  useEffect(()=>{
        info?.achievements?.length>0 && setAchievementList(info?.achievements)
    },[])
  

  const handleAddMoreAchievement = (e) => {
    e.preventDefault()
    setAchievementList([...achievementList, {summary:""}])
  }

  const handleRemoveAchievement = (e) => {
    e.preventDefault()
    setAchievementList(prev=>prev.slice(0,-1))
  }
  
  const handleInputChange = (index,name,value) => {
    setEnableNext(false)
    const newAchievements = achievementList.slice()
    newAchievements[index][name] = value
    setAchievementList(newAchievements)
   
  }

  useEffect(() => {
    setInfo({
      ...info,
      achievements:achievementList
    })
  }, [achievementList])

  const onSave = async (e) => {
    e.preventDefault()
    try {
            const response = await axios.put(import.meta.env.VITE_BACKEND_URL + "/api/resume/update/" + resumeId, {
              achievements: info?.achievements,
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
    <div className="p-5 rounded-lg border-2 border-t-primary shadow-md w-full">
      <h1 className="pl-3 text-lg font-bold">Achievements</h1>
      <p className="pl-3">Add your achievements</p>
      <form onSubmit={onSave} className="mt-4">
        {achievementList?.map((a, index) => (
          
           <div key={index} className="flex flex-col items-start space-y-1 my-3">
                  <label>Achievement Summary</label>
                  <Input name={a.summary} value={a?.summary} required onChange={(event)=>handleInputChange(index,'summary',event.target.value)}/> 
              </div>
        ))}
        <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <Button onClick={handleAddMoreAchievement} variant="outline" className="text-primary flex items-center space-x-2">
          <><PlusIcon />
            <span>Add more skills</span></>
          </Button>
          {achievementList?.length>1 && <Button onClick={handleRemoveAchievement} variant="outline" className="text-primary flex items-center space-x-2">
            <><DeleteIcon/>
            <span>Remove</span></>
          </Button>}
        </div>
        
        <Button className="flex items-center space-x-2">
          <><SaveIcon />

            <span>Save</span></>
        </Button>
      </div>
      </form>
      
      
      </div>
  )
}

export default AchievementForm