import "./Youtube.scss";
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
  const vid2Ref = ref(storage, "/youtube-bluePrint/2 Quit.mp4");
  const vid3Ref = ref(storage, "/youtube-bluePrint/3 Harsh Truths.mp4");
  const vid4Ref = ref(storage, "/youtube-bluePrint/4 Purpose.mp4");
  const vid5Ref = ref(storage, "/youtube-bluePrint/5 Niche.mp4");
  const vid6Ref = ref(storage, "/youtube-bluePrint/6 Hook.mp4");
  const vid7Ref = ref(storage, "/youtube-bluePrint/7 Script.mp4");
  const vid8Ref = ref(storage, "/youtube-bluePrint/8 Topics.mp4");
  const vid9Ref = ref(
    storage,
    "/youtube-bluePrint/9 Dynamic Of Shooting Videos.mp4"
  );
  const vid10Ref = ref(
    storage,
    "/youtube-bluePrint/10 Basics Of Filming Techniques.mp4"
  );
  const vid11Ref = ref(
    storage,
    "/youtube-bluePrint/11 Organising Your Footage.mp4"
  );
  const vid12Ref = ref(storage, "/youtube-bluePrint/12 Mastering Lighting.mp4");
  const vid13Ref = ref(
    storage,
    "/youtube-bluePrint/13 Perfecting The Audio.mp4"
  );
  const vid14Ref = ref(
    storage,
    "/youtube-bluePrint/14 Comparing The Best And Free Paid Software.mp4"
  );

  const vid15Ref = ref(
    storage,
    "/youtube-bluePrint/15.Fundamental Of Video Editing.mp4"
  );
  const vid16Ref = ref(
    storage,
    "/youtube-bluePrint/16. The Editor Secret Guide.mp4"
  );
  const vid17Ref = ref(
    storage,
    "/youtube-bluePrint/17. Edit With Me Vlog_Edit Walkthrough.mp4"
  );
  const vid18Ref = ref(
    storage,
    "/youtube-bluePrint/18. Choosing your platform.mp4"
  );
  const vid19Ref = ref(
    storage,
    "/youtube-bluePrint/19. The best publishing time - When to publish.mp4"
  );
  const vid20Ref = ref(storage, "/youtube-bluePrint/20 . The CRE formula.mp4");

  const vid21Ref = ref(
    storage,
    "/youtube-bluePrint/21 Affiliate Marketing.mp4"
  );
  const vid22Ref = ref(
    storage,
    "/youtube-bluePrint/22 Brand Deals And Sponsorships.mp4"
  );
  const vid23Ref = ref(
    storage,
    "/youtube-bluePrint/23 Donations As A Stream Of Income.mp4"
  );
  const vid24Ref = ref(
    storage,
    "/youtube-bluePrint/24 From Hobby To Career.mp4"
  );
  const vid25Ref = ref(
    storage,
    "/youtube-bluePrint/25 How To Get Sponsors.mp4"
  );
  const vid26Ref = ref(
    storage,
    "/youtube-bluePrint/26 THE TOP SECRET _ BEST WAY TO MAKE MONEY.mp4"
  );
  const vid27Ref = ref(
    storage,
    "/youtube-bluePrint/27 Understanding Adsense And CPM Rates.mp4"
  );

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
      id: "1",
    },
    {
      name: "Quit",
      ref: vid2Ref,
      id: "2",
    },
    {
      name: "Harsh Truths",
      ref: vid3Ref,
      id: "3",
    },
    {
      name: "Purpose",
      ref: vid4Ref,
      id: "4",
    },
    {
      name: "Niche",
      ref: vid5Ref,
      id: "5",
    },
    {
      name: "Hook",
      ref: vid6Ref,
      id: "6",
    },
    {
      name: "Script",
      ref: vid7Ref,
      id: "7",
    },
    {
      name: "Topics",
      ref: vid8Ref,
      id: "8",
    },
    {
      name: "Dynamics Of Shooting Videos",
      ref: vid9Ref,
      id: "9",
    },
    {
      name: "Basics Of Filming Techniques",
      ref: vid10Ref,
      id: "10",
    },
    {
      name: "Organising Your Footage",
      ref: vid11Ref,
      id: "11",
    },
    {
      name: "Matering The Lighting",
      ref: vid12Ref,
      id: "12",
    },
    {
      name: "Perfecting The Audio",
      ref: vid13Ref,
      id: "13",
    },
    {
      name: "Paid And Free Software",
      ref: vid14Ref,
      id: "14",
    },
    {
      name: "Video Editing Fundamentals",
      ref: vid15Ref,
      id: "15",
    },
    {
      name: "The Editor Secret Guide",
      ref: vid16Ref,
      id: "16",
    },
    {
      name: "Edit With Me",
      ref: vid17Ref,
      id: "17",
    },
    {
      name: "Choosing Your Platform",
      ref: vid18Ref,
      id: "18",
    },
    {
      name: "The Best Publishing Time",
      ref: vid19Ref,
      id: "19",
    },
    {
      name: "The CRE Formula",
      ref: vid20Ref,
      id: "20",
    },
    {
      name: "Affiliate Marketing",
      ref: vid21Ref,
      id: "21",
    },
    {
      name: "Brand Deals And Sponsorships",
      ref: vid22Ref,
      id: "22",
    },
    {
      name: "Donations As A Stream Of Income",
      ref: vid23Ref,
      id: "23",
    },
    {
      name: "From Hobby To Career",
      ref: vid24Ref,
      id: "24",
    },
    {
      name: "How To Get Sponsors",
      ref: vid25Ref,
      id: "25",
    },
    {
      name: "THE TOP SECRET",
      ref: vid26Ref,
      id: "26",
    },
    {
      name: "Understanding Adsense And CPM Rates",
      ref: vid27Ref,
      id: "27",
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
            <div className="chapters">
              <div className="chap">
                <div className="icon">
                  <FaVideo />
                </div>
                <span>7.5 Hours of video content</span>
              </div>

              <div className="chap">
                <div className="icon">
                  <BsStack />
                </div>
                <span>Detailed Chapters</span>
              </div>
            </div>
            <div className="buttons">
              <button className="watchBtn" onClick={() => setActive(true)}>
                Watch Now
              </button>
              <Link to="/">Go to home</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Youtube;
