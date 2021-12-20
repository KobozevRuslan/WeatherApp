import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/thunk/index.js';

import Preload from './components/preload/Preload.jsx';

const App = lazy(() => import('./components/App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Preload />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
