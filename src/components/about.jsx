export const About = (props) => {
  return (
    <div id="about" className="py-5">
      <div className="container-fluid px-3 px-md-5">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
            <img
              src="img/front1.webp"
              className="img-fluid w-100 rounded shadow-sm"
              alt="About Hanuman Action Art"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          {/* Right Text */}
          <div className="col-12 col-md-6">
            <div className="">
              <h2 className="mb-3">About Us</h2>
              <p>{props.data ? props.data.paragraph1 : "Loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "Loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
