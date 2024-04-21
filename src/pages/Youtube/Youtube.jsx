import "./Youtube.scss"
import Video from '../../components/Video/Video'
import Navbar from "../../components/Navbar/Navbar"

const Youtube = () => {
  return (
    <div className='youtube'>
      <Navbar />
     <div className="youtubeContainer">
      <h1>Youtube Blue Print Course</h1>
     <Video/>
     </div>
    </div>
  )
}

export default Youtube