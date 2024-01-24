import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCoins } from "./dashboardSlice";
import { socket } from "../../api/binance-websocket"; // Import the socket directly

const Dashboard = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.dashboard.coins);

  useEffect(() => {
    // Fetch initial BTCUSDT data and set up WebSocket connection
    const url = `https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCoins(data));
      })
      .catch((error) => console.error("Error:", error));

    // The WebSocket connection is already set up in binance-websocket.js
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
