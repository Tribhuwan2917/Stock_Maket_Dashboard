import React, { useEffect, useState } from 'react'
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';



export default function LineChart1(props) {
  const [stockData, setStockData] = useState([])
 
// useEffect(()=>{
  // try {
  // console.log("it is executiing")

  // for (let i = 0; i < props.lineChartData.length; i++) {
  //   setStockData([...stockData,{companyName:props.lineChartData[i].quote.companyName,latestPrice:props.lineChartData[i].quote.latestPrice}])
  // }
  

  //  setStockData(company{companyName:props.lineChartData[0].quote.companyName})
  //  setStockData({latestPrice:props.lineChartData[0].quote.latestPrice})
  //  setStockData({time:props.lineChartData[0].quote.latestTime})
// }
// catch (error) {
//   console.log("data ha not been set till now")

// }
// },[])
// setTimeout(()=>{console.log(stockData)},2000)
  

  //}
  // try {
  //   var data = [
  //     { label: props.lineChartData[0].quote.companyName, latestPrice: props.lineChartData[0].quote.latestPrice },
  //     { label: props.lineChartData[1].quote.companyName, latestPrice: props.lineChartData[1].quote.latestPrice },

  //     { label: props.lineChartData[1].quote.companyName, latestPrice: props.lineChartData[1].quote.latestPrice },

  //     { label: props.lineChartData[2].quote.companyName, latestPrice: props.lineChartData[2].quote.latestPrice }
  //   ];

  // }
  // catch (error) {
  //   console.log("data hass not come till now")

  //}
const data= [{ label: 'February', sales: 35, leads: 79 },
  { label: 'March', sales: 75, leads: 57 },
  { label: 'April', sales: 51, leads: 47 },
  { label: 'May', sales: 41, leads: 63 },
  { label: 'June', sales: 47, leads: 71 }
]

  return (
    <div className="row">
      <div className="col-md-12">
        <h2>Charts with recharts library</h2>
      </div>

      <div className="section col-md-6">
        <h3 className="section-title">Line Chart</h3>
        <div className="section-content">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
              <Tooltip />
              <XAxis dataKey="label" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#FB8833" />
              <Line type="monotone" dataKey="leads" stroke="#17A8F5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* <div className="section col-md-6">
        <h3 className="section-title">Bar Chart</h3>
        <div className="section-content">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
              <XAxis dataKey="label" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
              <Legend/>
              <Bar dataKey="sales" fill="#FB8833" />
              <Bar dataKey="leads" fill="#17A8F5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div> */}

    </div>
  )
}