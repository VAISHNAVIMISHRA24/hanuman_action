import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
   <div id="portfolio" className="text-center">
  <div className="container">
    <div className="section-title">
      <h2>Gallery</h2>
      <p>
        Explore our latest work — from creative shoots and documentaries to product showcases, each project reflects our passion and expertise.
      </p>
    </div>
    <div className="row">
      {props.data
        ? props.data.map((d, i) => (
            <div
              key={`${d.title}-${i}`}
              className="col-sm-6 col-md-4 col-lg-4 mb-4 p-4  " style={{borderRadius:"50"} }
            >
              <Image
                title={d.title}
                largeImage={d.largeImage}
                smallImage={d.smallImage}
                video={d.video}
                description={d.description}
              />
            </div>
          ))
        : "Loading..."}
    </div>
  </div>
</div>

  );
};
