import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-md-8 section-title">
            <h2>Meet the Team</h2>
            <p>
               We are a creative and dedicated team of designers and developers,
  working together to craft modern and user-friendly digital solutions.
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-3 col-sm-6 mb-4 team"
                >
                  <div className="thumbnail">
                    <img src={d.img} alt={d.name} className="team-img img-fluid" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
