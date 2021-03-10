import React from "react";
import "./style.css";
// import about from "../../aboutus.json";

function AboutCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Occupation:</strong> {props.occupation}
            </li>
            <li>
              <strong>Location:</strong> {props.location}
            </li>
            <li>
              <strong>Hobbies:</strong> {props.hobbies}
            </li>
          </ul>
        </div>
        
      </div>
    );
  }
  
  export default AboutCard;