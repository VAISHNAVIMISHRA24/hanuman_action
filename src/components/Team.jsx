import React from "react";
// import "./Team.css";

export const Team = (props) => {
  return (
    <div id="team" className="text-center py-5">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-8 section-title">
            <h2 className="fw-bold mb-3">Meet the Team</h2>
            <p className="text-muted">
              We are a creative and dedicated team of designers and developers,
              working together to craft modern and user-friendly digital
              solutions.
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="row justify-content-center">
          {props.data
            ? props.data.map((d, i) => (
                <div key={i} className="col-md-3 col-sm-6 mb-4">
                  <div className="team-card">
                    <div className="team-img-wrapper">
                      <img src={d.img} alt={d.name} className="team-img" />
                      <div className="team-overlay">
                        {/* <div className="social-icons">
                          {d.linkedin && (
                            // <a href={d.linkedin} target="_blank" rel="noreferrer">
                            <i style={{background:"#d38a3bff"}} className={d.linkedin}></i>
                            // </a>
                          )}
                          {d.twitter && (
                            <a href={d.twitter} target="_blank" rel="noreferrer">
                              <i className="fa fa-twitter"></i>
                            </a>
                          )}
                          {d.email && (
                            <a href={`mailto:${d.email}`}>
                              <i className="fa fa-envelope-fill"></i>
                            </a>
                          )}
                        </div> */}
                      </div>
                    </div>
                    <div className="team-caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
