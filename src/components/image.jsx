import React, { useState } from "react";

export const Image = ({ title, largeImage, smallImage, video }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClose = () => setShowVideo(false);

  return (
    <div className="portfolio-item">
      {!video ? (
        // Regular image logic
        <div className="hover-bg">
          <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
            <div className="hover-text">
              <h4>{title}</h4>
            </div>
            <img src={smallImage} className="img-responsive" alt={title} />
          </a>
        </div>
      ) : (
        <>
          {/* Thumbnail with Play Button */}
          <div
            style={{ position: "relative", cursor: "pointer" }}
            onClick={() => setShowVideo(true)}
          >
            <img
              src={smallImage}
              alt={title}
              className="img-responsive"
              style={{ width: "100%" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "50px",
                color: "#fff",
                background: "rgba(0,0,0,0.5)",
                borderRadius: "50%",
                padding: "15px"
              }}
            >
              ▶
            </div>
          </div>

          {/* Video Modal */}
          {showVideo && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999
              }}
            >
              <div style={{ position: "relative", width: "80%", maxWidth: "800px" }}>
                <iframe
                  src={video}
                  width="100%"
                  height="450"
                  allow="autoplay"
                  title={title}
                  style={{ border: "none" }}
                ></iframe>
                <button
                  onClick={handleClose}
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "0",
                    fontSize: "30px",
                    color: "#fff",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  ✖
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
