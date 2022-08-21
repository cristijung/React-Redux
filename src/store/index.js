import { configureStore } from 'redux';
import { Reducers } from '../reducers';

export const Store = configureStore(Reducers);