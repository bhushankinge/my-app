import React from "react";
import "./aboutUs.css";
import teamLogo from "../Images/teamlogo.svg";
import { BsPeopleFill, BsFillInfoSquareFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";

const About = props => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <h1>About Us</h1>
        <img src={teamLogo} alt="" className="team-logo" />
        <p>
          We are a group of enthusiastic engineering students who who aspire to
          win accolades at national and international level by implementing
          innovative ideas in RC competitions (drones, boats, hovercrafts,
          automation technology etc.)
        </p>
      </div>
      <section>
        <div className="about"></div>
        <div className="wave"></div>
        <div className="icons">
          <div className="icon1">
            <BsPeopleFill size="5em" />
            <a href="">
              <h4>Founders</h4>
            </a>
          </div>
          <div className="icon2">
            <BsFillInfoSquareFill size="5em" />
            <a href="">
              <h4>TeamInfo</h4>
            </a>
          </div>
          <div className="icon3">
            <FaBook size="5em" />
            <a href="">
              <h4>Learn</h4>
            </a>
          </div>
          <div className="icon4">
            <GiTrophy size="5em" />
            <a href="">
              <h4>Hall of Frame</h4>
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
