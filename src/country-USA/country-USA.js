import React from 'react';
import ReactECharts from 'echarts-for-react';

const UnitedStatesOfAmerica = () => {
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
            text: 'Situation in United States of America with Confirmed Cases and Deaths (weekly)',
            left: 'center'
        },

        legend: {
            data: ['Confirmed Cases', 'Deaths' ],
            top: '10%'
        },

        toolbox: {
            feature: {
                saveAsImage: {},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {},
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
                data: [0, 0, 0, 5, 6, 1, 3, 20, 54, 465, 3220, 31432, 107819, 194610, 219936, 202116, 206223, 192131,
                    171758, 156958, 156481, 146953, 152172, 151706, 186843, 268084, 339639, 416307, 468318, 460760,
                    433935, 376909, 358405, 299342, 294552, 279258, 243558, 284835, 310232, 302799, 344699, 392051,
                    481570, 571197, 764289, 1065410, 1209848, 1136412, 1373677, 1499756, 1588085, 1306812, 1488563,
                    1782792, 1515282, 1358783, 1024054, 687440, 685603, 495991, 415502, 383101, 506660, 323686, 512686,
                    374335, 562003, 402714, 454253, 296606, 286092, 236081, 173887, 141806, 103062, 99397, 80348, 83014,
                    92182, 138400, 256273, 332523, 559822
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
                data: [0, 0, 0, 0, 0, 0, 0, 0, 2, 19, 48, 402, 2038, 7138, 12461, 18574, 14194, 12806, 11846, 10034,
                    8158, 6663, 6131, 5218, 4243, 5829, 4143, 5258, 5329, 6401, 7925, 8078, 7114, 6754, 6263, 5872, 5138,
                    5430, 5247, 5038, 4977, 4903, 5556, 5766, 6576, 8642, 10568, 10091, 15437, 16867, 18493, 15656,
                    18264, 22852, 23169, 23518, 22226, 20127, 22843, 11364, 15402, 11888, 10682, 6698, 7677, 4965, 7532,
                    4683, 5458, 4371, 4709, 4247, 3892, 4538, 3197, 2141, 2056, 2142, 1559, 1637, 1990, 1739, 2336
                ]
            }

        ]
    };
    return <ReactECharts option={option} style={{ height: 600 , width: "1000px"}}/>;
};
export default UnitedStatesOfAmerica;
