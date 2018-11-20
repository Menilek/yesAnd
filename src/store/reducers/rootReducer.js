import authReducer from './authReducer';
import gameReducer from './gameReducer';
import { combineReducers } from'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    game: gameReducer,
    firestore: firestoreReducer
})

export default rootReducer;