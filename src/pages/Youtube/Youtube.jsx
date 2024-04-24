import "./Youtube.scss";
import Video from "../../components/Video/Video";
import Navbar from "../../components/Navbar/Navbar";
import { storage } from "../../firebase";
import { ref } from "firebase/storage";
import { Link } from "react-router-dom";
import { useState } from "react";

const Youtube = () => {
  const [active , setActive] = useState(false)
  const vid1Ref = ref(storage, "/youtube-bluePrint/1 Welcome Video.mp4");
  const vid2Ref = ref(storage, "/youtube-bluePrint/2 Quit.mp4");
  const vid3Ref = ref(storage, "/youtube-bluePrint/3 Harsh Truths.mp4");
  const vid4Ref = ref(storage, "/youtube-bluePrint/4 Purpose.mp4");
  const vid5Ref = ref(storage, "/youtube-bluePrint/5 Niche.mp4");
  const vid6Ref = ref(storage, "/youtube-bluePrint/6 Hook.mp4");
  const vid7Ref = ref(storage, "/youtube-bluePrint/7 Script.mp4");
  const vid8Ref = ref(storage, "/youtube-bluePrint/8 Topics.mp4");
  const textData = [
    {
      title: "The YouTube Blueprint",
    },
    {
      desc: "Have you ever dreamt of becoming a Youtuber? This is your blueprint to getting there. Whether you want to take up content creation as a full time career or a part-time job, this all-in-one course is your perfect plan of action. Learn to ideate, script, film, and edit amazing videos. Then understand the secret to getting lakhs of followers and making money as a content creator. It's time to live your dream life!",
    },
  ];
  const btnData = [
    {
      name: "Welcome",
      ref: vid1Ref,
      id: "jddhvjksd",
    },
    {
      name: "Quit",
      ref: vid2Ref,
      id: "dhcgsdds",
    },
    {
      name: "Harsh Truths",
      ref: vid3Ref,
      id: "dhcgsvdfdds",
    },
    {
      name: "Purpose",
      ref: vid4Ref,
      id: "vdffvdfv",
    },
    {
      name: "Niche",
      ref: vid5Ref,
      id: "brbrtbrbrbvdd",
    },
    {
      name: "Hook",
      ref: vid6Ref,
      id: "mhjmygbfgb",
    },
    {
      name: "Script",
      ref: vid7Ref,
      id: "vfbgbrtbtrb",
    },
    {
      name: "Topics",
      ref: vid8Ref,
      id: "dhcgsbrgbrtdds",
    },
    
  ];
  return (
    <div className="youtube">
      <Navbar />
      <div className="youtubeContainer">
        {active ? (
          <Video btnData={btnData} textData={textData}/>
        ) : (
          <>
            <div className="title">
              <h1 className="first">The YouTube Blueprint</h1>
              <h1 className="second">Make Content Creation Your Career!</h1>
            </div>
            <p>
              Have you ever dreamt of becoming a Youtuber? This is your
              blueprint to getting there. Whether you want to take up content
              creation as a full time career or a part-time job, this all-in-one
              course is your perfect plan of action. Learn to ideate, script,
              film, and edit amazing videos. Then understand the secret to
              getting lakhs of followers and making money as a content creator.
              It's time to live your dream life!
            </p>
            <div className="chapters"></div>
            <div className="buttons">
              <button onClick={()=>setActive(true)}>Watch</button>
              <Link>Go to home</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Youtube;
