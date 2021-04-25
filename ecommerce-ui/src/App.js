import "./App.css";
import AirbnbCard from "./components/AirbnbCard/AirbnbCard";
import Airbnbs from "./_data/airbnbs.json";
import styled from "styled-components";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const Layout = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const CardLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 10px;
  width: 50%;
`;

const LikedLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 10px;
  width: 50%;
`;

const LikedListItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
`;

function App() {
  const [likedIndicies, setLikedIndicies] = useState([]);

  const onLikeClickedHandler = (idx) => {
    return () => {
      if (likedIndicies.includes(idx)) {
        setLikedIndicies([
          ...likedIndicies.filter((likedIdx) => idx !== likedIdx),
        ]);
      } else {
        setLikedIndicies([...likedIndicies, idx]);
      }
    };
  };

  const cards = Airbnbs.map((_, idx) => (
    <AirbnbCard
      idx={idx}
      key={idx}
      onLikeClicked={onLikeClickedHandler(idx)}
      liked={likedIndicies.includes(idx)}
    />
  ));

  const liked = likedIndicies.map((idx) => {
    const airbnb = Airbnbs[idx];

    return (
      <li key={idx}>
        <LikedListItem>
          {airbnb.title}
          <AiFillDelete size={20} onClick={onLikeClickedHandler(idx)} />
        </LikedListItem>
      </li>
    );
  });

  const totalCost = likedIndicies
    .map((idx) => Airbnbs[idx].payment.cost)
    .reduce((a, b) => a + b, 0);

  return (
    <Layout>
      <CardLayout>{cards}</CardLayout>
      <LikedLayout>
        <h3>Shopping Cart:</h3>
        <ul>{liked}</ul>
        <p>Total Cost: ${totalCost} / night</p>
      </LikedLayout>
    </Layout>
  );
}

export default App;
