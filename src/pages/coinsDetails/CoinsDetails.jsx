import React, { useEffect, useState } from "react";
import "./coinsDetails.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../../App";
import Radio from "../../components/radio/Radio";
import Loading from "../../components/loading/Loading";
import Chart from "../../components/chart/Chart";

const CoinsDetails = () => {
  const param = useParams();
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchExchange = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${server}/coins/${param.id}`);
        const { data: chartData } = await axios.get(
          `${server}/coins/${param.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        console.log(data);
        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchExchange();
  }, [currency, days, param.id]);

  return (
    <>
      {" "}
      <div className="coinsDetails">
        <Radio currency={currency} setCurrency={setCurrency} />
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="chart">
              <Chart arr={chartArray} currency={currencySymbol} days={days} />
            </div>
            <div className="coinInfo">
              <p className="date">
                Last Updated On{" "}
                {Date(coin.market_data.last_updated).split("G")[0]}
              </p>
              <img src={coin.image.large} alt="" />
              <div className="coinDetail">
                <p>{coin.name}</p>
                <h2>
                  {currencySymbol}
                  {coin.market_data.current_price[currency]}
                </h2>
                <div>
                  <div
                    className={
                      coin.market_data.price_change_percentage_24h > 0
                        ? "badge increase"
                        : "badge decrease"
                    }
                  ></div>{" "}
                  <span>{coin.market_data.price_change_percentage_24h}%</span>
                </div>
              </div>
              <div className="coinValuse">
                <div className="ranke">
                  <span>#{coin.market_data.market_cap_rank}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={5000}
                  value={coin.market_data.current_price[currency]}
                />
                <div className="rangeValue">
                  <div className="low">
                    {currencySymbol}
                    {coin.market_data.low_24h[currency]}
                  </div>
                  <div className="center">24H Range</div>
                  <div className="high">
                    {currencySymbol}
                    {coin.market_data.high_24h[currency]}
                  </div>
                </div>
                <Item
                  title={"Max Supply"}
                  value={coin.market_data.max_supply}
                />
                <Item
                  title={"Circulating Supply"}
                  value={coin.market_data.circulating_supply}
                />
                <Item
                  title={"Market Cap"}
                  value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
                />
                <Item
                  title={"All Time Low"}
                  value={`${currencySymbol}${coin.market_data.atl[currency]}`}
                />
                <Item
                  title={"All Time High"}
                  value={`${currencySymbol}${coin.market_data.ath[currency]}`}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

const Item = ({ title, value }) => {
  return (
    <div className="item">
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
};

export default CoinsDetails;
