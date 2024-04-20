import Navbar from "../../components/Navbar/Navbar"
import "./Time.scss"

const Time = () => {
  return (
    <div className="time">
      <Navbar />
      <div className="timeContainer">
        <h1>Coming next week</h1>
        <h2>3:30 pm Tuesday, 30 April 2024 (IST)</h2>
      </div>
    </div>
  );
}

export default Time