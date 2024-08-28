import { useParams } from "react-router-dom"
import { Input } from "../ui/input"
import { useContext, useState } from "react"
import { ResumeInfoContext } from "@/context/ResumeInfoContext"
import { Button } from "../ui/button"
import { Brain, Loader2, Loader2Icon, SaveIcon } from "lucide-react"
import { Textarea } from "../ui/textarea"
import { toast } from "../ui/use-toast"
import { generateAISummary } from "@/lib/ai"
import axios from "axios"
import { TemplateInfoContext } from "@/context/TemplateInfoContext"


const SummaryForm = ({ setEnableNext }) => {
  
  const resumeId = useParams().resumeId
  const [loading, setLoading] = useState(false)
  const [generate,setGenerate]=useState(false)
    
  const { info, setInfo } = useContext(ResumeInfoContext)
  const {template,setTemplate}=useContext(TemplateInfoContext)
  
  const generateSummary = async () => {
    setGenerate(true)
    const prompt = `Job title: For ${info?.jobTitle} give me one resume summary within 4-5 lines in JSON format`
    const res = await generateAISummary(prompt)
    const response = (JSON.parse(res))
    setInfo({ ...info, summary: response?.summary })
    setGenerate(false)
  }

  const handleInputChange = (e) => {
        setEnableNext(false)
        const {name,value}=e.target
        setInfo({
            ...info,
            [name]: value
        })
    }

    const handleSave = async(e) => {
        e.preventDefault()
       try {
            const response = await axios.put(import.meta.env.VITE_BACKEND_URL + "/api/resume/update/" + resumeId, {
              summary: info?.summary,
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
          <h1 className="pl-3 text-lg font-bold">Summary</h1>
          <p className="pl-3">Add summary for you job title</p>
          <form onSubmit={handleSave} className="p-3 grid grid-cols-1 gap-3">
        <div className="flex flex-col items-start space-y-3">
          <div className="w-full flex justify-between items-center">
            <label>Summary</label>
            <Button onClick={generateSummary} className="space-x-2">
              {generate ? <Loader2 /> :
              <>
                <Brain/>
              <span>Generate from AI</span>
             </> }
              
            </Button>
              
          </div>
                 
          <Textarea className="h-[150px]" name="summary" value={info?.summary} required onChange={handleInputChange} /> 
         
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

export default SummaryForm