import React, {useEffect} from 'react';
import './LineChart.css';
import Chart from 'react-google-charts';

const LineChart = ({historicalData}) => {

    const[data, setData] = React.useState([["Date", "Prices"]])

    useEffect(() => {
        let dataCopy = [["Date", "Prices"]];
        if (historicalData.prices) {
            historicalData.prices.forEach((item) => {
                const date = new Date(item[0]); // Use Date object, not string
                dataCopy.push([date, item[1]]);
            });
            setData(dataCopy);
        }
    }, [historicalData]);
    return(
        <Chart
           chartType="LineChart"
           data={data}
           height="100%"
           legendToggle
        />
    )
}

export default LineChart;