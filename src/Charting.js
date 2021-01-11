import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Chart from "chart.js";
//import classes from "./LineGraph.module.css";

const Charting = (props) => {
  
    const [dates, setDates] = useState([]);
    const [prices, setPrices] = useState([]);


    const chartRef = React.createRef();
    
    useEffect( () => {
        
        setDates(props.dates);
        setPrices(props.prices);
        const myChartRef = chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: dates,
                datasets: [
                    {
                        label: "Prices",
                        data: prices,
                        backgroundColor:'white',
                        borderColor: 'white',
                        fill: 'false'
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    })


    return (
        <div className="chart">
            <canvas
                    id="myChart"
                    ref={chartRef}
                />
        </div>
    );
};

export default Charting;