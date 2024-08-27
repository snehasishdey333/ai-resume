
import Template1 from '../template/Template1'
import Template2 from '../template/Template2'
import Template3 from '../template/Template3'
import Template4 from '../template/Template4'
import Template5 from '../template/Template5'

const PreviewDownload = ({template,info}) => {
  return (
      <div>
        {template == 1 && <Template1 info={info} />}
        {template == 2 && <Template2 info={info} />}
        {template == 3 && <Template3 info={info} />}
        {template == 4 && <Template4 info={info} />}
        {template == 5 && <Template5 info={info} />}
    </div>
  )
}

export default PreviewDownload