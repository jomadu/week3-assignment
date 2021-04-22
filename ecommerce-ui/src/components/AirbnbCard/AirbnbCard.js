import React from "react";
import PropTypes from "prop-types";
import "./AirbnbCard.css";
import Airbnbs from "../../_data/airbnbs.json";

function AirbnbCard({ idx }) {
  const airbnb = Airbnbs[idx];
  const { host, houseType, image, location, payment, rating, title } = airbnb;
  console.log(airbnb);
  return (
    <div className="AirbnbCard">
      <div className="AirbnbCardHeader">
        <p>{title}</p>
        <p>{houseType}</p>
      </div>
      <div className="AirbnbCardMedia">
        <img src={image} />
      </div>
      <div className="AirbnbCardRatingsReviews">
        <p>{rating.stars}</p>
        <p>{rating.reviews}</p>
      </div>
      <div className="AirbnbCardLocationPayment">
        <p>{location.city}</p>
        <p>{location.country}</p>
        <p>{payment.cost}</p>
        <p>{payment.description}</p>
      </div>
      <div className="AirbnbCardHost">
        <p>{host.name}</p>
        <p>{host.isSuperhost ? "SuperHost" : "Not SuperHost"}</p>
      </div>
    </div>
  );
}

AirbnbCard.propTypes = {
  idx: PropTypes.number,
};

export default AirbnbCard;
