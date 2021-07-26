import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React,{useEffect, useState} from "react";

function App() {
  let[man,setMan] = useState([])
  const url = "https://community-open-weather-map.p.rapidapi.com/find?q=london"
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
    console.log(man[0])

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
