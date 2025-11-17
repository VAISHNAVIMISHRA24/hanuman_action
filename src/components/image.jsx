import React, { useState } from "react";

export const Image = ({ title, largeImage, smallImage, video, description }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClose = () => setShowVideo(false);

  // Convert YouTube Shorts or normal URLs to embed format
  const getEmbedUrl = (url) => {
    if (!url) return null;
    const videoIdMatch = url.match(/(?:shorts\/|v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  const embedUrl = getEmbedUrl(video);

  return (
    <div>
      {!video ? (
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
            <img
              src={smallImage}
              alt={title}
              className="img-responsive"
              style={{
                width: "100%",
                borderRadius: "20px",
                height:"250px",
                transition: "transform 0.5s ease",
              }}
            />
            <div
              className="play-overlay"
              style={{
                position: "absolute",
                top: "45%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "#ff6a00",
                borderRadius: "50%",
                padding: "15px",
                transition: "all 0.3s ease",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              >
                ▶
              </span>
            </div>

            <div className="gallary-caption">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </div>

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
                  src={embedUrl}
                  width="100%"
                  height="450"
                  allowFullScreen 
                  allow="autoplay; encrypted-media"
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
