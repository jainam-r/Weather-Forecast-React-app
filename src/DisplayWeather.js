import React from "react";

function DisplayWeather(props) {
    const {data} = props
    console.log("haha")
    console.log(data.status)
    return (
        <div className="jumbotron">
            <h3>City Name: {data.list[0].name}</h3>
            <h4>Latitude : {data.list[0].coord['lat']}</h4>
            <h4>Longitude : {data.list[0].coord['lon']}</h4>
            <h4>Min Temperature : {data.list[0].main.temp_min}K</h4>
            <h4>Max Temperature : {data.list[0].main.temp_max}K</h4>
            <h4>Humidity : {data.list[0].main.humidity}%</h4>
            <h4>Wind speed : {data.list[0].wind.speed}km/hr</h4>

        </div>
    )
}

export default DisplayWeather;