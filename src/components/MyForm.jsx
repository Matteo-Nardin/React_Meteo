
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MyResult from './MyResult';
import { useNavigate } from 'react-router-dom';

// export default function MyForm() 
const MyForm = () => {

  const key = "d6af8bacc070870215579c0b8c5f867a"

  const [query, setQuery] = useState("");
  const [city, setCity] = useState([]);

  const navigate = useNavigate();


  const handleQuery = e => {
    setQuery(e.target.value);
  };

  //geo:
  //"https://api.openweathermap.org/geo/1.0/direct?q="+query+"&appid="+key
  //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
  //weather:
  //https://api.openweathermap.org/data/2.5/weather?q=london&appid=
  //api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d54ccb7ea201b87d0f1a2e3b969323b0
  const handleSubmit = (e) => {
    e.preventDefault();
    // Soluzione con il fetch
    fetch("https://api.openweathermap.org/geo/1.0/direct?q="+query+"&limit=5&appid="+key)
    .then(response => response.json())
    .then(json => {console.log(json); setCity(json) })

    console.log(city)

    // Soluzione con axios
    // axios.get('http://localhost:3000/users')
    //     .then(response => {
    //         if(response.status === 200) {
    //             setUsers(response.data)
    //         } else {
    //             console.log("Errore Server!!!")
    //         }
    //     }).catch(error => console.error(error))

  };


  // const handleSubmit = async e => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("https://api.openweathermap.org/geo/1.0/direct?q="+query+"&limit=5&appid="+key);
  //     if (response.ok) {
  //       const { data } = await response.json();
       
  //       setCity(data);
  //       console.log(city)
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  console.log(city)

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>City</Form.Label>
        <Form.Control type="search" placeholder="Rome" value={query} onChange={handleQuery}/>
      </Form.Group>
      {/* ok ma con il refresh si rompre */}
      {/* {!city && <p>Gatto: {city.lat}</p>} */}
      {/* <p>Gatto: {city.lat}</p> */}
      {city.map((x,index)=> ( <p onClick={()=>{navigate("/Result/" + x.lat +"/"+ x.lon)}} key={index}>{x.name} {x.country}</p> ) )}
      
      {/* <Button variant="primary" type="submit" onChange={handleChange}>
      Submit
    </Button> */}
    </Form>
    );
}

export default MyForm

//https://openweathermap.org/api/geocoding-api#direct