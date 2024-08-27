import { htmlToText } from "@/utils/globalFunctions"

const ExperienceSection = ({info}) => {
  return (
    <section>
      <h1 className="font-bold text-xl">Experience</h1>
      {info?.experience?.map((e, index) => (
        <div key={index} className="my-2">
          <h1 className="font-bold text-[14px]">{e.company}</h1>
          <div className="flex justify-between items-center">
            <h3 className="text-[12px] font-semibold">{e.title}</h3>
            <p className="text-xs">{e.startDate} - {e.endDate}</p>
          </div>
          {/* <p className="text-xs">
            {e.jobSummary}
         </p> */}
          <p className="text-xs text-justify" >
            {htmlToText(e?.jobSummary)} 
          </p>
            
        </div>
        
      ))}
    </section>
  )
}

export default ExperienceSection