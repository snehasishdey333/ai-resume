

const EducationSection = ({info}) => {
  return (
    <section>
      <h1 className="font-bold text-xl">Education</h1>
      {info?.education?.map((e, index) => (
        <div key={index} className="my-2">
          <div className="flex justify-between items-center">
            
           <h1 className="font-bold text-[14px]">{e.name}</h1>
           <p className="text-xs">
            {e.year}
         </p>
          </div>
         
          <p className="text-xs">
            {e.address}
          </p>
          <div className="flex justify-between items-center">
            
            <p className="text-xs">{e.class}</p>
            <p className="text-xs">Percentage - {e.percentage}</p> 
          </div>
          <p className="text-xs">{e.startDate} - {e.endDate}</p>
          
        </div>
        
      ))}
    </section>
  )
}

export default EducationSection