import SectionDivider from "../custom/SectionDivider"


const Personal = ({info}) => {
    return (
      <section className="flex items-center flex-col">
        <h1 className="mx-auto text-center font-bold text-3xl">{info?.firstName} {info?.lastName}</h1>
        <p  className="text-sm font-semibold">{info?.jobTitle}</p>
        <div className="text-xs mx-auto flex items-center space-x-1">
          <p>{info?.email}</p>
          <span>-</span>
          <p>{info?.phone}</p>
        </div>
        <p className="text-xs">{info?.address}</p>
        
      </section>
      
  )
}

export default Personal