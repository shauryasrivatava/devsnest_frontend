import { useSelector } from "react-redux"

const Card =()=>{
    const placeData=useSelector(state=>state.placeData)
    return (
        <>
        {placeData.location ? 
          (
          <div className="card">
            <img src={placeData.current.condition.icon} alt="img" />
            <div className="temp">{placeData.current.temp_c}°</div>
            <div className="cityName">{placeData.location.name} </div>
            <div className="container">
              <div className="row">
                <div className="col">Wind Now <div className="data">{placeData.current.wind_kph} <span>Km/hr</span> </div></div>
                
                <div className="col">Humidity <div className="data">{placeData.current.humidity} <span>%</span></div></div>
                
                <div className="col">Precipitation <div className="data">{placeData.current.precip_in} <span>%</span></div></div>

              </div>
            </div>


         </div>
         )
          :(<h5>not found</h5>)}
        </>
    )
}
export default Card