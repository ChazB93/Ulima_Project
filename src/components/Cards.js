import React from "react";
import CardItems from "./CardItems";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Short list of what we do</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="images/img-coding.jpg"
              text="We develop outstanding and friendly use web application that help our customers to grow their business"
              label="Web-App Development"
              path="/services" 
            />
             <CardItems
              src="images/img-iot.jpg"
              text="We develop IoT solutions to bring added value into your daily life or activities"
              label="IoT Solutions"
              path="/services" 
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
