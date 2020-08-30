import { combineReducers } from 'redux';
import {Jobs, AllJobs} from './Jobs';

const rootReducer = combineReducers({ Jobs, AllJobs });

export default rootReducer;