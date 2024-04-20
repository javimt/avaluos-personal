import { applyMiddleware, legacy_createStore } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from '../reducer/rootReducer';

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))