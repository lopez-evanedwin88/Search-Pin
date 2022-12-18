import {TEST_ACTION} from './constants';

export const testFunction = (test: any) => {
  return {
    type: TEST_ACTION,
    payload: test,
  };
};
