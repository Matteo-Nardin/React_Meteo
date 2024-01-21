import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import MySpinner from './MySpinner';


export default function MyResult({lat, lon, city, country}) {

    const key = "d6af8bacc070870215579c0b8c5f867a"
    const [result, setResult]= useState([])
    //const [isLoading, setIsLoading]= useState(false)

    // {isLoading ? MySpinner : }



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
    console.log("root", result)

    console.log(Date(String(result.dt)))
    console.log("new Date",new Date().getTime())
    //let sunrise = result.sys.sunrise
    let sunset =  1705823718
    let sunrise = 1705787295

    //tempo locale, da aggiungere l'UTC
    console.log("sunset" , new Date(sunset*1000).getHours())
    console.log("sunrise" , new Date(sunrise*1000).getHours())
    //console.log("sunrise" ,new Date(sunrise*1000))
    //               1705771899 830 ??
    //               17353060000
    //console.log(sunset.toLocaleTimeString('en-GB'))
    // console.log("sunrise", result.sys.sunrise)


  return (
    <>
        {/* dt è un getTime() */}
        
        {/* <p>UTC: {result.timezone/3600}</p> */}

        {/* sunset: {result.sys && Date(result.sys.sunset*1000)}
        
        sunrise: {result.sys && Date(result.sys.sunrise)} */}
      {/* {isLoading ? "ciao" : <MySpinner></MySpinner>} */}

      <Container style={{width : "18rem", backgroundColor: "#ffffed", borderRadius: "10px", padding: "10px"}}>
        <Row>
        <Col style={{textAlign: "center"}}>
            <h2> {city} ({country})</h2>
            { result.name && <h4 style={{opacity: 0.6}}>{result.name}</h4>}
          </Col>
        </Row>
        <Row>
          <Col style={{textAlign: "center"}}>
            {result.weather && <img  src={"https://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png"} alt="{result.weather[0].description}"></img>}
                            
            { result.weather && <p style={{opacity: "60%"}}>{result.weather[0].description}</p> }
          </Col>
        </Row>
        <Row className="align-items-center" style={{textAlign: "center"}}>
          <Col>
            <i class="bi bi-thermometer-half"></i>
            <p>{ result.main && result.main.temp} K</p>
          </Col>
          <Col>
            <p><i class="bi bi-thermometer-sun"></i> { result.main && result.main.temp_max} K</p>
            <p><i class="bi bi-thermometer-snow"></i> { result.main && result.main.temp_min} K</p>
          </Col>
        </Row>
        <Row style={{textAlign: "center"}}>
          <Col>
            <i class="bi bi-droplet-fill"></i>
            <p>{ result.main && result.main.humidity}%</p>
          </Col>
          <Col>
            <i class="bi bi-wind"></i>
            <p>{ result.wind && result.wind.speed} m/s</p>
          </Col>
        </Row>
        <Row style={{textAlign: "center"}}>
          <Col>
            <i class="bi bi-sunrise"></i>
            <p>{ result.sys && result.sys.sunrise}</p>
            {/* <p>{ result.sys && new Date( result.sys.sunrise ).getHours() } : {new Date( result.sys.sunrise ).getMinutes() }</p> */}
          </Col>
          <Col>
          <i class="bi bi-sunset-fill"></i>
            <p>{ result.sys && result.sys.sunset}</p>

            {/* <p>{ result.sys && new Date(result.sys.sunset).getHours()} : {new Date(result.sys.sunset).getMinutes() }</p> */}
      
          </Col>
        </Row>
      </Container>
    </>
  )
}
