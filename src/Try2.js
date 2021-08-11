import { useState } from "react"
async function Try2(city) {
    //const [cont,setCont] = useState('mumbai')
      const[man,setMan] = useState([])
      let urll = "https://community-open-weather-map.p.rapidapi.com/find?q="
      let url = urll + city
      await fetch(url, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "588b3553b8msh63b2ccec6fda2f8p1c97a9jsn7a9f8cee1765",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
      })
      .then(response =>{response.json()}).then(data=>{setMan(data)
    console.log(data)})
      .catch(err => {
        console.error(err);
      })
        return man
}

export default Try2;