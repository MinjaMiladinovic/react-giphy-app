import { combineReducers } from 'redux';
import GiphyReducer from './giphy-reducer';

const rootReducer = combineReducers({
  myGif: GiphyReducer
});

export default rootReducer;