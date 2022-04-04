import React from 'react';
import { Container } from 'react-bootstrap';
import { Pie, PieChart, Bar, BarChart, Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';
import './Dashboard.css'

const Dashboard = () => {
    const [chart] = useChart();
    return (
        <Container className='my-5'>
            <h2 className='left-border'>Dashboard</h2>
            <div className='dashboard-chart my-5'>
                <LineChart width={500} height={400} data={chart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
                <AreaChart width={500} height={400} data={chart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8"/>
                </AreaChart>
                <BarChart width={500} height={400} data={chart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Bar dataKey="sell" fill="#8884d8" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
                <PieChart width={500} height={400} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Pie data={chart} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={chart} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
            </div>    
        </Container>
    );
};

export default Dashboard;