import {all} from 'redux-saga/effects';
import {mainWatcherSaga} from './main/saga';

export function* rootSaga() {
  yield all([mainWatcherSaga()]);
}
