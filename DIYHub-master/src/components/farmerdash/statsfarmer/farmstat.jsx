import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import { FaSeedling, FaTractor, FaLeaf } from "react-icons/fa";  // Icons from react-icons
import './farmstat.css';

const Farmerstat = () => {
  // Static data for crop popularity based on hypothetical weather conditions
  const cropData = [
    { month: "January", wheat: 70, rice: 40, maize: 30 },
    { month: "February", wheat: 75, rice: 45, maize: 35 },
    { month: "March", wheat: 80, rice: 50, maize: 45 },
    { month: "April", wheat: 90, rice: 60, maize: 50 },
    { month: "May", wheat: 85, rice: 65, maize: 55 },
    { month: "June", wheat: 80, rice: 70, maize: 60 },
    { month: "July", wheat: 75, rice: 75, maize: 70 },
    { month: "August", wheat: 70, rice: 80, maize: 75 },
    { month: "September", wheat: 65, rice: 85, maize: 80 },
    { month: "October", wheat: 60, rice: 90, maize: 85 },
    { month: "November", wheat: 55, rice: 95, maize: 90 },
    { month: "December", wheat: 50, rice: 100, maize: 95 },
  ];

  // Function to get crop trend icons based on highest value
  const getTrendIcon = (wheat, rice, maize) => {
    if (wheat > rice && wheat > maize) return <FaLeaf size={30} color="#8884d8" />;
    if (rice > maize) return <FaSeedling size={30} color="#82ca9d" />;
    return <FaTractor size={30} color="#ffc658" />;
  };

  return (
    <div className="farmerStatPage">
      {/* Back Button */}
      <Link to="/farmerdash" className="backButton">
        &larr; Back
      </Link>
      
      {/* Title */}
      <h2 className="chartTitle">Crop Popularity Charts</h2>
      
      {/* Containers */}
      <div className="contentWrapper">
        {/* Chart Container */}
        <div className="chartContainer">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={cropData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" align="center" />
              <Line type="monotone" dataKey="wheat" stroke="#8884d8" activeDot={{ r: 8 }} name="Wheat" />
              <Line type="monotone" dataKey="rice" stroke="#82ca9d" name="Rice" />
              <Line type="monotone" dataKey="maize" stroke="#ffc658" name="Maize" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Crop Trends Container */}
        <div className="trendsContainer">
          <h3>Crop Trends by Month</h3>
          <ul className="trendsList">
            {cropData.map((item, index) => (
              <li key={index} className="trendItem">
                {getTrendIcon(item.wheat, item.rice, item.maize)}
                <span>{item.month}: {item.wheat > item.rice && item.wheat > item.maize ? 'Wheat' : item.rice > item.maize ? 'Rice' : 'Maize'} trends the most.</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Farmerstat;
