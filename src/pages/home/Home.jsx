import React from "react";

import imgBtc from "../../assets/btc.png";

import "./home.scss";

const Home = () => {
  return (
    <main className="home">
      <img src={imgBtc} alt="" />
      <h1>Xcrypto</h1>
    </main>
  );
};

export default Home;
