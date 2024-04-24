import "./Video.scss";
import { FaPlay } from "react-icons/fa";
import { getDownloadURL, ref } from "firebase/storage";

import { storage } from "../../firebase";

const Video = () => {
  const vid1Ref = ref(storage, "/youtube-bluePrint/1 Welcome Video.mp4");
  const vid2Ref = ref(storage, "/youtube-bluePrint/2 Quit.mp4");
  const vid3Ref = ref(storage, "/youtube-bluePrint/3 Harsh Truths.mp4");
  const vid4Ref = ref(storage, "/youtube-bluePrint/4 Purpose.mp4");
  const vid5Ref = ref(storage, "/youtube-bluePrint/5 Niche.mp4");
  const vid6Ref = ref(storage, "/youtube-bluePrint/6 Hook.mp4");
  const vid7Ref = ref(storage, "/youtube-bluePrint/7 Script.mp4");
  const vid8Ref = ref(storage, "/youtube-bluePrint/8 Topics.mp4");

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

  const handleVideoSelection = (url) => {
    const video = document.getElementById("video");
    video.src = url;
    video.load();
    video.play();
  };
  const fetchVids = (vidRef) => {
    getDownloadURL(vidRef)
      .then((url) => {
        handleVideoSelection(url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="video">
      <div className="videoWrapper">
        <video
          id="video"
          controls
          controlsList="nodownload"
          autoPlay={true}
          preload="metadata"
          poster="src\assets\poster.png"
          onCanPlay={() => {
            const video = document.getElementById("video");
            video.play();
          }}
        ></video>
      </div>
      <div className="btns">
        <span>To Play Press the Buttons</span>
        {btnData.map((item) => (
          <button className="btn" onClick={() => fetchVids(item.ref)} key={item.id}>
            <FaPlay className="icon" />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Video;
