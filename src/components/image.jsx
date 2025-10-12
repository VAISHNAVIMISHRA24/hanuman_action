import React, { useState } from "react";

export const Image = ({ title, largeImage, smallImage, video, description }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClose = () => setShowVideo(false);

  return (
    <div
      className="portfolio-item"
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {!video ? (
        // For normal images
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
          {/* Video Thumbnail */}
          <div
            style={{
              position: "relative",
              cursor: "pointer",
              borderRadius: "20px",
              overflow: "hidden",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
            }}
            className="video-card"
            onClick={() => setShowVideo(true)}
          >
            {/* Thumbnail */}
            <img
              src={smallImage}
              alt={title}
              className="img-responsive"
              style={{
                width: "100%",
                borderRadius: "20px",
                transition: "transform 0.5s ease",
              }}
            />

            {/* Overlay Play Button */}
            <div
              className="play-overlay"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgba(0, 0, 0, 0.6)",
                borderRadius: "50%",
                padding: "20px",
                transition: "all 0.3s ease",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                  color: "white",
                }}
              >
                ▶
              </span>
            </div>

            {/* Title + Description */}
            <div
              style={{
                background: "#f8f6f3",
                padding: "20px",
                borderRadius: "0 0 20px 20px",
                textAlign: "center",
                transition: "background 0.4s ease",
              }}
            >
              <h3 style={{ color: "#222", fontWeight: "600" }}>{title}</h3>
              <p style={{ color: "#666", fontSize: "14px", marginTop: "5px" }}>
                {description}
              </p>
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
                zIndex: 9999,
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "80%",
                  maxWidth: "800px",
                }}
              >
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
                    cursor: "pointer",
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
