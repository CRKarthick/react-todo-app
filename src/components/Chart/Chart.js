import React from 'react';
import './Chart.css';

import ChartBar from './ChartBar';

const Chart = props => {
    let dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
    let totalMaxValue = Math.max(...dataPointsValue);
    // console.log('total Max value', totalMaxValue);
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaxValue}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
