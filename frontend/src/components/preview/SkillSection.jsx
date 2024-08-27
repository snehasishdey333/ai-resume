

const SkillSection = ({info}) => {
  return (
    <section>
      <h1 className="font-bold text-xl">Skills</h1>
      <ul className="flex items-center space-x-2 text-xs my-2">
         {info?.skills?.map((s, index) => (
        <li key={index} className=""> &#8226; {s.name}</li>
      ))}
      </ul>
      
    </section>
  )
}

export default SkillSection