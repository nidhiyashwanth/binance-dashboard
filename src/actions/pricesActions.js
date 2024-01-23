import axios from 'axios';
import { FETCH_PRICES } from './types';

export const fetchPrices = () => dispatch => {
  axios.get('https://api.binance.com/api/v3/ticker/price')
    .then(res => {
      dispatch({
        type: FETCH_PRICES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};