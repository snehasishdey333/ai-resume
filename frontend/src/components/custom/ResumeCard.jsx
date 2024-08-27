import { NotebookTabsIcon } from "lucide-react"
import { Link } from "react-router-dom"


const ResumeCard = ({props}) => {
  return (
    <Link to={`/dashboard/resume/${props._id}/edit`} className="w-[150px] h-[150px] cursor-pointer flex flex-col items-center justify-center space-y-4 md:w-[200px] md:h-[220px] lg:w-[200px] lg:h-[220px] bg-gradient-to-t from-primary to-[#9ebef8] rounded-md shadow-md hover:scale-95 ease-in duration-200">
      <NotebookTabsIcon color="white"/>
      <h1 className="text-white text-center font-semibold text-[12px] md:text-[14px]">{props.title}</h1>
      </Link>
  )
}

export default ResumeCard