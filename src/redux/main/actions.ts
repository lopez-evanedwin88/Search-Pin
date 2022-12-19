import {ActionType} from './constants';

export const placeRequest = (params: any) => {
  return {
    type: ActionType.PLACE_REQUEST,
    payload: params,
  };
};

export const placeResolve = (params: any) => {
  return {
    type: ActionType.PLACE_RESOLVE,
    payload: params,
  };
};

export const placeReject = (params: any) => {
  return {
    type: ActionType.PLACE_REJECT,
    payload: params,
  };
};
