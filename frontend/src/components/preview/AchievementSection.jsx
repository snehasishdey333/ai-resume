

const AchievementSection = ({info}) => {
  return (
    <section>
      <h1 className="font-bold text-xl">Achievements</h1>
      <ul className="flex flex-col items-start space-y-2 text-xs my-2">
         {info?.achievements?.map((a, index) => (
        <li key={index} className="text-justify"> &#8226; {a.summary}</li>
      ))}
      </ul>
      
    </section>
  )
}

export default AchievementSection