import { updateCoin } from "../features/dashboard/dashboardSlice";

export const socket = new WebSocket(
  "wss://stream.binance.com:9443/ws/btcusdt@trade@1000ms"
);

export const getSocketByCurrency = (currency, dispatch) => {
  const socket = new WebSocket(
    `wss://stream.binance.com:9443/ws/${currency}@ticker`
  );

  socket.onopen = () => {
    console.log(`WebSocket for ${currency} opened`);
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(`Received data for ${currency}:`, data);
    dispatch(updateCoin({ s: currency, p: data.p }));
  };

  socket.onclose = () => {
    console.log(`WebSocket for ${currency} closed`);
  };

  return socket;
};
