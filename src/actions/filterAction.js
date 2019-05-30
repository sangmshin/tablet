import {
  ADD_FILTER,
  REMOVE_FILTER
} from './actionTypes';

export const addFilterAction = type => ({ type: ADD_FILTER, payload: type })

export const removeFilterAction = type => ({ type: REMOVE_FILTER, payload: type })