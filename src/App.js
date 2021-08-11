import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React,{useEffect, useState} from "react";



function App() {
  const [cont,setCont] = useState('mumbai')
  const FetchData = () => {
    const[man,setMan] = useState([])
    let urll = "https://community-open-weather-map.p.rapidapi.com/find?q="
    let url = urll + cont
    useEffect(() => {
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
      });
      },[url])
      console.log(man)
      //let a = man[0].main.temp
      //console.log(a)
  }
  
  /*let temp = 'london'
  let urll = "https://community-open-weather-map.p.rapidapi.com/find?q="
  let url = urll + temp
  useEffect(() => {
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
    });
    },[url,temp])
    console.log(man)
    let a = man[0].main.temp
    console.log(a)*/
    

  return (
    <div>
      {/* <h3>Temperature : {a['main']['temp']}</h3> */}
      <h3>Temperature : a['main']['temp']</h3>
      <form>
        <label>
        Input
          <input type="text" name="country" value={cont} onChange={(e)=>setCont(e.target.value)}></input>
        </label>
        <input type="submit" onClick={(e)=>{
          e.preventDefault()
          console.log(cont)
          FetchData()
         // e.preventDefault()
        }}/>
      </form>
    </div>
  );
}

export default App;
