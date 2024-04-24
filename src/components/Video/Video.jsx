import "./Video.scss";
import { FaPlay } from "react-icons/fa";
import { getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaDonate } from "react-icons/fa";
const Video = (props) => {
  const { btnData, textData } = props;
  console.log(textData);

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
    <div className="container">
      <div className="videoContainer">
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
        <div className="btnWrapper">
          <h3>Play Lectures :</h3>
          <div className="btns">
            {btnData.map((item) => (
              <button
                className="btn"
                onClick={() => fetchVids(item.ref)}
                key={item.id}
              >
                <FaPlay className="icon" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="lowerSec">
        <div className="title">
          <h1>{textData[0].title}</h1>
        </div>
        <div className="links">
          <Link className="back" to="/">
            <IoChevronBackOutline />
            Back
          </Link>
          <Link className="donateLink" to="/donate">
            <FaDonate />
            Donate
          </Link>
        </div>
        <div className="desc">
          <h3>Description :</h3>
          <p>{textData[1].desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
