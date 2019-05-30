import {
  BOOKMARK_HOTEL,
  UNBOOKMARK_HOTEL
} from './actionTypes';

export const bookmarkAction = id => ({ type: BOOKMARK_HOTEL, payload: id })

export const unbookmarkAction = id => ({ type: UNBOOKMARK_HOTEL, payload: id })