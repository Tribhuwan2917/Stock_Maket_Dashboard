// src/App.js
import React from 'react';
import LineChart1 from './StockDashboard/LineChart1';
import BarChart from './StockDashboard/BarChart';
import PieChart from './StockDashboard/PieChart';
import { Bar } from 'react-chartjs-2';
import LoginComponent from './LoginComponent/LoginComponent';
import StockDashboard from './StockDashboard/StockDashboard';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LayOut from './LayOut';
import { Col, Container, Row } from 'react-bootstrap';

const App = () => {
  return (
    <div className="app" style={{color:'white'}}>
      {/* Other components or content */}
      {/* <LoginComponent /> */}
      {/* <StockDashboard /> */}
       {/* <LineChart1/> */}
      {/* <BarChart/> */}
      
      {/* <PieChart/>   */}
    
      {/* <Router path='/stockDeshboard' element={<StockDashboard></StockDashboard>}></Router> sessionStorage.getItem('isLoggedIn')*/}
      <Container>
      <Row>
      {/* {sessionStorage.getItem('isLoggedIn')? <Col><div><LayOut></LayOut></div></Col>:null} */}
        <Col>
         <Routes> 
   <Route path='*' element={<LoginComponent></LoginComponent>}></Route> 
      <Route  path='/stockDeshboard' element={<StockDashboard></StockDashboard>}></Route>
      </Routes></Col>
      </Row>
      
  
      </Container>
      
    </div>
  );
};

export default App;
