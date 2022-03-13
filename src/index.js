import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { Suspense, lazy } from 'react';

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(reducers)}>
    <Suspense fallback={<div>Loading website...</div>}>
      <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


