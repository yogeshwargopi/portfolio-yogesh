import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import food from "../../assets/food.png";
import travel from "../../assets/travel.png";
import you from "../../assets/youtube.png";
import sea from "../../assets/sea.png";
import "./Projects.css";

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="projects">
      <div className="projects_container">
        <h1>Projects</h1>
        <div className="hrtagc" style={{ marginBottom: "50px" }}></div>
        <Carousel
          className="carousel_tag"
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding"
        >
          <a href="https://github.com/yogeshwargopi/Food-delivery-MERN-Fullstack">
            <div className="card1">
              <img className="" src={food} alt="food" width={300} />
              <p>Food Delivery</p>
            </div>
          </a>
          <a href="https://github.com/yogeshwargopi/Travel_tour_reactjs">
            <div className="card1">
              <img src={travel} alt="food" width={300} />
              <p>Travel Booking</p>
            </div>
          </a>
          <a href="https://dribbble.com/shots/20711095-sea-diving-webdesign">
            <div className="card1">
              <img src={sea} alt="food" width={300} />
              <p>Sea Diving</p>
            </div>
          </a>
          <a href="https://github.com/yogeshwargopi/Youtube-clone-fullstack">
            <div className="card1">
              <img src={you} alt="food" width={300} />
              <p>Youtube Clone</p>
            </div>
          </a>
        </Carousel>
        <p style={{ textAlign: "center", fontSize: "20px", marginTop: "30px" }}>
          For more projects check my
          <a
            style={{
              marginLeft: "5px",
              textDecoration: "none",
              color: "#5e9e9f",
            }}
            href="https://github.com/yogeshwargopi"
          >
            {" "}
            Github
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
