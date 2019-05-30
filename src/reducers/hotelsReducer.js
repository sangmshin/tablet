import {
  SEARCH_HOTELS_REQUEST,
  SEARCH_HOTELS_SUCCESS,
  SEARCH_HOTELS_FAILURE,
  SEARCH_HOTELS_CANCEL,
  BOOKMARK_HOTEL,
  UNBOOKMARK_HOTEL,
  ADD_FILTER,
  REMOVE_FILTER,
} from 'actions/actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  cancel: false
};

export default function hotelsReducer(state = initialState, { type, payload }) {
  switch(type) {
    case SEARCH_HOTELS_REQUEST:

      return {
        isLoading: true,
        error: null,
        cancel: false
      };

    case SEARCH_HOTELS_SUCCESS:

      return {
        isLoading: false,
        data: payload,
        filteredItem: []
      };

    case SEARCH_HOTELS_FAILURE:

      return {
        isLoading: false,
        error: payload,
      };

    case SEARCH_HOTELS_CANCEL:

      return {
        data: state.data,
        filteredItem: state.filteredItem,
        cancel: true
      };
    
    case BOOKMARK_HOTEL:

      state.data.hotels.find(({ _id }) => _id === payload )._source.bookmarked = true;

      return {
        isLoading: false,
        data: state.data,
        filteredItem: state.filteredItem
      };

    case UNBOOKMARK_HOTEL:

      state.data.hotels.find(({ _id }) => _id === payload )._source.bookmarked = false;

      return {
        isLoading: false,
        data: state.data,
        filteredItem: state.filteredItem
      };

    case ADD_FILTER:
      
      state.filteredItem.push(payload)

      for( let payload of state.filteredItem ){

        state.data.hotels
        .filter(({ _source }) => Object.values(_source.criteria).includes(payload))
        .map( hotel => hotel.filtered = true)

      }

      return {
        isLoading: false,
        data: state.data,
        filteredItem: state.filteredItem
      };

    case REMOVE_FILTER:

      state.data.hotels
      .filter(({ _source }) => Object.values(_source.criteria).includes(payload))
      .map( hotel => hotel.filtered = false)

      state.filteredItem.splice([state.filteredItem.indexOf(payload)], 1)

      for( let payload of state.filteredItem ){

        state.data.hotels
        .filter(({ _source }) => Object.values(_source.criteria).includes(payload))
        .map( hotel => hotel.filtered = true)

      }

      return {
        isLoading: false,
        data: state.data,
        filteredItem: state.filteredItem
      };

    default:

      return state;
  }
}