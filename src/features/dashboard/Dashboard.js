import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCoins } from "./dashboardSlice";
import { getSocketByCurrency } from "../../api/binance-websocket";

const coinsToFetch = ["BTCUSDT", "ETHUSDT", "BNBUSDT"]; // Example array of coins
const Dashboard = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.dashboard.coins);

  useEffect(() => {
    coinsToFetch.forEach((symbol) => {
      const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          dispatch(setCoins(data));
          getSocketByCurrency(data.symbol, dispatch);
        })
        .catch((error) => console.error("Error:", error));
    });
  }, [dispatch]);

  return (
    <div className="">
      <h1 className="text-3xl text-center mx-5 font-bold my-5">DashBoard</h1>
      <div>
        <h2 className="mb-4 text-xl md:text-2xl ml-3">Coin Prices</h2>
        {coins.map((coin, index) => (
          <div className="flex mx-5" key={index}>
            <h2 className="mx-2">{coin.symbol}</h2>
            <p className="">{coin.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
