import React from "react";
import PropTypes from "prop-types";
import Airbnbs from "../../_data/airbnbs.json";
import styled from "styled-components";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiStar } from "react-icons/bi";

const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: salmon;
  height: 500px;
  margin: 10px 0px 10px 0px;
  border-radius: 15px;
  overflow: hidden;
`;
const CardMedia = styled.div`
  width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 10px;
  }
`;
const CardContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 15px;
  flex-grow: 2;
`;

const CardHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  height: 150px;
`;

const CardHeaderText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const CardDescription = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const CardFooter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const CardFooterPayment = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const StyledSvg = styled.div`
  svg {
    fill: ${(props) => props.color};
  }
`;

function AirbnbCard({ idx, onLikeClicked, liked }) {
  const airbnb = Airbnbs[idx];
  const { host, houseType, image, location, payment, rating, title } = airbnb;
  return (
    <Card>
      <CardMedia>
        <img src={image} alt={image} />
      </CardMedia>
      <CardContent>
        <CardHeader>
          <CardHeaderText>
            <div>
              {houseType} in {location.city},{location.country}
            </div>
            <div>{title}</div>
          </CardHeaderText>
          <StyledSvg onClick={onLikeClicked} color={"black"}>
            {liked ? <AiFillHeart size={40} /> : <AiOutlineHeart size={40} />}
          </StyledSvg>
        </CardHeader>
        <CardDescription>
          <div>
            {host.name}
            {host.isSuperhost ? " - SuperHost" : ""}
          </div>
        </CardDescription>
        <CardFooter>
          <div>
            <BiStar /> {rating.stars} ({rating.reviews} reviews)
          </div>
          <CardFooterPayment>
            <div>${payment.cost} / night</div>
            {payment.description === "" ? null : (
              <div>{payment.description}</div>
            )}
          </CardFooterPayment>
        </CardFooter>
      </CardContent>
    </Card>
  );
}

AirbnbCard.propTypes = {
  idx: PropTypes.number,
  onLikeClicked: PropTypes.func,
  liked: PropTypes.bool,
};

export default AirbnbCard;
