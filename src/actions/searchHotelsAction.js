import axios from 'axios';
import {
  SEARCH_HOTELS_REQUEST,
  SEARCH_HOTELS_SUCCESS,
  SEARCH_HOTELS_FAILURE
} from './actionTypes';

function fetchhHotels(location) {
  return axios.get(`https://www.tablethotels.com/_api/term_search?query=${location}&arrDate=2019-09-25&depDate=2019-09-26&nA=1&nC=0&nR=1&lang=en`);
}


export function searchHotels(location) {
  return dispatch => {
    dispatch({ type: SEARCH_HOTELS_REQUEST });
    return fetchhHotels(location)
      .then(res => dispatch({ 
        type: SEARCH_HOTELS_SUCCESS, 
        payload: res.data 
      }))
      .catch(err => dispatch({ 
        type: SEARCH_HOTELS_FAILURE, 
        payload: err
      }));
  };
}
