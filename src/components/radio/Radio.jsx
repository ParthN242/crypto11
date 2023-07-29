import React from "react";

const Radio = ({ currency, setCurrency }) => {
  return (
    <div className="radio" style={style}>
      <input
        style={{ marginLeft: "10px" }}
        type="radio"
        value={"inr"}
        id="inr"
        name="currency"
        defaultChecked
        onChange={(e) => setCurrency(e.target.value)}
      />
      <label htmlFor="inr">INR</label>
      <input
        style={{ marginLeft: "10px" }}
        type="radio"
        value={"usd"}
        id="usd"
        name="currency"
        onChange={(e) => setCurrency(e.target.value)}
      />
      <label htmlFor="usd">USD</label>
      <input
        style={{ marginLeft: "10px" }}
        type="radio"
        value={"eur"}
        id="eur"
        name="currency"
        onChange={(e) => setCurrency(e.target.value)}
      />
      <label htmlFor="eur">EUR</label>
    </div>
  );
};

const style = {
  margin: "1rem",
  display: "flex",
  gap: "5px",
};

export default Radio;
