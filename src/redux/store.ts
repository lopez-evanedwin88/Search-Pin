import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import combineReducer from './combineReducer';
import {rootSaga} from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
