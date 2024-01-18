import React, { useEffect, useState } from 'react'

import axios from 'axios'
import MyForm from '../components/MyForm'
import Result from './Result';

export default function HomePage() {
  
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(false);
  const [error, setError] = useState();

  const key = "d6af8bacc070870215579c0b8c5f867a"

  useEffect(() => {
      
    // Soluzione con il fetch
    //  fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid='+key)
    //     .then(response => response.json())
    //     .then(json => {console.log(json); setUsers(json)}) 
    
    // Soluzione con axios
    // axios.get('http://localhost:3000/users')
    //     .then(response => {
    //         if(response.status === 200) {
    //             setUsers(response.data)
    //         } else {
    //             console.log("Errore Server!!!")
    //         }
    //     }).catch(error => console.error(error))
 
}, [update])

const handleSubmit = (newUser) => {
  console.log(newUser)

  // Soluzione con il fetch
  /* fetch('http://localhost:3000/users' , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(newUser)})
  .then(response => response.json())
  .then(json => { console.log(json); setUpdate(!update)})
  .catch(error =>console.log(error)) */

  axios.post(`http://localhost:3000/users`, newUser)
      .then(response => setUpdate(!update))
      .catch(error => setError(error.response.data))
}

const removeUser = (obj) => {
  // Soluzione con il fetch
  /* fetch('http://localhost:3000/users/' + obj.id, {method: 'DELETE'})
      .then(response => response.json())
      .then(json => console.log(json)) */
  
  // Soluzione con axios
  axios.delete('http://localhost:3000/users/' + obj.id)
      .then(response => setUpdate(!update))
      .catch(error => console.error(error))
}
  
  return (
    <>
        <h1 className="text-center">HomePage</h1>
        <MyForm></MyForm>
        {/* <Result></Result> */}
        
    </>
  )
}