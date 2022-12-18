import {TEST_ACTION} from './constants';

const initialState = {
  test: null,
};

const mainReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        test: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
