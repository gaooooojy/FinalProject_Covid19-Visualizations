import React from 'react';
import ReactECharts from 'echarts-for-react';

const Russia = () => {
    var timeData = ['2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09',
        '2020-10','2020-11','2020-12','2020-13','2020-14','2020-15','2020-16','2020-17','2020-18','2020-19','2020-20',
        '2020-21','2020-22','2020-23','2020-24','2020-25','2020-26','2020-27','2020-28','2020-29','2020-30','2020-31',
        '2020-32','2020-33','2020-34','2020-35','2020-36','2020-37','2020-38','2020-39','2020-40','2020-41','2020-42',
        '2020-43','2020-44','2020-45','2020-46','2020-47','2020-48','2020-49','2020-50','2020-51','2020-52','2020-53',
        '2021-01','2021-02','2021-03','2021-04','2021-05','2021-06','2021-07','2021-08','2021-09',
        '2021-10','2021-11','2021-12','2021-13','2021-14','2021-15','2021-16','2021-17','2021-18','2021-19','2021-20',
        '2021-21','2021-22','2021-23','2021-24','2021-25','2021-26','2021-27','2021-28','2021-29','2021-30']

    const option = {
        title: {
            text: 'Situation in Russia with Confirmed Cases and Deaths (weekly)',
            left: 'center'
        },

        legend: {
            data: ['Confirmed Cases', 'Deaths' ],
            top: '10%'
        },

        toolbox: {
            feature: {
                magicType: {show: true, type: ['line', 'bar']},
                restore: {},
                saveAsImage: {},
            },
            right: '5%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },

        grid: {
            left: '10%',
            right: '0%',
            bottom: '5%',
            top: '20%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: timeData,
                minInterval: 3,
                name: 'year-week',
                nameLocation: 'center',
                nameTextStyle: {
                    fontSize: 15,
                    fontWeight: "bolder",
                    padding: [14, 4, 4, 4]
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                type: 'bar',
                name: 'Confirmed Cases',
                emphasis: {
                    focus: 'series'
                },
                data: [0, 0, 0, 0, 2, 0, 0, 0, 0, 8, 53, 304, 1167, 3855, 10381, 27083, 38096, 53738, 75001, 72064,
                    62729, 61362, 61830, 61291, 55716, 49757, 46814, 45911, 44384, 40939, 38385, 36666, 35317, 33896,
                    33577, 35179, 37306, 40588, 48039, 63563, 83717, 100616, 114543, 122904, 137553, 151491, 163504,
                    179987, 191454, 193158, 108740, 315367, 182103, 165131, 165797, 147624, 129397, 115110, 102893,
                    91240, 80320, 75379, 57579, 75545, 62390, 52351, 60496, 60711, 69271, 51883, 57007, 69311, 51932,
                    70412, 54520, 95971, 94418, 156115, 138000, 197532, 174293, 167014, 162405
                ]
            },
            {
                type: 'bar',
                name: 'Deaths',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "rgba(153, 21, 21, 1)"
                },
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 37, 85, 231, 386, 533, 635, 716, 910, 1152, 1166, 1089,
                    1163, 962, 1088, 1174, 1007, 927, 859, 803, 754, 698, 710, 727, 758, 840, 906, 1034, 1239, 1590,
                    1863, 2185, 2302, 2649, 2993, 3348, 3614, 3800, 2210, 6114, 3723, 3285, 3764, 3881, 3701, 3449, 3452,
                    3110, 2825, 3018, 2617, 3301, 2642, 2341, 2612, 2596, 3006, 2274, 2464, 2885, 2271, 3019, 2286, 3014,
                    2999, 4093, 4032, 5787, 5426, 5463, 5536
                ]
            }

        ]
    };
    return <ReactECharts option={option} style={{ height: 600 , width: "1000px"}}/>;
};
export default Russia;
