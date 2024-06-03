import "./Chatgtp.scss"
import Video from "../../components/Video/Video";
import Navbar from "../../components/Navbar/Navbar";
import { storage } from "../../firebase";
import { ref } from "firebase/storage";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaVideo } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
const Youtube = () => {
  const [active, setActive] = useState(false);
  const vid1Ref = ref(storage, "/youtube-bluePrint/1 Welcome Video.mp4");
  
  const textData = [
    {
      title: "Master ChatGPT: Transform Your Life With AI Chatbots",
    },
    {
      desc: "Artificial Intelligence is changing the world. Learn to use the power of ChatGPT at its full potential to level up your productivity at work, school and at home. Discover the basics of machine learning and prompt engineering.",
    },
  ];
  const btnData = [
    {
      name: "Welcome",
      ref: vid1Ref,
      id: "1",
    },
    
  ];
  return (
    <div className="youtube">
      <Navbar />
      <div className="youtubeContainer">
        {active ? (
          <Video btnData={btnData} textData={textData} />
        ) : (
          <>
            <div className="title">
              <h1 className="first gpt">
                Master <span>ChatGPT:</span>
              </h1>
              <h1 className="second">Transform Your Life With AI Chatbots</h1>
            </div>
            <p>
              Artificial Intelligence is changing the world. Learn to use the
              power of ChatGPT at its full potential to level up your
              productivity at work, school and at home. Discover the basics of
              machine learning and prompt engineering.
            </p>
            <div className="chapters">
              <div className="chap">
                <div className="icon">
                  <FaVideo />
                </div>
                <span>4.5 Hours of video content</span>
              </div>

              <div className="chap">
                <div className="icon">
                  <BsStack />
                </div>
                <span>Detailed Chapters</span>
              </div>
            </div>
            <div className="buttons">
              <button className="watchBtn gpt" onClick={() => setActive(true)}>Watch Now</button>
              <Link to="/">Go to home</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Youtube;
