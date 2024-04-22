// import "./Video.scss";
// import { useEffect, useState } from "react";
// import { getDownloadURL, ref } from "firebase/storage";

// import { storage } from "../../firebase";
// import { RotateLoader } from "react-spinners";
// const Video = () => {

//  const [loading , setLoading] = useState(true)
//    const [videosArr, setVideosArr] = useState([]);
//   const [videoSrc, setVideoSrc] = useState(videosArr[0]);
//   const vid1Ref = ref(storage, "/youtube-bluePrint/1 Welcome Video.mp4");
//   const vid2Ref = ref(storage, "/youtube-bluePrint/2 Quit.mp4");
  
//   const fetchVids = (vidRef) => {
//     getDownloadURL(vidRef)
//       .then((url) => {
//         const xhr = new XMLHttpRequest();
//         xhr.responseType = "blob";
//         xhr.onload = (event) => {
//           const blob = xhr.response;
//         };
//         xhr.open("GET", url);
//         xhr.send();
//         setVideosArr((prev)=> [...prev,url]);
//         setLoading(false)
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   useEffect(() => {
//     fetchVids(vid1Ref);
//     fetchVids(vid2Ref);
//   }, []);
    
//   return loading ? (
//     <RotateLoader color="#36d7b7" />
//   ) : (
//     <div className="video">
//       <div className="videoWrapper">
//         <video
//           id="video"
//           src={videoSrc}
//           controls
//           controlsList="nodownload"
//           autoPlay={true}
//           preload="none"
//         ></video>
//       </div>
//       <div className="btns">
//         {videosArr.map((item, index) => {
//           return (
//             <button onClick={() => setVideoSrc(item)} key={index + 1}>
//               Lecture {index + 1}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Video;












import "./Video.scss";
import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";

import { storage } from "../../firebase";
import { RotateLoader } from "react-spinners";

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
    <RotateLoader color="#36d7b7" />
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
          onCanPlay={() => {
            const video = document.getElementById("video");
            video.play();
          }}
        ></video>
      </div>
      <div className="btns">
        {videosArr.map((item, index) => {
          return (
            <button onClick={() => handleVideoSelection(item)} key={index + 1}>
              Lecture {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Video;
