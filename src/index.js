import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { App } from 'containers';
import { store } from 'stores';
import { ErrorBoundary } from 'components/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);
