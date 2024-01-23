import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPrices } from '../actions/pricesActions';

const Dashboard = ({ fetchPrices, prices }) => {
  useEffect(() => {
    fetchPrices();
  }, [fetchPrices]);

  return (
    <div>
      <h1>Binance Dashboard</h1>
      <ul>
        {prices.map(price => (
          <li key={price.symbol}>
            {price.symbol}: {price.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  prices: state.prices.items
});

export default connect(mapStateToProps, { fetchPrices })(Dashboard);