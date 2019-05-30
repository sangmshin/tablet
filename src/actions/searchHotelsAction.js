import axios from 'axios';
import {
  SEARCH_HOTELS_REQUEST,
  SEARCH_HOTELS_SUCCESS,
  SEARCH_HOTELS_FAILURE,
  SEARCH_HOTELS_CANCEL
} from './actionTypes';


let source = axios.CancelToken.source();

const fetchhHotels = async (location, dispatch) => {
  
  location === 'cancel' && source.cancel()

  try {
    const res = await axios.get(`https://www.tablethotels.com/_api/term_search?query=${location}&arrDate=2019-09-25&depDate=2019-09-26&nA=1&nC=0&nR=1&lang=en`, {
      cancelToken: source.token
    });
    
    dispatch({ 
      type: SEARCH_HOTELS_SUCCESS, 
      payload: res.data 
    })

  } catch (err) {
    axios.isCancel(err)
    ? source = axios.CancelToken.source()
    : dispatch({ 
        type: SEARCH_HOTELS_FAILURE, 
        payload: err
      })
  }
};


export const searchHotels = location => {
  return dispatch => {
    dispatch({ type: SEARCH_HOTELS_REQUEST });
    fetchhHotels(location, dispatch)
  };
}

export const cancelSearch = () => {
  return dispatch => {
    dispatch({ type: SEARCH_HOTELS_CANCEL });
    fetchhHotels('cancel')
  };
}
  
