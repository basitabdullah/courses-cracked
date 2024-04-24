import "./Video.scss";
import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";

import { storage } from "../../firebase";
import Loader from "../Loader/Loader";

const Video = () => {
  const [loading, setLoading] = useState(true);
  const [videosArr, setVideosArr] = useState([]);
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  const vid1Ref = ref(storage, "/youtube-bluePrint/1 Welcome Video.mp4");
  const vid2Ref = ref(storage, "/youtube-bluePrint/2 Quit.mp4");

  const fetchVids = (vidRef) => {
    getDownloadURL(vidRef)
      .then((url) => {
        setVideosArr((prev) => [...prev, url]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchVids(vid2Ref);
    fetchVids(vid1Ref);
  }, []);

  const handleVideoSelection = (url) => {
    setVideoSrc(url);
    const video = document.getElementById("video");
    video.src = url;
    video.load();
    video.play();
  };

  return loading ? (
    <Loader/>
  ) : (
    <div className="video">
      <div className="videoWrapper">
        <video
          id="video"
          src={videoSrc}
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
        {videosArr.map((item, index) => {
          return (
            <button
              className="btn"
              onClick={() => handleVideoSelection(item)}
              key={index + 1}
            >
              <FaPlay className="icon" />
              <span>Lecture {index + 1}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Video;
