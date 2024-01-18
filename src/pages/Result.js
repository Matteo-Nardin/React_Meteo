import React from 'react'
import MyResult from '../components/MyResult'

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Result() {

  const { lat,lon } = useParams()
  const navigate = useNavigate();
  const [result, setResult] = useState({});

  console.log(lat,lon)
  return (
    <>
      <div>Result</div>
      <MyResult lat={lat} lon={lon}></MyResult>
    </>
   
  )
}
