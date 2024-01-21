import React, { useEffect, useState } from 'react'
import MyForm from '../components/MyForm'


export default function HomePage() {
    
  // Soluzione con axios
  // axios.delete('http://localhost:3000/users/' + obj.id)
  //     .then(response => setUpdate(!update))
  //     .catch(error => console.error(error))

  
  return (
    <>
        {/* <h1 className="text-center">Search your</h1> */}
        <MyForm></MyForm>
    </>
  )
}