import React from "react";

function DisplayWeather(props) {
    const {data} = props
    console.log("haha")
    console.log(data.status)
    return (
        <div>
            <h3>Country Name: {data.list[0].name}</h3>
            <h4>Latitude : {data.list[0].coord['lat']}</h4>
            <h4>Longitude : {data.list[0].coord['lon']}</h4>
        </div>
    )
}

export default DisplayWeather;