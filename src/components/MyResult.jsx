import React, { useEffect, useState } from 'react'


export default function MyResult({lat, lon}) {

    const key = "d6af8bacc070870215579c0b8c5f867a"
    const [result, setResult]= useState([])
    const [update, setUpdate] = useState(false);

    useEffect(()=>{
        //icone
        //https://openweathermap.org/weather-conditions
        //https://openweathermap.org/img/wn/"+result.weather[0].icon+"@2x.png

        //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={key}
        //"https://api.openweathermap.org/data/2.5/weather?lat="+geo.lat+"&lon="+geo.lon+"&appid="+key
        //"https://api.openweathermap.org/data/2.5/weather?lat=&lon=-0.1276474&appid="+key

        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+key)
        .then(response => response.json())
        .then(json => {console.log(json); setResult(json) })
    }, [lat,lon])

    console.log(result)

  return (
    <>
   
        <p>{result.name}</p>

        {/* solito problema */}
        {/* <p>{result.weather[0].description}</p> */}
        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt=""></img>
   
    </>
    
  )
}
