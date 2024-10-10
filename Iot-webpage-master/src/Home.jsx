import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:5000'); // Flask backend URL

    // Listen for incoming data from the backend
    socket.on('chart_data', (newData) => {
        setData((prevData) => [...prevData, ...newData]); // Append new data to existing data
    });

    return () => {
      socket.disconnect();
    };
  });

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>NAME</h3>
                </div>
                <h3>Harini</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ID</h3>
                </div>
                <h3>202409301125</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>DATE</h3>
                </div>
                <h3>03-10-2024</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>DOCTOR</h3>
                </div>
                <h3>Kannan M</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>SESSION</h3>
                </div>
                <h3>3</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>LEG</h3>
                </div>
                <h3>RIGHT</h3>
            </div>
        </div>

        <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    Label: 'Right leg -y axis',
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='x' />
                <YAxis datakey='y' />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="x" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="y" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    Label: 'Right leg -x axis',
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis datakey="y"/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="x" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="y" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  );
}

export default Home;




// import React from 'react'
// import 
// { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
//  from 'react-icons/bs'
//  import 
//  { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
//  from 'recharts';

// function Home() {

//     const data = [
//         {
          
//           x: 40,
//           y: 24,
//           amt: 24,
//         },
//         {
          
//           x: 30,
//           y: 13,
//           amt: 22,
//         },
//         {
          
//           x: 20,
//           y: 98,
//           amt: 22,
//         },
//         {
          
//           x: 27,
//           y: 39,
//           amt: 20,
//         },
//         {
          
//           x: 18,
//           y: 48,
//           amt: 21,
//         },
//         {
          
//           x: 23,
//           y: 38,
//           amt: 25,
//         },
//         {
          
//           x: 34,
//           y: 43,
//           amt: 21,
//         },
//       ];
     

//   return (
//     <main className='main-container'>
//         <div className='main-title'>
//             <h3>DASHBOARD</h3>
//         </div>

//         <div className='main-cards'>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>NAME</h3>
//                 </div>
//                 <h3>Harini</h3>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>ID</h3>
//                 </div>
//                 <h3>202409301125</h3>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>DATE</h3>
//                 </div>
//                 <h3>03-10-2024</h3>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>DOCTOR</h3>
//                 </div>
//                 <h3>Kannan M</h3>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>SESSION</h3>
//                 </div>
//                 <h3>3</h3>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>LEG</h3>
//                 </div>
//                 <h3>RIGHT</h3>
//             </div>
//         </div>

//         <div className='charts'>
//         <ResponsiveContainer width="100%" height="100%">
//                 <LineChart
//                 width={500}
//                 height={300}
//                 data={data}
//                 margin={{
//                     Label: 'Right leg -y axis',
//                     top: 5,
//                     right: 30,
//                     left: 20,
//                     bottom: 5,
//                 }}
//                 >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="x" stroke="#8884d8" activeDot={{ r: 8 }} />
//                 <Line type="monotone" dataKey="y" stroke="#82ca9d" />
//                 </LineChart>
//             </ResponsiveContainer>

//             <ResponsiveContainer width="100%" height="100%">
//                 <LineChart
//                 width={500}
//                 height={300}
//                 data={data}
//                 margin={{
//                     Label: 'Right leg -x axis',
//                     top: 5,
//                     right: 30,
//                     left: 20,
//                     bottom: 5,
//                 }}
//                 >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="x" stroke="#8884d8" activeDot={{ r: 8 }} />
//                 <Line type="monotone" dataKey="y" stroke="#82ca9d" />
//                 </LineChart>
//             </ResponsiveContainer>

//         </div>
//     </main>
//   )
// }

// export default Home