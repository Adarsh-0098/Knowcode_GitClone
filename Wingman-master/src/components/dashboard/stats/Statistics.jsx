import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './statistics.css';
import img1 from '../dashasset/corn.jpg'; 
import img2 from '../dashasset/pea.jpg'; 
import img3 from '../dashasset/rice.jpg'; 
import img4 from '../dashasset/wheat.jpg';
import img5 from '../dashasset/user_img.jpg';
 
const Statistics = () => {
    // Sample data for the graph
    const soldCropData = [
        { year: '2018', sales: 400 },
        { year: '2019', sales: 300 },
        { year: '2020', sales: 500 },
        { year: '2021', sales: 600 },
        { year: '2022', sales: 700 },
    ];

    const sellerData = [
        { name: 'Seller 1', sold: 200  },
        { name: 'Seller 2', sold: 400 },
        { name: 'Seller 3', sold: 300 },
    ];
    const futureCropData = [
        { name: 'Corn', prediction: 800, img: 'https://via.placeholder.com/80.png/FF0000/FFFFFF?text=Corn' },
        { name: 'Pea', prediction: 650, img: 'https://via.placeholder.com/80.png/00FF00/FFFFFF?text=Pea' },
        { name: 'Rice', prediction: 500, img: 'https://via.placeholder.com/80.png/0000FF/FFFFFF?text=Rice' },
    ];
    
    return (
        <div className="statisticsSection">
            <Link to="/dashboard" className="backButton">Back</Link>
            <h1>Chart</h1>
            <div className="gridContainer">
                <div className="gridItem fullHeight">
                    <h2>Most Sold Crop</h2>
                    <div className="cropCard">
                        <img src={img1} alt="Crop" />
                        <div className="cropDetails">
                            <h3>Corn</h3>
                            <p>Amount Sold: 500 tons</p>
                            <p>Purchased by Retailer Ryan</p>
                        </div>
                    </div>
                    <div className="graphContainer">
                        <LineChart width={500} height={300} data={soldCropData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </div>
                </div>

                <div className="gridItem fullHeight">
                    <h2>Future Crop Predictions</h2>
                    <div className="futurePredictions">
                        <ul>
                            {futureCropData.map(crop => (
                                <li key={crop.name}>
                                    <img src={crop.img} alt={crop.name} />
                                    <span>{crop.name}: {crop.prediction} tons</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="graphContainer">
                        <LineChart width={500} height={300} data={futureCropData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="prediction" stroke="#82ca9d" />
                        </LineChart>
                    </div>
                </div>

                <div className="gridItem">
                    <h2>Top Seller Information</h2>
                    <div className="sellerCard">
                        <img src={img5} alt="Seller" />
                        <div className="sellerInfo">
                            <h3>Ryan Gupta</h3>
                            <p>Top Crop Sold: Corn</p>
                        </div>
                    </div>
                    <div className="graphContainer">
                        <LineChart width={500} height={300} data={sellerData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sold" stroke="#ff7300" />
                        </LineChart>
                    </div>
                </div>

                <div className="gridItem">
                    <h2>Sales Overview</h2>
                    <div className="graphContainer">
                        <LineChart width={500} height={300} data={soldCropData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                        </LineChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
