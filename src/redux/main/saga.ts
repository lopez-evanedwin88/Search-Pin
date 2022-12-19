import {call, takeLatest} from '@redux-saga/core/effects';
import {put} from 'redux-saga/effects';
import {getCities} from '../../service/PlaceService';
import {placeReject, placeResolve} from './actions';
import {ActionType} from './constants';

export function* mainWatcherSaga() {
  yield takeLatest(ActionType.PLACE_REQUEST, mainWorkerSaga);
}

function* mainWorkerSaga(action: any): any {
  try {
    let response = yield call(getCities, {name: action.payload.name});
    if (response.problem) {
      yield put(placeReject(response.data.error));
    } else {
      yield put(placeResolve(response.data));
    }
  } catch (error: any) {
    yield put(placeReject(error.message));
  }
}
