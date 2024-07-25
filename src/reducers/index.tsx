import todosReducer from './todos';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    todosReducer,
})

export type RootState = ReturnType<typeof allReducers>;
export default allReducers;