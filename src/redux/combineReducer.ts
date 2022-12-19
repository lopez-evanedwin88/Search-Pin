import {combineReducers} from 'redux';
import mainReducer from './main/reducers';

export default combineReducers({
  mainReducer: mainReducer,
});
