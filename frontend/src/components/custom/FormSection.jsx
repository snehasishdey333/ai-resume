import { useEffect, useState } from "react"
import AchievementForm from "../form/AchievementForm"
import EducationForm from "../form/EducationForm"
import ExperienceForm from "../form/ExperienceForm"
import PersonalDetailsForm from "../form/PersonalDetailsForm"
import ProjectsForm from "../form/ProjectsForm"
import SkillsForm from "../form/SkillsForm"
import { Button } from "../ui/button"
import { BookDashed, Home, MoveLeft, MoveRight, Paintbrush } from "lucide-react"
import SummaryForm from "../form/SummaryForm"
import { Link, Navigate, useParams } from "react-router-dom"



const FormSection = () => {
  const resumeId = useParams().resumeId
  const [index, setIndex] = useState(0);
  const [enableNext, setEnableNext] = useState(false)
  
  
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button className="flex items-center space-x-2">
            <Link to="/dashboard"><Home/></Link>
        </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          {index>0 && <Button onClick={()=>setIndex(prev=>prev-1)}><MoveLeft/></Button>}
        <Button disabled={!enableNext} onClick={()=>setIndex(prev=>prev+1)} className="flex items-center space-x-2">
          <span>Next</span>
          <MoveRight/>
        </Button>
        </div>
        
      </div>
      <div className="mt-8">
      {index == 0 && <PersonalDetailsForm setEnableNext={setEnableNext} />}
      {index==1 && <SummaryForm setEnableNext={setEnableNext}/>}
      {index==2 && <ExperienceForm setEnableNext={setEnableNext} />}
      {index==3 && <ProjectsForm setEnableNext={setEnableNext}/>}
      {index==4 && <EducationForm setEnableNext={setEnableNext}/>}
      {index==5 && <SkillsForm setEnableNext={setEnableNext}/>}
      {index == 6 && <AchievementForm setEnableNext={setEnableNext} />}
      {index==7 && <Navigate to={`/resume/${resumeId}/view`}/>}
      </div>
      
      
    </section>
  )
}

export default FormSection