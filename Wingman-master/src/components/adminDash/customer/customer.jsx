import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './Customer.css';

const Customer = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'area',
      toolbar: { show: false },
      background: 'transparent',
    },
    colors: ['#00C9FF', '#92FE9D'],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      labels: { style: { colors: '#9aa0ac' } },
    },
    yaxis: {
      title: { text: 'Customers (units)', style: { color: '#6e707e' } },
      labels: { style: { colors: '#9aa0ac' } },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      theme: 'dark',
      x: { show: true },
      y: { formatter: (val) => `${val} units` },
    },
    grid: {
      borderColor: '#e7e7e7',
      strokeDashArray: 5,
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'Customers',
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ]);

  return (
    <div className="Customer">
      <h3>Customer Gain Over Time</h3>
      <Chart
        options={chartOptions}
        series={series}
        type="area"
        width="90%"  /* Reduced width */
        height="300"  /* Reduced height */
      />
    </div>
  );
};

export default Customer;
