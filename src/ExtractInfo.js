// import Try2 from './Try2';
import React,{useState} from 'react';
import DisplayWeather from './DisplayWeather';

function ExtractInfo () {
    const[city,setCity] = useState('')
    const[man,setMan] = useState([])
    async function Tryy(e) {
        e.preventDefault();      
          const url = "https://community-open-weather-map.p.rapidapi.com/find?q=" + city
          //let url = urll + city
          const data = await fetch(url, {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "588b3553b8msh63b2ccec6fda2f8p1c97a9jsn7a9f8cee1765",
              "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
          })
          .then(response =>response.json())
          .then(data=>data)
          setMan(data)
          console.log(data)
          console.log(man)
          }
    return (
        <div className="container-fluid" id="inp">
            <form className="form-inline">
                {/* <label htmlFor="formGroupExampleInput" className="col-sm-2 col-form-label">City </label> */}
                <div className="form-group">
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="City Name" value={city} onChange={(e)=>setCity(e.target.value)}/>
                </div>
                <button className="btn btn-primary" onClick={e=>Tryy(e)}>submit</button>
            </form>
            {man.cod === '200' ? (
                <div>
                <h3>Weather Data</h3>
                <DisplayWeather data={man} />
                 {/* <h3>{man[0].name} temperature is {man[0].main.temp} but feels like {man[0].main.feels_like} </h3> */}
                 </div>
            ): (
                <h3>Submit a city name</h3>
            )}
           
        </div>
    )
} 
export default ExtractInfo;