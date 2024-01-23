import { updateCoin } from "../features/dashboard/dashboardSlice";

export const socket = new WebSocket(
  "wss://stream.binance.com:9443/ws/btcusdt@trade@1000ms"
);

// console.log(socket);

export const getSocketByCurrency = (currency, dispatch) => {
    const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${currency ? currency : 'ethusdt'}@depth@1000ms`);
  
    socket.onopen = () => {
      console.log(`WebSocket for ${currency} opened`);
    };
  
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(`Received data for ${currency}:`, data);
      dispatch(updateCoin({ symbol: currency, price: data.p }));
    };
  
    socket.onclose = () => {
      console.log(`WebSocket for ${currency} closed`);
    };
  
    return socket;
  };
  
export const getSocketByValue = (value) => {
  return value
    ? new WebSocket(`wss://stream.binance.com:9443/ws/${value}t@depth@1000ms`)
    : socket;
};
