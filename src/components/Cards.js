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
          <ul className="cards__items">
            <CardItems
              src="images/img-sup.jpg"
              text="Call us and just relax. we provide quickly and reliable IT Support to individuals and companies"
              label="IT Technical Support"
              path="/services" 
            />
             <CardItems
              src="images/img-big.jpg"
              text="We have the organizations to deal with their data and provide to them insights that help to make good decisions for their businesses"
              label="Big Data"
              path="/services" 
            />
            <CardItems
              src="images/img-sta.jpg"
              text="We help your staff to meet the needed competences to grow your businesses by traiing them"
              label="Trainings"
              path="/services" 
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
