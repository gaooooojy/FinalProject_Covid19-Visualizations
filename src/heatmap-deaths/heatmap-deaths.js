import React from 'react';
import ReactECharts from 'echarts-for-react';

const HeatmapDeaths = () => {
    const option = {
        title: {
            text: 'Data on 14-day notification rate of new deaths in per 100,000 people by Continents',
            left: 'center'
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {},
            },
            right: '5%'
        },
        tooltip: {
            position: "top"
        },
        animation: false,
        grid: {

            top: "20%",
            left: '10%',
            right: '0%',
            bottom: '15%',
        },
        xAxis: {
            type: "category",
            data: ['2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09',
                '2020-10','2020-11','2020-12','2020-13','2020-14','2020-15','2020-16','2020-17','2020-18','2020-19','2020-20',
                '2020-21','2020-22','2020-23','2020-24','2020-25','2020-26','2020-27','2020-28','2020-29','2020-30','2020-31',
                '2020-32','2020-33','2020-34','2020-35','2020-36','2020-37','2020-38','2020-39','2020-40','2020-41','2020-42',
                '2020-43','2020-44','2020-45','2020-46','2020-47','2020-48','2020-49','2020-50','2020-51','2020-52','2020-53',
                '2021-01','2021-02','2021-03','2021-04','2021-05','2021-06','2021-07','2021-08','2021-09',
                '2021-10','2021-11','2021-12','2021-13','2021-14','2021-15','2021-16','2021-17','2021-18','2021-19','2021-20',
                '2021-21','2021-22','2021-23','2021-24','2021-25','2021-26','2021-27','2021-28','2021-29','2021-30'],
            splitArea: {
                show: true
            },
            name: 'year-week',
            nameLocation: 'center',
            nameTextStyle: {
                fontSize: 15,
                fontWeight: "bolder",
                padding: [14, 4, 4, 4]
            }
        },
        yAxis: {
            type: "category",
            data: ['Asia', 'Europe', 'Americas', 'Africa', 'Oceania'],
            splitArea: {
                show: true
            }
        },
        visualMap: {
            min: 0,
            max: 100,
            calculable: true,
            orient: "horizontal",
            type: 'piecewise',
            splitNumber: 10,
            left: "center",
            top: "10%",
            inRange:{
                color:['#F5E8E8','#991515']
            }
        },
        series: [
            {
                name: "Asia",
                type: "heatmap",
                data: [
                    [0,0,0],
                    [1,0,0.0002 ],
                    [2,0,0.0007 ],
                    [3,0,0.0195 ],
                    [4,0,0.0876 ],
                    [5,0,0.2022 ],
                    [6,0,0.3444 ],
                    [7,0,0.4154 ],
                    [8,0,0.2988 ],
                    [9,0,0.1791 ],
                    [10,0,0.2456 ],
                    [11,0,0.4234 ],
                    [12,0,0.5519 ],
                    [13,0,0.6243 ],
                    [14,0,0.7124 ],
                    [15,0,1.0285 ],
                    [16,0,1.0281 ],
                    [17,0,0.7789 ],
                    [18,0,0.8792 ],
                    [19,0,0.9688 ],
                    [20,0,1.0450 ],
                    [21,0,1.2346 ],
                    [22,0,1.5585 ],
                    [23,0,2.0142 ],
                    [24,0,2.8556 ],
                    [25,0,3.1026 ],
                    [26,0,2.9690 ],
                    [27,0,3.3371 ],
                    [28,0,3.8286 ],
                    [29,0,4.2512 ],
                    [30,0,4.2730 ],
                    [31,0,4.3470 ],
                    [32,0,4.5064 ],
                    [33,0,4.4591 ],
                    [34,0,4.5820 ],
                    [35,0,4.7587 ],
                    [36,0,4.9964 ],
                    [37,0,5.3905 ],
                    [38,0,5.4038 ],
                    [39,0,5.1862 ],
                    [40,0,5.0513 ],
                    [41,0,4.7759 ],
                    [42,0,4.4280 ],
                    [43,0,4.1652 ],
                    [44,0,4.2366 ],
                    [45,0,4.3839 ],
                    [46,0,4.4971 ],
                    [47,0,4.5820 ],
                    [48,0,4.3388 ],
                    [49,0,3.9480 ],
                    [50,0,3.5681 ],
                    [51,0,3.3234 ],
                    [52,0,3.0468 ],
                    [53,0,2.7952 ],
                    [54,0,2.8365 ],
                    [55,0,2.9239 ],
                    [56,0,3.0530 ],
                    [57,0,2.9054 ],
                    [58,0,2.4949 ],
                    [59,0,2.3312 ],
                    [60,0,2.5035 ],
                    [61,0,2.5313 ],
                    [62,0,2.3395 ],
                    [63,0,2.4606 ],
                    [64,0,2.6605 ],
                    [65,0,3.0848 ],
                    [66,0,4.6109 ],
                    [67,0,6.6521 ],
                    [68,0,9.3419 ],
                    [69,0,12.7221 ],
                    [70,0,15.0865 ],
                    [71,0,16.1731 ],
                    [72,0,16.3767 ],
                    [73,0,16.3618 ],
                    [74,0,14.4467 ],
                    [75,0,13.5231 ],
                    [76,0,12.1791 ],
                    [77,0,8.6165 ],
                    [78,0,7.2736 ],
                    [79,0,7.7880 ],
                    [80,0,9.0809 ],
                    [81,0,10.7661 ],
                    [82,0,12.4531],
                ]
            },
            {
                name: "Europe",
                type: "heatmap",
                data: [
                    [0,1,0],
                    [1,1,0.0000 ],
                    [2,1,0.0000 ],
                    [3,1,0.0000 ],
                    [4,1,0.0000 ],
                    [5,1,0.0000 ],
                    [6,1,0.0016 ],
                    [7,1,0.0048 ],
                    [8,1,0.0589 ],
                    [9,1,0.5606 ],
                    [10,1,2.7791 ],
                    [11,1,10.0694 ],
                    [12,1,26.7531 ],
                    [13,1,50.2566 ],
                    [14,1,65.0535 ],
                    [15,1,65.3906 ],
                    [16,1,56.1565 ],
                    [17,1,43.4391 ],
                    [18,1,32.8516 ],
                    [19,1,25.2387 ],
                    [20,1,17.9113 ],
                    [21,1,13.3942 ],
                    [22,1,12.0490 ],
                    [23,1,9.7910 ],
                    [24,1,9.8673 ],
                    [25,1,8.7278 ],
                    [26,1,6.6237 ],
                    [27,1,6.5590 ],
                    [28,1,6.1103 ],
                    [29,1,5.4923 ],
                    [30,1,5.3243 ],
                    [31,1,5.5087 ],
                    [32,1,5.7414 ],
                    [33,1,5.7425 ],
                    [34,1,5.7907 ],
                    [35,1,6.4604 ],
                    [36,1,7.1394 ],
                    [37,1,8.5927 ],
                    [38,1,10.4148 ],
                    [39,1,11.5685 ],
                    [40,1,13.9193 ],
                    [41,1,18.2133 ],
                    [42,1,25.0778 ],
                    [43,1,36.2080 ],
                    [44,1,52.9234 ],
                    [45,1,67.1952 ],
                    [46,1,75.3684 ],
                    [47,1,83.0752 ],
                    [48,1,86.2015 ],
                    [49,1,85.4155 ],
                    [50,1,84.6331 ],
                    [51,1,83.9282 ],
                    [52,1,80.8642 ],
                    [53,1,83.0987 ],
                    [54,1,89.8164 ],
                    [55,1,92.5666 ],
                    [56,1,92.1625 ],
                    [57,1,86.3730 ],
                    [58,1,75.9922 ],
                    [59,1,64.5260 ],
                    [60,1,56.5524 ],
                    [61,1,53.0550 ],
                    [62,1,51.4737 ],
                    [63,1,52.6203 ],
                    [64,1,57.2738 ],
                    [65,1,59.5529 ],
                    [66,1,61.8462 ],
                    [67,1,63.3183 ],
                    [68,1,61.5619 ],
                    [69,1,56.6547 ],
                    [70,1,48.7833 ],
                    [71,1,41.9976 ],
                    [72,1,34.7959 ],
                    [73,1,28.5987 ],
                    [74,1,23.3296 ],
                    [75,1,19.8839 ],
                    [76,1,18.0018 ],
                    [77,1,17.0995 ],
                    [78,1,16.9045 ],
                    [79,1,17.1935 ],
                    [80,1,17.6917 ],
                    [81,1,17.3357 ],
                    [82,1,18.5646],
                ]
            },
            {
                name: "Americas",
                type: "heatmap",
                data: [
                    [0,2,0],
                    [1,2,0.0000 ],
                    [2,2,0.0000 ],
                    [3,2,0.0000 ],
                    [4,2,0.0000 ],
                    [5,2,0.0000 ],
                    [6,2,0.0000 ],
                    [7,2,0.0000 ],
                    [8,2,0.0027 ],
                    [9,2,0.0262 ],
                    [10,2,0.0774 ],
                    [11,2,0.5591 ],
                    [12,2,2.9031 ],
                    [13,2,10.6107 ],
                    [14,2,22.8599 ],
                    [15,2,36.7494 ],
                    [16,2,41.5346 ],
                    [17,2,40.5763 ],
                    [18,2,43.4402 ],
                    [19,2,44.1929 ],
                    [20,2,43.9433 ],
                    [21,2,43.5342 ],
                    [22,2,44.9817 ],
                    [23,2,45.5984 ],
                    [24,2,45.0287 ],
                    [25,2,47.0342 ],
                    [26,2,46.4694 ],
                    [27,2,46.4489 ],
                    [28,2,49.5075 ],
                    [29,2,52.2510 ],
                    [30,2,54.8740 ],
                    [31,2,56.7161 ],
                    [32,2,55.9458 ],
                    [33,2,53.2659 ],
                    [34,2,50.4364 ],
                    [35,2,52.3792 ],
                    [36,2,47.9523 ],
                    [37,2,39.4420 ],
                    [38,2,39.3128 ],
                    [39,2,41.3936 ],
                    [40,2,41.7753 ],
                    [41,2,36.8111 ],
                    [42,2,33.8239 ],
                    [43,2,34.3534 ],
                    [44,2,34.5942 ],
                    [45,2,38.0326 ],
                    [46,2,42.2187 ],
                    [47,2,44.1508 ],
                    [48,2,50.6292 ],
                    [49,2,58.0403 ],
                    [50,2,64.2740 ],
                    [51,2,62.8842 ],
                    [52,2,60.8308 ],
                    [53,2,77.2093 ],
                    [54,2,89.4408 ],
                    [55,2,94.0224 ],
                    [56,2,97.6193 ],
                    [57,2,92.4055 ],
                    [58,2,91.6959 ],
                    [59,2,80.7446 ],
                    [60,2,70.5625 ],
                    [61,2,72.2636 ],
                    [62,2,69.6856 ],
                    [63,2,68.3887 ],
                    [64,2,71.8232 ],
                    [65,2,73.3637 ],
                    [66,2,81.8682 ],
                    [67,2,85.5512 ],
                    [68,2,78.4269 ],
                    [69,2,76.9049 ],
                    [70,2,72.2010 ],
                    [71,2,64.9905 ],
                    [72,2,62.9870 ],
                    [73,2,65.7020 ],
                    [74,2,66.7336 ],
                    [75,2,64.8309 ],
                    [76,2,61.8878 ],
                    [77,2,58.7098 ],
                    [78,2,53.2532 ],
                    [79,2,48.4279 ],
                    [80,2,43.4304 ],
                    [81,2,48.1196 ],
                    [82,2,47.3073],
                ]
            },
            {
                name: "Africa",
                type: "heatmap",
                data: [
                    [0,3,0],
                    [1,3,0.0000 ],
                    [2,3,0.0000 ],
                    [3,3,0.0000 ],
                    [4,3,0.0000 ],
                    [5,3,0.0000 ],
                    [6,3,0.0000 ],
                    [7,3,0.0000 ],
                    [8,3,0.0000 ],
                    [9,3,0.0023 ],
                    [10,3,0.0086 ],
                    [11,3,0.0343 ],
                    [12,3,0.1052 ],
                    [13,3,0.2920 ],
                    [14,3,0.4836 ],
                    [15,3,0.5135 ],
                    [16,3,0.4684 ],
                    [17,3,0.5077 ],
                    [18,3,0.6543 ],
                    [19,3,0.7167 ],
                    [20,3,0.7832 ],
                    [21,3,1.0923 ],
                    [22,3,1.3678 ],
                    [23,3,1.7179 ],
                    [24,3,2.1950 ],
                    [25,3,2.3421 ],
                    [26,3,2.4346 ],
                    [27,3,2.6758 ],
                    [28,3,2.8191 ],
                    [29,3,3.3746 ],
                    [30,3,3.8248 ],
                    [31,3,4.1033 ],
                    [32,3,4.0032 ],
                    [33,3,3.3574 ],
                    [34,3,2.9505 ],
                    [35,3,2.6317 ],
                    [36,3,2.2659 ],
                    [37,3,1.9919 ],
                    [38,3,1.8956 ],
                    [39,3,1.9090 ],
                    [40,3,2.1771 ],
                    [41,3,2.4145 ],
                    [42,3,2.3771 ],
                    [43,3,2.5839 ],
                    [44,3,3.0580 ],
                    [45,3,3.1043 ],
                    [46,3,3.2103 ],
                    [47,3,3.2596 ],
                    [48,3,3.1387 ],
                    [49,3,3.4463 ],
                    [50,3,4.1010 ],
                    [51,3,5.1156 ],
                    [52,3,5.9190 ],
                    [53,3,7.1971 ],
                    [54,3,8.6709 ],
                    [55,3,9.3779 ],
                    [56,3,9.3354 ],
                    [57,3,7.2666 ],
                    [58,3,5.3172 ],
                    [59,3,4.7379 ],
                    [60,3,3.8808 ],
                    [61,3,3.2208 ],
                    [62,3,3.0670 ],
                    [63,3,3.1028 ],
                    [64,3,3.0752 ],
                    [65,3,2.8774 ],
                    [66,3,2.7766 ],
                    [67,3,3.0879 ],
                    [68,3,3.3888 ],
                    [69,3,3.2626 ],
                    [70,3,3.1536 ],
                    [71,3,3.0536 ],
                    [72,3,2.8975 ],
                    [73,3,2.9901 ],
                    [74,3,3.0155 ],
                    [75,3,3.1999 ],
                    [76,3,3.8606 ],
                    [77,3,4.9417 ],
                    [78,3,6.5446 ],
                    [79,3,7.9206 ],
                    [80,3,8.6373 ],
                    [81,3,9.6213 ],
                    [82,3,9.9938],
                ]
            },
            {
                name: "Oceania",
                type: "heatmap",
                data: [
                    [0,4,0],
                    [1,4,0.0000 ],
                    [2,4,0.0000 ],
                    [3,4,0.0000 ],
                    [4,4,0.0000 ],
                    [5,4,0.0000 ],
                    [6,4,0.0000 ],
                    [7,4,0.0000 ],
                    [8,4,0.0330 ],
                    [9,4,0.0989 ],
                    [10,4,0.1319 ],
                    [11,4,0.1222 ],
                    [12,4,0.3178 ],
                    [13,4,0.8301 ],
                    [14,4,1.3428 ],
                    [15,4,1.1475 ],
                    [16,4,0.8789 ],
                    [17,4,0.8057 ],
                    [18,4,0.3906 ],
                    [19,4,0.0977 ],
                    [20,4,0.1221 ],
                    [21,4,0.1221 ],
                    [22,4,0.0244 ],
                    [23,4,0.0000 ],
                    [24,4,0.0000 ],
                    [25,4,0.0488 ],
                    [26,4,0.0488 ],
                    [27,4,0.0977 ],
                    [28,4,0.4395 ],
                    [29,4,1.1475 ],
                    [30,4,2.1729 ],
                    [31,4,3.5158 ],
                    [32,4,4.6144 ],
                    [33,4,5.1272 ],
                    [34,4,5.4446 ],
                    [35,4,6.3967 ],
                    [36,4,5.3469 ],
                    [37,4,2.9542 ],
                    [38,4,2.0509 ],
                    [39,4,1.6846 ],
                    [40,4,1.1963 ],
                    [41,4,0.7202 ],
                    [42,4,0.6962 ],
                    [43,4,0.7431 ],
                    [44,4,0.9109 ],
                    [45,4,1.0233 ],
                    [46,4,0.9757 ],
                    [47,4,0.8091 ],
                    [48,4,0.5711 ],
                    [49,4,0.7377 ],
                    [50,4,0.7853 ],
                    [51,4,0.3807 ],
                    [52,4,0.3569 ],
                    [53,4,0.4272 ],
                    [54,4,0.4034 ],
                    [55,4,0.2136 ],
                    [56,4,0.1424 ],
                    [57,4,0.1899 ],
                    [58,4,0.1424 ],
                    [59,4,0.1424 ],
                    [60,4,0.1899 ],
                    [61,4,0.2848 ],
                    [62,4,0.3085 ],
                    [63,4,0.5458 ],
                    [64,4,0.6882 ],
                    [65,4,0.7119 ],
                    [66,4,0.6408 ],
                    [67,4,0.7357 ],
                    [68,4,0.8069 ],
                    [69,4,0.6645 ],
                    [70,4,0.5933 ],
                    [71,4,0.5933 ],
                    [72,4,0.8069 ],
                    [73,4,0.6408 ],
                    [74,4,0.2610 ],
                    [75,4,0.0712 ],
                    [76,4,0.2848 ],
                    [77,4,0.5221 ],
                    [78,4,0.7831 ],
                    [79,4,1.2103 ],
                    [80,4,2.3020 ],
                    [81,4,2.9902 ],
                    [82,4,3.6309],
                ]
            },

        ]
    }

    return <ReactECharts option={option} style={{ height: 600 , width: "1000px"}}/>;
};
export default HeatmapDeaths;
