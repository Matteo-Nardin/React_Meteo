import React from 'react'
import MyResult from '../components/MyResult'

import { useParams } from 'react-router-dom'

import MyForecast from '../components/MyForecast'
import { Col, Container, Row } from 'react-bootstrap'

export default function Result() {

  const { lat,lon,city,country } = useParams()
  console.log(useParams())


  console.log(lat,lon)
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col sm={6}>
            <MyResult lat={lat} lon={lon} city={city} country={country}></MyResult>
          </Col>
          <Col className="" sm={6}>
            <MyForecast lat={lat} lon={lon}></MyForecast>
          </Col>
        </Row>
      </Container>
    </>
   
  )
}
