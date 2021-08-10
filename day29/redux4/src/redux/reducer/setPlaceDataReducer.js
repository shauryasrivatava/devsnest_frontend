const placeDataReducer = (state={},action)=>
{
    if (action.type==='SET_PLACE_DATA'){
        return action.payload
    }
    return state
}

export default placeDataReducer