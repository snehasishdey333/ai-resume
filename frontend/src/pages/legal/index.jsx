import Footer from "@/components/custom/Footer"
import Header from "@/components/custom/Header"
import { legalPageData } from "@/data/legal"
import { getValuesByKey } from "@/utils/globalFunctions"
import { useLocation } from "react-router-dom"


const LegalPageSkeleton = ({ path }) => {

    
    
  return (
      <main>
          <Header />
          <p className="p-4 text-sm min-h-[70vh]">
              {getValuesByKey(legalPageData,path)}
          </p>
          
          <Footer/>
      </main>
  )
}

export default LegalPageSkeleton