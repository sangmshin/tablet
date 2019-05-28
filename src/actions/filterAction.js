import {
  ADD_FILTER,
  REMOVE_FILTER
} from './actionTypes';

export function addFilterAction(type) {
  return {
    type: ADD_FILTER,
    payload: type
  };
}

export function removeFilterAction(type) {
  return {
    type: REMOVE_FILTER,
    payload: type
  };
}