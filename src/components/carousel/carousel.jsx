import React from "react";
import carouselImg1 from "../Images/Carousel/carousel1.jpg";
import carouselImg2 from "../Images/Carousel/carousel2.jpg";
import carouselImg3 from "../Images/Carousel/carousel3.jpg";
import carouselImg4 from "../Images/Carousel/carousel4.jpg";
import "./carousel.css";

const Slider = porps => {
  return (
    <React.Fragment>
      <div className="container">
        <div id="myslideshow" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              className="active"
              data-target="#myslideshow"
              data-slide-to="0"
            ></li>
            <li data-target="#myslideshow" data-slide-to="1"></li>
            <li data-target="#myslideshow" data-slide-to="2"></li>
            <li data-target="#myslideshow" data-slide-to="3"></li>
            <li data-target="#myslideshow" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carouselImg1} className="d-block w-100" alt="" />
              <div className="carousel-caption">
                <h4>Drone</h4>
                <p>Learn the building of the drone and flying</p>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={carouselImg2} className="d-block w-100" alt="" />
              <div className="carousel-caption">
                <h4>Aeromodelling</h4>
                <p id="cap2">
                  Build some good Models of your own and compete proving your
                  worth!!!
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={carouselImg3} className="d-block w-100" alt="" />
              <div className="carousel-caption" id="para">
                <h4>Robotics</h4>
                <p>
                  Love to Automate thing? Join us and learn robotics to explore
                  your passion in this field
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={carouselImg4} className="d-block w-100" alt="" />
              <div className="carousel-caption" id="para">
                <h4>Projects</h4>
                <p>
                  Make some mindblowing projects which you never thought you
                  would work on
                </p>
              </div>
            </div>
          </div>
          <a
            href="#myslideshow"
            className="carousel-control-prev"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            href="#myslideshow"
            className="carousel-control-next"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
