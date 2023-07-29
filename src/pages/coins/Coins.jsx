import React, { useEffect, useState } from "react";

import axios from "axios";
import Error from "../../components/errorCom/Error";
import Loading from "../../components/loading/Loading";
import { server } from "../../App";

import "./coins.scss";
import Radio from "../../components/radio/Radio";
import { Link } from "react-router-dom";

const Coins = () => {
  const [conis, setConis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const btns = new Array(132).fill(1);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchExchange = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setConis(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchExchange();
  }, [currency, page]);

  if (error) return <Error message={"Error While Fetching Coins Data"} />;

  return (
    <div className="conisContainer">
      <Radio currency={currency} setCurrency={setCurrency} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="conisCardContainer">
            {conis.map((i) => (
              <Link to={`/coin/${i.id}`} key={i.id} className="coinsCard">
                <img src={i.image} alt="" />
                <h3>{i.symbol}</h3>
                <p>{i.name}</p>
                <p>
                  {currencySymbol}
                  {i.current_price}
                </p>
              </Link>
            ))}
          </div>
          <div className="btnContainer">
            {btns.map((item, index) => (
              <button
                key={index}
                className="btn"
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Coins;
