import {ActionType} from './constants';

const initialState = {
  places: [],
  placesError: null,
};

const mainReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.PLACE_REQUEST:
      return {
        ...state,
        placesError: null,
      };
    case ActionType.PLACE_RESOLVE:
      return {
        ...state,
        places: action.payload,
      };
    case ActionType.PLACE_REJECT:
      return {
        ...state,
        placesError: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
