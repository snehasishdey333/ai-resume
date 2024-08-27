import { ResumeInfoContext } from "@/context/ResumeInfoContext"
import { useContext, useEffect, useState } from "react"
import PersonalSection from "../preview/PersonalSection"
import SkillSection from "../preview/SkillSection"
import ExperienceSection from "../preview/ExperienceSection"
import ProjectSection from "../preview/ProjectSection"
import AchievementSection from "../preview/AchievementSection"
import EducationSection from "../preview/EducationSection"
import SectionDivider from "./SectionDivider"
import SummarySection from "../preview/SummarySection"
import Template1 from "../template/Template1"
import Template2 from "../template/Template2"
import Template3 from "../template/Template3"
import Template4 from "../template/Template4"
import Template5 from "../template/Template5"
import { Button } from "../ui/button"
import PreviewDownload from "./PreviewDownload"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { TemplateInfoContext } from "@/context/TemplateInfoContext"
import { UserInfoContext } from "@/context/UserInfoContext"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"



const PreviewSection = () => {
  const [open, setOpen] = useState(false)
  const resumeId = useParams().resumeId
  const isPremium=false
  const { info, setInfo } = useContext(ResumeInfoContext)
  const {template,setTemplate}=useContext(TemplateInfoContext)
  const {user}=useContext(UserInfoContext)
  
  const handleChangeTemplate = async (number) => {
    setTemplate(number)
  }

  
  
  return (
    <section>
      <div>
        <h1 className="font-bold text-lg mb-2">Choose Template</h1>
        <div className="flex items-center space-x-3 mb-4">
          <Button onClick={()=>handleChangeTemplate(1)}>1</Button>
          <Button onClick={()=>handleChangeTemplate(2)}>2</Button>
          <Button onClick={()=>handleChangeTemplate(3)}>3</Button>
          {user?.subscribed ? <Button onClick={() => handleChangeTemplate(4)}>4</Button> :
          <Button onClick={()=>setOpen(true)}><span className="line-through">4</span></Button>}
          {user?.subscribed ? <Button onClick={() => handleChangeTemplate(5)}>5</Button> :
          <Button onClick={()=>setOpen(true)}><span className="line-through">5</span></Button>}
        </div>
      </div>
      <div className="bg-gray-500 p-[1px] shadow-xl">
        <PreviewDownload template={template} info={info}/>
      </div>
      <Dialog open={open}>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Get AIResume subscription to unlock premium themes!</DialogTitle>
                        <DialogDescription>
                            <div className="my-2">
                              <p className="font-bold text-lg mt-3 mb-2">Create resumes with premium themes!</p>
                            </div>
                        
                        </DialogDescription>
                        <div className="w-full flex items-center justify-end space-x-2">
                            <Button onClick={()=>setOpen(false)} variant="outline">Cancel</Button>
                            <Button onClick={() => {}}><Link to="/premium">Get Premium</Link></Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
                </Dialog>
    </section>
    
  )
}

export default PreviewSection