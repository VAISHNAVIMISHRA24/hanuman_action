import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { requestedUrl } from "../utils";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  // const [{ name, email, message }, setState] = useState(initialState);
  const [contact, setContact] = useState(initialState);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };
  // const clearState = () => setState({ ...initialState });


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, message);

    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    // const res = await axios.post(requestedUrl + "/contactus", contact)
    // console.log(res)
    emailjs
      .sendForm("service_r9ezjur", "template_nijlmry", e.target, "rHXJXHtx8kSf5a9b6")
      .then(
        (result) => {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          console.log(result.text);
          setContact(initialState);
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong, please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      );
  };
  return (
    <><div id="contact" style={{ background: "black" }}>
      <div className="container">
        <div className="row">
          {/* Left side form */}
          <div className="col-md-8">
            <div className="section-title">
              <h2>Get In Touch</h2>
              <p>
                Please fill out the form below to send us an email and we will get
                back to you as soon as possible.
              </p>
            </div>
            <form name="sentMessage" validate onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={contact.name}
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={contact.email}
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  value={contact.message}
                  required
                  onChange={handleChange}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* Right side contact info */}
          <div className="col-md-4 contact-info">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="col-md-12">
          <div className="social">
            <ul>
              <li>
                <a href={props.data ? props.data.facebook : "/"}>
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.twitter : "/"}>
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.youtube : "/"}>
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 Hanuman Art. Design by{" "}
          </p>
        </div>
      </div>
    </>

  );
};
