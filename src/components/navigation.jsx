import React from "react";

const mystyle = {
      color:"white",
      // padding: "10px",
      // #d99348ff

    };

export const Navigation = (props) => {
  return (
   <nav id="menu" className="navbar navbar-expand-lg  sticky-top" style={{background:"#d38a3bff"}} >
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <img src="img/hanumanlogo.jpg" className="" style={{height:"60px", width:"70px"}} />
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active page-scroll" style={mystyle} href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active page-scroll" style={mystyle} href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active page-scroll" style={mystyle} href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active page-scroll" style={mystyle} href="#testimonials">Welcome</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active page-scroll" style={mystyle} href="#team">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active page-scroll" style={mystyle} href="#contact">Contact</a>
        </li>
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
