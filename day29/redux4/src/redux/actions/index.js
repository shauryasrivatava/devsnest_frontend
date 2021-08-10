const updatePlace=(place)=>{
    return{
        type:'SET_PLACE',
        payload:place
    }
}
 const updatePlaceData =(place) =>{
    return (dispatch)=>{
    fetch(`https://api.weatherapi.com/v1/current.json?key=a1089418425d486c9a0185247210908&q=${place}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      dispatch(
        {
            type:'SET_PLACE_DATA',
            payload:data,
          }
      )
    })
    }
}
 export {updatePlace, updatePlaceData}
