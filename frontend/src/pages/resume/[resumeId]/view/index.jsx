import Footer from "@/components/custom/Footer"
import Header from "@/components/custom/Header"
import PreviewDownload from "@/components/custom/PreviewDownload"
import PreviewSection from "@/components/custom/PreviewSection"
import { Button } from "@/components/ui/button"
import { ResumeInfoContext } from "@/context/ResumeInfoContext"
import { data } from "@/data/dummy"
import { getResumeData } from "@/utils/apiCalls"
import { DownloadIcon, ShareIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ViewResume = () => {
    const resumeId = useParams().resumeId
    const [info, setInfo] = useState()
    
    const handleDownload=()=>{
        window.print();
    }

    useEffect(() => {
        getResumeData(resumeId,setInfo)
    },[resumeId])

    return (
      <ResumeInfoContext.Provider value={{info,setInfo}}>
            <main>
            <div id="no-print">
          
          <section className="max-w-5xl mx-auto p-4 my-4">
              <h1 className="font-bold text-3xl text-primary text-center">Congratulations! Your ultimate AI Resume is ready!</h1>
              <p className="my-2 font-semibold text-xl text-center">Download & Share it with recruiters</p>
              <div className="flex items-center justify-center">
                  <Button onClick={handleDownload} className="flex items-center space-x-2">
                      <>
                          <DownloadIcon/>
                          <span>Download</span>
                      </>
                  </Button>

                 
                        </div>

                    </section>
                    </div>
                    <div id="print-area" className="my-4 p-4 max-w-5xl mx-auto ">
                  <PreviewDownload template={info?.template} info={info}/>
                </div>
                
        </main>
        </ResumeInfoContext.Provider>
  )
}

export default ViewResume