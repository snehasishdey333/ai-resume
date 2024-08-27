import { htmlToText } from "@/utils/globalFunctions"
import { Link } from "react-router-dom"


const ProjectSection = ({ info }) => {
  
  return (
    <section>
      <h1 className="font-bold text-xl">Projects</h1>
      {info?.projects?.map((p, index) => (
        <div key={index} className="my-2">
          <h1 className="font-bold text-[14px]">{p.name}</h1>
          <div className="flex justify-between items-center">
            <h3 className="text-[12px] font-semibold">{p.tech}</h3>
            
            <Link to={p.link} className="text-xs underline" target="_blank" rel="noopener noreferrer">Link</Link>
          </div>
          <p className="text-xs mx-auto text-justify" >
            {htmlToText(p?.summary)} 
          </p>
            
        </div>
        
      ))}
    </section>
  )
}

export default ProjectSection