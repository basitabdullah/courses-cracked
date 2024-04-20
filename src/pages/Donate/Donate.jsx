import "./Donate.scss"
import { LiaDonateSolid } from "react-icons/lia";
import { BiDonateHeart } from "react-icons/bi";
import QrPic from "../../assets/qrPic.jpg"
import phonePAy from "../../assets/phonePay.jpg"
import gpay from "../../assets/paytm.png";
import paytm from "../../assets/gpay.jpg";
import Navbar from "../../components/Navbar/Navbar"
const Donate = () => {
  return (
    <div className="donate">
      <Navbar />
      <div className="donateContainer">
        <div className="donateWrapper">
          <div className="text">
            <h1>Donate To The Developer</h1>
            <div className="text1">
              <LiaDonateSolid className="icon" />
              <p>
                This web-app is not hosted and can be taken down any time,
                please contribute so that the developer could host this app on
                any hosting platform.
              </p>
            </div>

            <div className="text2">
              <BiDonateHeart className="icon" />
              <p>
                Developing and gathering the data takes time so please try to
                Donate.
              </p>
            </div>
          </div>
          <hr />
          <div className="qrCode">
            <img src={QrPic} alt="" />
            <div className="logos">
              <img src={gpay} alt="" />
              <img src={paytm} alt="" />
              <img src={phonePAy} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate