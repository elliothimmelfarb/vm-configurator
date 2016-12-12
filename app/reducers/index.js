// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import create from './CreateVM.reducer';
import view from './ViewVMs.reducer';

const rootReducer = combineReducers({
  routing,
  create,
  view,
});

export default rootReducer;
