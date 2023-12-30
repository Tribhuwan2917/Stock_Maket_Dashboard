// src/App.js
import React from 'react';
import LineChart1 from './StockDashboard/LineChart1';
import BarChart from './StockDashboard/BarChart';
import PieChart from './StockDashboard/PieChart';
import { Bar } from 'react-chartjs-2';
import LoginComponent from './LoginComponent/LoginComponent';
import StockDashboard from './StockDashboard/StockDashboard';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      {/* Other components or content */}
      {/* <LoginComponent /> */}
      {/* <StockDashboard /> */}
       {/* <LineChart1/> */}
      {/* <BarChart/> */}
      
      {/* <PieChart/>   */}
    
      {/* <Router path='/stockDeshboard' element={<StockDashboard></StockDashboard>}></Router> */}
   
   <Routes> 
   <Route path='*' element={<LoginComponent></LoginComponent>}></Route> 
      <Route  path='/stockDeshboard' element={<StockDashboard></StockDashboard>}></Route>
      </Routes> 
     
      
    </div>
  );
};

export default App;
