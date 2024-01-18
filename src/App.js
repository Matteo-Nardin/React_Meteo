import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";


import MyNav from './components/MyNav';
//Pagine
import HomePage from './pages/HomePage';
import Result from './pages/Result';


function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav></MyNav>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/Result/:lat/:lon" element={<Result />}/>
            
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
          </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
