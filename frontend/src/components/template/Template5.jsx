import SectionDivider from "../custom/SectionDivider"
import AchievementSection from "../preview/AchievementSection"
import EducationSection from "../preview/EducationSection"
import ExperienceSection from "../preview/ExperienceSection"
import ProjectSection from "../preview/ProjectSection"
import SkillSection from "../preview/SkillSection"
import SummarySection from "../preview/SummarySection"
import PersonalSection from "../preview/PersonalSection"



const Template5 = ({info}) => {
    
  return (
    <div className="border-y-[20px] px-8 pt-8 pb-4 space-y-4 bg-white h-full">
          {/* personal */}
      <PersonalSection info={info} />
      {/* experience */}
      <SectionDivider />
      <SummarySection info={info}/>
      <SectionDivider />
    <ExperienceSection info={info}/>
      {/* projects */}
      <SectionDivider />
      <ProjectSection info={info}/>
      {/* education */}
     <SectionDivider />
      <EducationSection info={info} />
      {/* skills */}
      <SectionDivider />
      <SkillSection info={info} />
     <SectionDivider />
      {/* achievements */}
      <AchievementSection info={info}/>
    </div>
  )
}

export default Template5