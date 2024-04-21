import "./Video.scss";
import { useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
 
import { storage } from "../../firebase";
const Video = () => {
  const [url1, setUrl1] = useState("");
  
  const videosArr = [
    url1,
    "https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf",
    "https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174",
    "https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174",
    "https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78",
    "https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281",
    "https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614",
  ];
  const [videoSrc, SetVideoSrc] = useState(videosArr[0]);






const vid1Ref = ref(
  storage,
  "/youtube-bluePrint/1 Welcome Video.mp4"
);
const vid2Ref = ref(storage, "/youtube-bluePrint/2 Quit.mp4");

getDownloadURL(vid1Ref)
  .then((url) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open("GET", url);
    xhr.send();
    console.log(url);
    setUrl1(url);
  })
  .catch((error) => {
    // Handle any errors
  });


  return (
    <div className="video">
      <div className="videoWrapper">
        <video id="video" src={videoSrc} controls autoPlay={true}></video>
      </div>
      <div className="btns">
        {videosArr.map((item, index) => {
          return (
            <button onClick={() => SetVideoSrc(item)} key={index+1}>
              Lecture {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Video;
