import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="left">
          <div className="logo">
            <div className="text">
              <span>Courses</span>
              <span>Cracked</span>
            </div>
            <img src="/cracked-alien-skull-svgrepo-com.svg" alt="" />
          </div>
          <p>
            At Courses Cracked, you can access all the courses of Dhruv
            Rathee Academy, you can gain practical knowledge and learn
            real-world skills that will help you transform your life at work,
            school and home.
          </p>
        </div>
        <hr />
        <div className="right">
          <h5>Quick Links</h5>
          <Link to="/donate">Donate</Link>
          <a href="#top">Top</a>
          <a href="#courses">Courses</a>
        </div>

      </div>
    </div>
  );
};

export default Footer;
