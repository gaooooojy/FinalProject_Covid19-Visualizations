import React from 'react';
import ReactECharts from 'echarts-for-react';

const StuckColumnChartCountriesDeaths = () => {
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
            text: 'Stuck Colunm Chart of Main Countries (Deaths)',
            left: 'center'
        },

        toolbox: {
            feature: {
                saveAsImage: {},
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
        legend: {
            data: ['United States Of America', 'India', 'Brazil', 'Russia', 'France', 'United Kingdom',  'China' ],
            top: '10%'
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
                name: 'United States Of America',
                type: 'bar',
                stack: 'confirm',
                emphasis: {
                    focus: 'series'
                },
                data: [0, 0, 0, 0, 0, 0, 0, 0, 2, 19, 48, 402, 2038, 7138, 12461, 18574, 14194, 12806, 11846, 10034,
                    8158, 6663, 6131, 5218, 4243, 5829, 4143, 5258, 5329, 6401, 7925, 8078, 7114, 6754, 6263, 5872, 5138,
                    5430, 5247, 5038, 4977, 4903, 5556, 5766, 6576, 8642, 10568, 10091, 15437, 16867, 18493, 15656,
                    18264, 22852, 23169, 23518, 22226, 20127, 22843, 11364, 15402, 11888, 10682, 6698, 7677, 4965, 7532,
                    4683, 5458, 4371, 4709, 4247, 3892, 4538, 3197, 2141, 2056, 2142, 1559, 1637, 1990, 1739, 2336]
            },

            {
                name: 'India',
                type: 'bar',
                stack: 'confirm',
                emphasis: {
                    focus: 'series'
                },
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 5, 22, 80, 199, 235, 329, 501, 833, 823, 992, 1373, 1741, 2385,
                    4179, 2776, 3218, 3481, 4323, 5274, 5364, 6251, 6535, 6621, 6927, 7173, 8080, 8160, 7660, 7143,
                    6465, 5460, 4404, 3593, 4004, 3459, 3668, 3401, 3434, 2782, 2455, 2091, 1748, 1511, 1259, 1051, 922,
                    688, 652, 653, 772, 696, 872, 1242, 1876, 3258, 5078, 8590, 16354, 23836, 27157, 28274, 29330, 25380,
                    20086, 25119, 13830, 8595, 5998, 6036, 5344, 6859, 3806
                ]
            },

            {
                name: 'Brazil',
                type: 'bar',
                stack: 'confirm',
                emphasis: {
                    focus: 'series'
                },
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 111, 350, 737, 1239, 1743, 2820, 4098, 4995, 6548, 6648,
                    7141, 6877, 7285, 7005, 7245, 7233, 7388, 7516, 7100, 6945, 6803, 6892, 6084, 5822, 4975, 5270, 4846,
                    4611, 4136, 3417, 3229, 2940, 2323, 3401, 3385, 3650, 4108, 4461, 5889, 3848, 4879, 7562, 6719, 7365,
                    7435, 7071, 7603, 7370, 8577, 10678, 12888, 16139, 18441, 18886, 21865, 20065, 17254, 16686, 14607,
                    11486, 13493, 12849, 12347, 13997, 15424, 10649, 10943, 9816, 7981, 7710, 6910
                ]
            },

            {
                name: 'Russia',
                type: 'bar',
                stack: 'confirm',
                emphasis: {
                    focus: 'series'
                },
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 37, 85, 231, 386, 533, 635, 716, 910, 1152, 1166, 1089,
                    1163, 962, 1088, 1174, 1007, 927, 859, 803, 754, 698, 710, 727, 758, 840, 906, 1034, 1239, 1590,
                    1863, 2185, 2302, 2649, 2993, 3348, 3614, 3800, 2210, 6114, 3723, 3285, 3764, 3881, 3701, 3449, 3452,
                    3110, 2825, 3018, 2617, 3301, 2642, 2341, 2612, 2596, 3006, 2274, 2464, 2885, 2271, 3019, 2286, 3014,
                    2999, 4093, 4032, 5787, 5426, 5463, 5536
                ]
            },

            {
                name: 'France',
                type: 'bar',
                stack: 'confirm',
                emphasis: {
                    focus: 'series'
                },
                data: [0, 0, 0, 0, 0, 0, 1, 0, 1, 17, 108, 547, 1932, 5472, 6315, 5325, 3138, 2039, 1485, 1331, 656,
                    435, 353, 252, 233, 138, 115, 111, 148, 40, 73, 59, 86, 103, 93, 95, 215, 369, 442, 503, 500, 747,
                    1284, 2258, 3420, 4109, 4184, 3593, 2830, 2756, 2638, 2560, 1928, 2713, 2533, 2766, 3008, 2908,
                    2849, 2492, 2148, 2146, 1855, 1850, 2318, 2055, 2100, 1984, 2125, 1961, 1573, 1224, 980, 806, 596,
                    393, 347, 230, 193, 164, 147, 143, 272
                ]
            },

            {
                name: 'United Kingdom',
                type: 'bar',
                stack: 'confirm',
                emphasis: {
                    focus: 'series'
                },
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 41, 245, 1388, 4197, 6440, 6166, 5512, 4227, 3174, 2428, 2137,
                    1488, 1174, 747, 512, 442, 312, 213, 150, 116, 96, 71, 88, 63, 70, 52, 77, 149, 211, 362, 475, 821,
                    1250, 1821, 2327, 2890, 2817, 3494, 3000, 2925, 3231, 3708, 3915, 6407, 7830, 8678, 8219, 6640,
                    4368, 3414, 2269, 1652, 1015, 639, 437, 244, 264, 170, 158, 110, 67, 74, 42, 60, 59, 64, 72, 124,
                    131, 194, 283, 450, 561
                ]
            },

            {
                name: 'China',
                type: 'bar',
                stack: 'confirm',
                emphasis: {
                    focus: 'series'
                },
                data: [0, 1, 2, 78, 280, 548, 862, 824, 319, 208, 94, 58, 32, 29, 10, 1291, 1, 0, 0, 1, 0, 0, 0, 0, 1,
                    2, 0, 0, 5, 6, 17, 17, 17, 8, 11, 8, 4, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 7, 14, 2, 10, 7,
                    13, 5, 7, 4, 2, 3, 1, 0, 2, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0
                ]
            },

        ]
    };
    return <ReactECharts option={option} style={{ height: 600 , width: "1000px"}}/>;
};
export default StuckColumnChartCountriesDeaths;
