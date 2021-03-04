import React from "react";
import "./style.css";

import Col from "../Col";

function Footer() {
  return (
    <footer className="footer bg-info">

      <div className="d-flex align-items-center">
      <Col size="md-4">
        <a className="foot" rel="noreferrer" href=""><span>Phone: </span>917-600-9651</a>
        <a className="foot" rel="noreferrer" href=""><span>Email: </span>rvasquezhr@email.com</a>
        <a className="foot" rel="noreferrer" href=""><span>city: </span>Orlando, Fl</a>
      </Col>
      <Col size="md-4">
        <h6 >Social Media</h6>
        <a href="https://www.facebook.com" rel="noreferrer" target="_blank"><i id="social-fb"
            className="fa fa-facebook-square fa-2x social"></i></a>
        <a href="https://twitter.com/" rel="noreferrer" target="_blank"><i className="fa fa-twitter-square fa-2x social social-tw"></i></a>
        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank"><i id="social-ig"
            className="fa fa-instagram fa-2x social"></i></a>
        <a href="mailto:rvasquez1@gmail.com" rel="noreferrer" target="_blank"><i id="social-em"
            className="fa fa-envelope-square fa-2x social"></i></a>
            <a href="https://www.linkedin.com/in/iamrafa/" rel="noreferrer" target="_blank"><i
              className="fab fa-linkedin-in fa-2x social social-tw"></i></a>
            <p className="small">©Copyright 2020</p>
          </Col>
          <Col size="md-4">
            <a className="" rel="noreferrer" href="./index.html"
            ><img
              src="./img/s2klogo2.png"
              alt="logo of s2k"
              width="120"
              height="50"
              className="img-responsive"
          /></a>
          </Col>
          </div>

    </footer>
  );
}

export default Footer;
