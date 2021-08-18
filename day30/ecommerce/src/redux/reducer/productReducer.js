import { ActionTypes } from "../constants/ActionTypes"

const initialState={
    products:[
        {
            id:1,
            title: "Dipesh",
            category: "Programmer",
        },
    ],
};
export const productReducer = (state=initialState, action)=>{
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}