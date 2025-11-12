import React, { useState } from "react";

export const Team = ({ data }) => {
  // Track expanded state for each team member
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    // If same card is clicked again, collapse it
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="team" className="py-5">
      <div className="container">

        <div className="text-center mb-5 ">
    <div className="section-title">
          <h2 className="fw-bold mb-3">Meet the Team</h2>
          <p className="text-muted">
            A passionate crew of creators — from cinematography and design to
            sound and storytelling — bringing ideas to life through visuals.
          </p>
        </div>
        </div>

        {/* Team Grid */}
        <div
          className="row g-4 justify-content-center w-100"
          style={{ maxWidth: "1200px" }}
        >
          {data &&
            data.map((member, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="team-card">
                  {/* Image */}
                  <div className="team-img-wrapper">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="img-fluid team-img"
                    />
                    {/* Skill tags */}
                    <div className="skill-tags">
                      {member.job?.split(",").map((job, index) => (
                        <span key={index} className="skill-tag">
                          {job.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="team-info p-4">
                    <h5 className="fw-bold mb-1">{member.name}</h5>
                    <p className="text-orange small fw-semibold mb-2">
                      {member.job}
                    </p>

                    <p className="text-muted small bio-text">
                      {expandedIndex === i
                        ? member.text
                        : `${member.text.substring(0, 50)}...`}
                      {member.text.length > 50 && (
                        <button
                          onClick={() => toggleExpand(i)}
                          className="btn btn-link p-0 ms-1 text-decoration-none read-more text-orange"
                        >
                          {expandedIndex === i ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </p>

                    <ul className="list-unstyled text-start small mb-4">
                      <li>
                        <span className="dot"></span>
                        <strong>Experience:</strong> {member.experience}
                      </li>
                      <li>
                        <span className="dot"></span>
                        <strong>Projects:</strong> {member.projects}
                      </li>
                      <li>
                        <span className="dot"></span>
                        <strong>Education:</strong> {member.education}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
