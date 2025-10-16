import React, { useState } from "react";

export const Testimonials = (props) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div id="welcome">
      {/* <div className="container"> */}
        {/* <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div> */}
        <section id="testimonials" className="client-section py-5">
      <div className="container text-center section-title">
        <h2 className="section-title mb-3">
        What our clients say
        </h2>
        <p className="text-muted mb-5">
          Don’t just take our word for it — hear what our valued clients have to say about their experience working with us.
        </p>

         <div className="row g-4">
          {props.data ? props.data.map((review, index) => {
            const isExpanded = expandedIndex === index;
            const showButton = review.text.length > 180; // only show if long enough


            return (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="review-card h-100 p-4 text-start">
                  <div className="d-flex align-items-center mb-3">
                    <div className="avatar-wrapper">
                      <img
                        src={review.img}
                        alt={review.name}
                        className="avatar"
                      />
                      <span className="star-badge">★</span>
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0 fw-bold">{review.name}</h6>
                      <div className="rating text-warning">
                        {"★".repeat(review.rating)}
                      </div>
                    </div>
                  </div>

                  <p
                    className={`review-text fst-italic text-muted ${
                      isExpanded ? "expanded" : "collapsed"
                    }`}
                  >
                    “{review.text}”
                  </p>


                 {showButton && (
                    <button
                      className="btn-learn mt-2"
                      onClick={() => toggleExpand(index)}
                    >
                      {isExpanded ? "Show Less" : "Learn More"}
                    </button>
                  )}
                </div>
              </div>
            );
          }):"loading"}
        </div>
      </div>
    </section>
 
      {/* </div> */}
    </div>
  );
};
