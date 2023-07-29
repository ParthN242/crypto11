import axios from "axios";
import Error from "../../components/errorCom/Error";
import Loading from "../../components/loading/Loading";

import { server } from "../../App";

import "./exchanges.scss";

import React, { useEffect, useState } from "react";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchExchange();
  }, []);

  if (error) return <Error message={"Error While Fetching Exchages Data"} />;

  return (
    <div className="exchangesContainer">
      {loading ? (
        <Loading />
      ) : (
        <>
          {exchanges.map((i) => (
            <a href={i.url} target="blanke" key={i.id} className="exchangeCard">
              <img src={i.image} alt="" />
              <h4>{i.trust_score_rank}</h4>
              <p>{i.name}</p>
            </a>
          ))}
        </>
      )}
    </div>
  );
};

export default Exchanges;
