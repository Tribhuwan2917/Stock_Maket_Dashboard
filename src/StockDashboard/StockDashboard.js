// StockDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StockDashboard.css'
// import PieChart from './StockDashboard/PieChart';
import PieChart from './PieChart';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css'

// import LineChart from './LineChart1';
import { ResponsiveContainer, LineChart, Line, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Pie } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap';
import LayOut from '../LayOut';
import { Table } from 'flowbite-react';
const IEX_CLOUD_API_KEY = 'pk_ec89278aba9e41559c833a3b8f26253c'; // Replace with your actual API key


const StockDashboard = () => {
  const [stockData, setStockData] = useState([]);
  // const[piechartLabelData,setPieChartLabelData]=useState([])
  // const[pieChartValueData,setPieChartValueData]=useState([])
  // location.reload();
  let COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://cloud.iexapis.com/stable/stock/market/batch?symbols=aapl,googl,amzn,msft&types=quote&token=${IEX_CLOUD_API_KEY}`

          // `https://cloud.iexapis.com/stable/stock/market/list/gainers?token=${IEX_CLOUD_API_KEY}`
        );
        console.log(response)
        setStockData(Object.values(response.data));
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(stockData)
  let data = []
  for (let i = 0; i < stockData.length; i++) {
    // console.log(stockData[i].quote.companyName + "................." + stockData[i].quote.latestPrice)

    data.push({ companyName: stockData[i].quote.companyName, "latestPrice": stockData[i].quote.latestPrice })
  }
  // here pie chart started
  let piechartLabelData = []
  for (let i = 0; i < stockData.length; i++) {
    piechartLabelData.push(stockData[i].quote.companyName)
  }
  let pieChartValueData = []
  for (let i = 0; i < stockData.length; i++) {
    pieChartValueData.push(stockData[i].quote.week52High)
  }
  let barGraphDataValue = []
  for (let i = 0; i < stockData.length; i++) {
    barGraphDataValue.push(stockData[i].quote.peRatio)
  }
  const data1 = {
    labels: piechartLabelData,
    datasets: [
      {
        label: "week52High",
        data: pieChartValueData,
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Row>
      
        <Col style={{ position: 'fixed' }}> <LayOut></LayOut></Col>
        <Col><Container style={{ marginLeft: '150px' }}>
        <div style={{textAlign:"center"}}><h1>Stock Market Dashboard</h1></div>
        <h1>___________________________________</h1>
        <Row>
          <Col>
          <h4>Tabular Chart:-</h4>
          <table style={{border: "3px solid rgb(0, 0, 0)"}}>
        <thead>
          <tr style={{borderWidth:'1px',borderStyle:'solid',borderColor:'black'}}>
            <th style={{borderWidth:'1px',borderStyle:'solid',borderColor:'black'}}>Symbol</th>
            <th style={{borderWidth:'1px',borderStyle:'solid',borderColor:'black'}}>Company Name</th>
            <th style={{borderWidth:'1px',borderStyle:'solid',borderColor:'black'}}>Latest Price</th>
            <th style={{borderWidth:'1px',borderStyle:'solid',borderColor:'black'}}>Change</th>
            <th style={{borderWidth:'1px',borderStyle:'solid',borderColor:'black'}}>Change Percent</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock) => (
            <tr key={stock.quote.symbol}>
              <td style={{borderWidth:'1px',borderStyle:'solid',borderColor:'black'}}>{stock.quote.symbol}</td>
              <td  style={{borderWidth:'1px',borderStyle:'solid',borderColor:'black'}}>{stock.quote.companyName}</td>
              <td style={{borderWidth:'1px',borderStyle:'solid',borderColor:'black'}}>{stock.quote.latestPrice}</td>
              <td style={{borderWidth:'1px',borderStyle:'solid',borderColor:'black'}}>{stock.quote.change}</td>
              <td style={{borderWidth:'1px',borderStyle:'solid',borderColor:'black'}}>{stock.quote.changePercent}</td>
            </tr>
          ))}
        </tbody>
      </table>

          </Col>
        </Row>
        <h1>___________________________________</h1>
          <Row>
            <Col>
             
              <div className="section col-md-6">
                <h3 className="section-title">Line Chart</h3>
                <br></br>
                <h1 style={{marginTop:'-80px'}}>_____</h1>
                <div className="section-content">
                  <ResponsiveContainer width="230%" height={400}>
                    <LineChart data={data} margin={{ top: 65, right: 0, bottom: 65, left: 0 }}>
                      <Tooltip />
                      <XAxis dataKey="companyName" />
                      <YAxis />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <Legend />
                      <Line type="monotone" dataKey="latestPrice" stroke="#FB8833" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
            <Col>
            <div>

<div style={{ width: 300, textAlign: "center" , marginTop:'0px', marginLeft:'100px' }}>
  <h3>Pie Chart</h3>
  <br></br>
      <h1 style={{marginTop:'-80px'}}>_____</h1>
  {/* <Pie data={data1} width={20} height={20} /> */}
  <Pie data={data1}  width={20} height={20}></Pie>
</div>

</div>
            </Col>
          </Row>
          <Row>
            <Col>
              
              <div className="App">
                <div style={{ maxWidth: "650px" ,height:"200px" }}>
                  <h3>Bar Graph</h3>
                  <Bar
                    data={{
                      // Name of the variables on x-axies for each bar
                      labels: piechartLabelData,
                      datasets: [
                        {
                          // Label for bars
                          label: "peRatio",
                          // Data or value of your each variable
                          data: barGraphDataValue,
                          // Color of each bar
                          backgroundColor:
                            ["aqua", "green", "red", "yellow"],
                          // Border color of each bar
                          borderColor: ["aqua", "green", "red", "yellow"],
                          borderWidth: 0.5,
                        },
                      ],
                    }}
                    // Height of graph
                    height={0}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        yAxes: [
                          {
                            ticks: {
                              // The y-axis value will start from zero
                              beginAtZero: true,
                            },
                          },
                        ],
                      },
                      legend: {
                        labels: {
                          fontSize: 15,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container></Col>
      </Row>
    </div>
  );
};

export default StockDashboard;
