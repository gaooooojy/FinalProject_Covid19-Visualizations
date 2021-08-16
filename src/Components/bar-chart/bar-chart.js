import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart = () => {

    const option = {
        title: {
            text: 'Rates of deaths by ethnic group per 100,000 people in England and Wales',
            subtext: 'Data was collected from 2 March 2020 to 28 July 2020',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {},
            },
            right: '5%'
        },
        legend: {
            data: ['Male', 'Female'],
            top: '10%'
        },
        grid: {
            left: '5%',
            right: '3%',
            bottom: '3%',
            top: '20%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['Bangladeshi', 'Black African', 'Black Caribbean', 'Chinese', 'Indian',
                'Mixed/Multiple ethnic groups', 'Other', 'Pakistani', 'White']
        },
        series: [
            {
                name: 'Male',
                type: 'bar',
                data: [270.45, 287.67, 270.3, 133.33, 175.3, 167.05, 191.88, 200.29, 106.77]
            },
            {
                name: 'Female',
                type: 'bar',
                data: [110.97, 114.76, 128.82, 75.47, 99.79, 93.79, 99.5, 115.72, 65.68]
            }
        ]
    };
    return <ReactECharts option={option} style={{ height: 600 , width: "1000px"}}/>;
};
export default BarChart;
