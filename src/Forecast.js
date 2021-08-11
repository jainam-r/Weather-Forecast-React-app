import React,{useEffect, useState} from "react";

function GetForecast(cont) {
  let [man,setMan] = useState({})
  const url = "https://community-open-weather-map.p.rapidapi.com/find?q="+cont
  useEffect(()=>{
    fetch(url, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "588b3553b8msh63b2ccec6fda2f8p1c97a9jsn7a9f8cee1765",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
      }
    })
        .then(response =>response.json()).then(data=>setMan(data['list']))
        .catch(err => {
          console.error(err);
        })
  })
 
    console.log(man)
}

const Forecast = () => {

  const states = ['london','mumbai','new york','lahore','bangalore']
  return (
      <div className="container-fluid">
      <div className="page-header bg-info" id="heading"> Weather Forecast </div>
      <div className="col-sm-4" id="country-list">
      Select a City : 
      {states.map((cont) => {
        return (
            <div>
            <button className="btn btn-info" style={{margin: "5px"}} onClick={()=>GetForecast(cont)}>{cont}</button>
            </div>
        )
      })} </div>
      <div className="col-sm-4">
          <h3>man[0]['id']</h3>
          <h4>{}</h4>
      </div>
      </div>
  )
}
export default Forecast;
