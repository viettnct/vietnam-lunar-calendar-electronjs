import { createStore, Store } from 'redux'
import reducer from '../reducers/reducer';
export const store = createStore(reducer);