import React from "react";


export const Navigation = (props) => {
  return (
  <nav
  id="menu"
  className="navbar navbar-expand-lg sticky-top shadow-sm"
  style={{
    background: "linear-gradient(90deg, #ff7b00, #ff9b2f)", // gradient orange
  }}
>
  <div className="container-fluid px-4">
    {/* Logo */}
    <a className="navbar-brand d-flex align-items-center" href="#home">
      <img
        src="img/hanumanlogo.jpg"
        alt="Logo"
        style={{
          height: "55px",
          width: "55px",
          borderRadius: "50%",
          border: "2px solid white",
          objectFit: "cover",
          marginRight: "10px",
        }}
      />
      <span className="fw-bold text-white fs-4">Hanuman</span>
    </a>

    {/* Toggler */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Links */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {["About", "Services", "Portfolio", "Welcome", "Team", "Contact"].map(
          (item) => (
            <li className="nav-item" key={item}>
              <a
                className="nav-link text-white px-3 fw-semibold"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  </div>
</nav>


    // <nav id="menu" classNameName="navbar navbar-default navbar-fixed-top" style={{background:"green"}}>
    //   <div classNameName="container">
    //     <div classNameName="navbar-header" >
    //       <button
    //         type="button"
    //         classNameName="navbar-toggle collapsed"
    //         data-toggle="collapse"
    //         data-target="#bs-example-navbar-collapse-1"
    //       >
    //         {" "}
    //         <span classNameName="sr-only">Toggle navigation</span>{" "}
    //         <span classNameName="icon-bar"></span>{" "}
    //         <span classNameName="icon-bar"></span>{" "}
    //         <span classNameName="icon-bar"></span>{" "}
    //       </button>
    //       <a classNameName="navbar-brand page-scroll" href="#page-top">
    //         React Landing Page
    //       </a>{" "}
    //     </div>

    //     <div
    //       classNameName="collapse navbar-collapse"
    //       id="bs-example-navbar-collapse-1"
    //     >
    //       <ul classNameName="nav navbar-nav navbar-right">
    //         <li>
    //           <a href="#features" classNameName="page-scroll">
    //             portfolio
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#about" classNameName="page-scroll">
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#services" classNameName="page-scroll">
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#portfolio" classNameName="page-scroll">
    //             Gallery
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#testimonials" classNameName="page-scroll">
    //             Welcome
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#team" classNameName="page-scroll">
    //             Team
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#contact" classNameName="page-scroll">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
