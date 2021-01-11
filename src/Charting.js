import React, {useEffect} from 'react';
import axios from 'axios';
import Chart from "chart.js";
//import classes from "./LineGraph.module.css";

const Charting = () => {
  
    const chartRef = React.createRef();
    
    useEffect( () => {
        const myChartRef = chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                        backgroundColor:'white',
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    })
    
    
    
    
    
    const getData = () => {
      axios.get('http://localhost:3001/current')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }


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