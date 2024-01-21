import React from 'react'
import { useState, useEffect } from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

export default function MyForecast({lat,lon}) {

    const [forecast, setForecast] = useState([]);
    const key = "d6af8bacc070870215579c0b8c5f867a"


    useEffect(()=>{
        //&cnt=3
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+key)
        .then(response => response.json())
        .then(json => {console.log("forecast",json); setForecast(json) })
  
   
      },[lat,lon])

  return (
    <>
        <Container style={{textAlign:"center"}}>
            <h3>Forecast every 3 hours</h3>
            <Accordion>
                {forecast.list && forecast.list.map((x,i)=> 
                    <Accordion.Item key={i} eventKey={i}>
                        <Accordion.Header>{x.dt_txt}</Accordion.Header>
                        <Accordion.Body>
                            <Row style={{alignItems: "center"}}>
                                <Col>
                                    <img src={"https://openweathermap.org/img/wn/" + x.weather[0].icon + "@2x.png"} alt=""></img>
                                    <p>{x.weather[0].description}</p>
                                </Col>
                                <Col>
                                    <i class="bi bi-thermometer-half"></i> {x.main.temp}K
                                </Col>
                                <Col>
                                    <i class="bi bi-droplet-fill"></i>
                                    { x.main.humidity}%
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>

        </Container>
       
    </>
  )
}
