import React from 'react';
import ReactECharts from 'echarts-for-react';

const LineChartContinent = () => {
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
            text: 'Line Chart of Continents (Confirmed Cases)',
            left: 'center'
        },

        toolbox: {
            feature: {
                saveAsImage: {},
                magicType: {
                    type: ["line", "bar"]
                },
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
            data: ['Asia', 'Europe', 'Americas', 'Africa', 'Oceania' ],
            top: '10%'
        },
        grid: {
            left: '10%',
            right: '0%',
            bottom: '5%',
            top: '30%',
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
                name: 'Asia',
                type: 'line',

                emphasis: {
                    focus: 'series'
                },
                data: [59, 1, 179, 2568, 14514, 23078, 30493, 7510, 7588, 10112, 10791, 15079, 30575, 42717, 43542,
                    54027, 64707, 69959, 96129, 118930, 150934, 166458, 213084, 243252, 265844, 293051, 350269, 368154,
                    425608, 491525, 544936, 588521, 612707, 632575, 686756, 754516, 835343, 851577, 812699, 776626,
                    723551, 659287, 596327, 562378, 602872, 591328, 621667, 629773, 580305, 507725, 456340, 434466,
                    426554, 479462, 497268, 460650, 467221, 433513, 388397, 407827, 443949, 451723, 512027, 657242,
                    773618, 1033550, 1519415, 2156801, 2658762, 3344360, 3277557, 2796922, 2291565, 1792846, 1328136,
                    1035958, 915306, 874327, 961320, 1139532, 1380340, 1387445, 1572197]
            },

            {
                name: 'Europe',
                type: 'line',

                emphasis: {
                    focus: 'series'
                },
                data: [0, 0, 0, 3, 21, 17, 5, 473, 1775, 10996, 47016, 128800, 226965, 256555, 246716, 220353, 200937,
                    171804, 172300, 152502, 132654, 123125, 120650, 124445, 123054, 118781, 109905, 108530, 113466,
                    124720, 175636, 200927, 223077, 248112, 278204, 312032, 362035, 421984, 465681, 540414, 782483,
                    1076700, 1531276, 1908550, 2024445, 1902040, 1763932, 1704911, 1656846, 1702685, 1681888, 1724820,
                    1593215, 1903494, 1645561, 1495155, 1324058, 1164070, 959372, 980607, 1005015, 1139570, 1262281,
                    1477917, 1660710, 1674620, 1606638, 1596167, 1433429, 1103835, 878509, 676493, 557134, 439787,
                    355535, 360427, 302716, 398457, 539135, 694932, 999557, 1013735, 1018893
                ]
            },

            {
                name: 'Americas',
                type: 'line',

                emphasis: {
                    focus: 'series'
                },
                data: [0, 0, 1, 6, 10, 4, 5, 22, 89, 583, 4235, 37508, 123489, 223111, 260975, 254206, 286068, 295501,
                    299381, 320102, 386993, 437222, 466168, 483501, 596216, 697218, 780273, 872580, 930366, 1031343,
                    1015736, 960795, 967589, 851689, 843399, 825339, 711229, 766221, 777208, 743826, 800395, 790928,
                    933633, 1004406, 1146061, 1525762, 1664278, 1669229, 1964448, 2096343, 2324638, 1846715, 2070018,
                    2698701, 2409445, 2205870, 1800194, 1347319, 1309731, 1098154, 1080181, 1111981, 1258566, 1160132,
                    1420251, 1227623, 1627511, 1428528, 1437931, 1241061, 1232139, 1125942, 1267357, 1191961, 1204900,
                    1149714, 1122439, 1150821, 949611, 953997, 977000, 1060971, 1230703
                ]
            },

            {
                name: 'Africa',
                type: 'line',

                emphasis: {
                    focus: 'series'
                },
                data: [0, 0, 0, 0, 0, 0, 1, 0, 5, 69, 248, 1066, 3240, 4546, 5347, 7781, 9445, 12687, 18956, 21425,
                    27093, 35087, 42602, 53527, 62942, 76663, 95341, 117490, 126318, 125799, 110152, 90991, 70758,
                    68608, 57998, 53958, 53884, 54413, 52596, 55870, 62404, 67552, 72041, 77845, 86811, 92722, 90435,
                    97447, 98997, 117838, 130951, 162438, 158366, 227221, 203631, 183817, 132387, 93372, 81145, 81305,
                    62559, 72180, 66346, 71880, 77860, 82232, 78125, 84826, 77167, 62983, 63030, 60313, 66329, 74185,
                    92793, 120278, 164201, 212058, 251164, 285978, 282675, 240530, 270074
                ]
            },

            {
                name: 'Oceania',
                type: 'line',

                emphasis: {
                    focus: 'series'
                },
                data: [0, 0, 0, 4, 7, 3, 1, 7, 8, 55, 221, 1559, 2892, 2090, 772, 345, 128, 111, 156, 114, 82, 96, 75,
                    70, 188, 275, 817, 1380, 2033, 2679, 3607, 3320, 2647, 1964, 1684, 1239, 880, 932, 423, 1106, 1269,
                    1883, 2740, 2053, 3376, 2692, 1837, 1547, 1316, 886, 773, 590, 686, 581, 622, 169, 571, 248, 262,
                    189, 423, 597, 549, 2100, 1805, 1864, 1942, 1416, 1130, 858, 1231, 1883, 1385, 1020, 1001, 990,
                    1383, 2103, 3660, 4940, 7867, 4432, 12451
                ]
            },

        ]
    };
    return <ReactECharts option={option} style={{ height: 600 , width: "1000px"}}/>;
};
export default LineChartContinent;