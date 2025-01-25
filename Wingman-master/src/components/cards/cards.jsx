import React, { useState } from 'react';
import './cards.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import Chart from 'react-apexcharts';

const Cards = (props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <AnimatePresence>
            {expanded ? (
                <ExpandedCard param={props} setExpanded={setExpanded} key="expanded" />
            ) : (
                <CompactCard param={props} setExpanded={setExpanded} key="compact" />
            )}
        </AnimatePresence>
    );

};

function CompactCard({ param, setExpanded }) {
    const Png = param.png;

    return (
        <motion.div
            className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            onClick={() => setExpanded(true)}
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span className="card-title">{param.title}</span>
            </div>
            <div className="detail">
                <Png className="icon" />
                <div>
                    <span className="value">₹{param.value}</span>
                    <br/>
                    <span className="subtitle">Last 24 hours</span>
                </div>
            </div>
        </motion.div>
    );
}

function ExpandedCard({ param, setExpanded }) {
    const data = {
        options: {
            chart: {
                type: 'area',
                toolbar: { show: false },
                background: 'transparent',
              },
              colors: ['#00C9FF', '#92FE9D'],
              dataLabels: { enabled: false },
              stroke: { curve: 'smooth', width: 2 },
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
            xaxis: {
                type: "datetime",
                categories: [
                    "2024-09-19T08:00:00.000Z",
                    "2024-09-19T01:38:00.000Z", 
                    "2024-09-19T02:38:00.000Z",
                    "2024-09-19T03:38:00.000Z", 
                    "2024-09-19T04:38:00.000Z",
                    "2024-09-19T05:30:00.000Z",
                    "2024-09-19T06:30:00.000Z",
                ],
            },
        },
        series: param.series,
    };
    

    return (
        <motion.div
            className="ExpandedCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            
        >
            <div className="close-icon" style={{alignSelf:'flex-end', cursor:"pointer", color:'white'}}>
                <IoCloseSharp onClick={() => setExpanded(false)} 
                />
            </div>
            <span className="card-title">{param.title}</span>
            <div className="chartContainer">
                <Chart options={data.options} series={data.series} type="area" />
            </div>
            <div className="detail">
            <span className="subtitle">Last 24 hours</span>
            <span className="value">₹{param.value}</span>
                
            </div>
        </motion.div>
    );
}

export default Cards;
