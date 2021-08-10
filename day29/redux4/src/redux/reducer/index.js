import {combineReducers} from 'redux';
import placeReducer from './setPlaceReducer';
import updatePlaceData from './setPlaceDataReducer';

const rootReducer = combineReducers({
    place:placeReducer,
    placeData: updatePlaceData
});

export default rootReducer;