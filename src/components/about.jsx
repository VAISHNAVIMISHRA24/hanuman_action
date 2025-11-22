import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="About" className="about-section py-5">
      <div className="container-fluid px-3 px-md-5">
        <div className="row align-items-center">
          {/* Left Image */}
          <div
            className="col-12 col-md-6 mb-4 mb-md-0 text-center"
            data-aos="fade-right"
          >
            <div className="image-wrapper">
              <img
                src="img/about.jpg"
                className="img-fluid w-100 rounded shadow-lg"
                alt="About Hanuman Action Art"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="col-12 col-md-6" data-aos="fade-left">
            <div className="about-text">
              <h2 className="mb-3">About Us</h2>
              <p>{props.data ? props.data.paragraph1 : "Loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "Loading..."}</p>

              {/* <a href="#services" className="btn btn-custom mt-3">
                Learn More →
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
