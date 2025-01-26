import React from 'react';
import Chart from 'react-apexcharts';
import './farmprof.css';
import farm from '../dashasset/farm.jpg';

const Farmprof = () => {
  const farmerData = {
    image: farm,
    name: 'Rajesh Kumar',
    location: 'Madhubani, Bihar',
    state: 'Bihar',
    farmSize: '10 acres',
    crops: 'Rice, Wheat, Lentils',
    experience: '15 years',
    totalYield: '2000 kg',
    lastHarvest: '1 month ago',
    certifications: 'Organic Farming, Pesticide-free',
    equipment: 'Power Tiller, Harvester, Seed Drill',
    recentActivities: [
      { activity: 'Harvested rice crop', time: '4 days ago' },
      { activity: 'Implemented drip irrigation system', time: '2 weeks ago' },
      { activity: 'Sold 700 kg of wheat', time: '1 month ago' },
    ],
  };

  const chartData = {
    series: [
      {
        name: 'Harvested',
        data: [400, 550, 700, 850, 950],
      },
      {
        name: 'Sold',
        data: [300, 480, 600, 770, 820],
      },
    ],
    options: {
      chart: {
        type: 'line',
        height: 350,
      },
      title: {
        text: 'Harvest vs Sales',
        align: 'left',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      },
      colors: ['#4CAF50', '#FF6B6B'],
      stroke: {
        width: [3, 3],
        curve: 'smooth',
      },
    },
  };

  return (
    <div className="profile-container">
      <h1 className="main-heading">Farmer Profile</h1>
      <div className="farmer-card">
        <div className="farmer-info-container">
          <div className="farmer-info">
            <img src={farmerData.image} alt={farmerData.name} className="farmer-image" />
            <h3 className="farmer-name">{farmerData.name}</h3>
            <p className="farmer-location">{farmerData.location}, {farmerData.state}</p>
            <div className="farmer-details">
              <p><strong>Farm Size:</strong> {farmerData.farmSize}</p>
              <p><strong>Crops:</strong> {farmerData.crops}</p>
              <p><strong>Experience:</strong> {farmerData.experience}</p>
              <p><strong>Total Yield:</strong> {farmerData.totalYield}</p>
              <p><strong>Last Harvest:</strong> {farmerData.lastHarvest}</p>
              <p><strong>Certifications:</strong> {farmerData.certifications}</p>
              <p><strong>Equipment:</strong> {farmerData.equipment}</p>
            </div>
            <div className="recent-activities">
              <h4>Recent Activities</h4>
              {farmerData.recentActivities.map((activity, index) => (
                <p key={index} className="activity-item">
                  <strong>{activity.activity}</strong> - <span>{activity.time}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="chart-container">
          <h4>Harvest & Sales Data</h4>
          <Chart options={chartData.options} series={chartData.series} type="line" height={300} />
        </div>
      </div>
    </div>
  );
};

export default Farmprof;