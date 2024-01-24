import { updateCoin } from "../features/dashboard/dashboardSlice";
import store from "../app/store"; // Import the store to get the dispatch function

export const socket = new WebSocket(
  "wss://stream.binance.com:9443/ws/btcusdt@ticker@1000ms"
);

socket.onopen = () => {
  console.log(`WebSocket for btcusdt opened`);
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(`Received data for btcusdt:`, data);
  store.dispatch(updateCoin({ s: 'BTCUSDT', p: data.w }));
};

socket.onclose = () => {
  console.log(`WebSocket for btcusdt closed`);
};
