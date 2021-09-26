import { reducer } from './reducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  reducer,
  composeWithDevTools(),
  // applyMiddleware(...middleware),
  // other store enhancers if any
);
