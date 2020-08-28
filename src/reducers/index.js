import { combineReducers } from 'redux';
import Job from './Job';
import Category from './Category';

const rootReducer = combineReducers({ Job, Category });

export default rootReducer;