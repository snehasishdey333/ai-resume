import FormSection from "@/components/custom/FormSection"
import PreviewSection from "@/components/custom/PreviewSection"
import { ResumeInfoContext } from "@/context/ResumeInfoContext"
import { TemplateInfoContext } from "@/context/TemplateInfoContext"
import { data } from "@/data/dummy"
import { getResumeData } from "@/utils/apiCalls"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const EditResume = () => {
  const resumeId = useParams().resumeId
  
  const [info, setInfo] = useState()
  const [template, setTemplate] = useState(1)
  useEffect(() => {
    getResumeData(resumeId, setInfo)
    
  },[resumeId])
  return (
    <ResumeInfoContext.Provider value={{ info, setInfo }}>
      <TemplateInfoContext.Provider value={{template,setTemplate}}>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-10 gap-10">
        <FormSection />
        
        <PreviewSection/>
        
        </div>
        </TemplateInfoContext.Provider>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume