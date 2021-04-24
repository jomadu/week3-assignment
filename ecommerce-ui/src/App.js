import "./App.css";
import AirbnbCard from "./components/AirbnbCard/AirbnbCard";
import Airbnbs from "./_data/airbnbs.json";
import styled from "styled-components";
import { useState } from "react";

const Layout = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const CardLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

function App() {
  const [likedIndicies, setLikedIndicies] = useState([]);
  const indicies = [...Array(Airbnbs.length).keys()];

  const onLikeClickedHandler = (idx) => {
    return () => {
      if (likedIndicies.includes(idx)) {
        setLikedIndicies([
          ...likedIndicies.filter((likedIdx) => idx != likedIdx),
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

  const liked = Airbnbs.filter((_, idx) =>
    likedIndicies.includes(idx)
  ).map((airbnb) => <li>{airbnb.title}</li>);

  return (
    <Layout>
      <CardLayout>{cards}</CardLayout>
      <ul>{liked}</ul>
    </Layout>
  );
}

export default App;
