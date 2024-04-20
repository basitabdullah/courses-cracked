import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Course from "../../components/Course/Course";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import star from "../../assets/star.png";
import { data } from "../../Data";
const Home = () => {

  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar id="top" />

        <div className="explore">
          <h1>LEARN WHAT SCHOOL DOESN’T TEACH YOU</h1>
          <p>
            At Courses Cracked, you can access all the paid courses of Dhruv
            Rathee Academy, you can gain practical knowledge and learn
            real-world skills that will help you transform your life at work,
            school and home.
          </p>
          <a className="exploreBtn" href="#courses">
            EXPLORE COURSES
          </a>

          <div className="learnersContainer">
            <div className="learners">
              <img
                src="https://assets-global.website-files.com/64c3cccd0420b62485950351/64c8245d4662e6db9dfb18d1_Learners.png"
                alt=""
              />

              <div className="usersCount">
                <span className="count">10000+</span>
                <span className="text">Happy Learners</span>
              </div>
            </div>
            <hr />
            <div className="ratingContainer">
              <div className="text">
                <span className="one">4.8+</span>
                <span className="two">(600+ Ratings)</span>
              </div>

              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
        </div>

        <b class="hr anim"></b>

        <div className="courses" id="courses">
         {
          data.map((i)=>(
           <Course key={i.id} name={i.name} title={i.title} para={i.para} listText={i.listText} img={i.img} path={i.path}/>
          ))
         }
        </div>
       <Footer/>
      </div>
    </div>
  );
};

export default Home;
