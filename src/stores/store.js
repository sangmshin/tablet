import { createStore, compose, applyMiddleware } from "redux";
import { persistState } from "redux-devtools";
import thunk from "redux-thunk";
import rootReducer from "reducers/rootReducer";

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return matches && matches.length > 0 ? matches[1] : null;
}

const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  persistState(getDebugSessionKey())
);


const initialState = {};

// INITIALIZE STORE
export const store = createStore(rootReducer, initialState, enhancer);
