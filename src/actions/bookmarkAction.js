import {
  BOOKMARK_HOTEL,
  UNBOOKMARK_HOTEL
} from './actionTypes';

export function bookmarkAction(id) {
  return {
    type: BOOKMARK_HOTEL,
    payload: id
  };
}

export function unbookmarkAction(id) {
  return {
    type: UNBOOKMARK_HOTEL,
    payload: id
  };
}