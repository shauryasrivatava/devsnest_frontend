import React from 'react';
import {updatePlace, updatePlaceData} from '../redux/actions/index'
import { useDispatch ,useSelector } from 'react-redux';

const Form = ()=>{
  const place = useSelector((state)=>state.place)
  const dispatch= useDispatch()  
  return(
        <>
        <h1>Weather Card web-app</h1>
      <input type="text" 
      value={place}
      placeholder="delhi"
      onChange={(e)=>{
      dispatch(updatePlace(e.target.value))
        }} 
      />
      <button 
      onClick={dispatch(updatePlaceData(place))}
      >search</button>
        </>
    )
}

export default Form;