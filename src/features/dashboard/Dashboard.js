import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCoins } from './dashboardSlice';
import { getSocketByCurrency } from '../../api/binance-websocket';

const Dashboard = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.dashboard.coins);

  useEffect(() => {
    const url = 'https://api.binance.com/api/v3/ticker/price';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const limitedData = data.slice(0, 50);
        dispatch(setCoins(limitedData));

        limitedData.forEach(coin => {
          getSocketByCurrency(coin.symbol, dispatch);
        });
      })
      .catch(error => console.error('Error:', error));
  }, [dispatch]);
  

  return (
    <div className=''>
      <h1 className='text-3xl text-center mx-5 font-bold my-5'>DashBoard</h1>
      <div>
        <h2 className='mb-4 text-xl md:text-2xl ml-3'>Coin Prices</h2>
        {coins.map((coin, index) => (
        <div className='flex mx-5' key={index}>
          <h2 className='mx-2'>{coin.symbol}</h2>
          <p className=''>{coin.price}</p>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default Dashboard;
