import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//redux
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'ducks/reducer';
import rootSaga from 'ducks/saga';
import { Provider } from 'react-redux';

//const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const makedStore = (init) =>{
  const store = createStore(
    rootReducer, 
    init, 
    devTools(
      applyMiddleware(sagaMiddleware),
    ),
  )
  sagaMiddleware.run(rootSaga);
  return store;
}

ReactDOM.render(
    <Provider store={makedStore()}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();