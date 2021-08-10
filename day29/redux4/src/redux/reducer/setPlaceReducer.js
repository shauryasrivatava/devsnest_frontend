// const initial={}
const placeReducer= (state="" , action)=>{
    // switch(action.type){
    //     case 'SET_PLACE':
    //         return action.payload 
    //     case 'SET_PLACE_UPDATE':
    //         return action.payload
    //     default :
    //         return state
    // }
    if (action.type === "SET_PLACE"){
        return action.payload;
    }
    return state;
}

export default placeReducer;