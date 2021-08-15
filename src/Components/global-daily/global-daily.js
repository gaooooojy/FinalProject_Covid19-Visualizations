import React from 'react';
import ReactECharts from 'echarts-for-react';

const GlobalDaily = () => {
    var timeData = ['2020/1/22','2020/1/23','2020/1/24','2020/1/25','2020/1/26','2020/1/27','2020/1/28','2020/1/29','2020/1/30','2020/1/31','2020/2/1','2020/2/2','2020/2/3','2020/2/4','2020/2/5','2020/2/6','2020/2/7','2020/2/8','2020/2/9','2020/2/10','2020/2/11','2020/2/12','2020/2/13','2020/2/14','2020/2/15','2020/2/16','2020/2/17','2020/2/18','2020/2/19','2020/2/20','2020/2/21','2020/2/22','2020/2/23','2020/2/24','2020/2/25','2020/2/26','2020/2/27','2020/2/28','2020/2/29','2020/3/1','2020/3/2','2020/3/3','2020/3/4','2020/3/5','2020/3/6','2020/3/7','2020/3/8','2020/3/9','2020/3/10','2020/3/11','2020/3/12','2020/3/13','2020/3/14','2020/3/15','2020/3/16','2020/3/17','2020/3/18','2020/3/19','2020/3/20','2020/3/21','2020/3/22','2020/3/23','2020/3/24','2020/3/25','2020/3/26','2020/3/27','2020/3/28','2020/3/29','2020/3/30','2020/3/31','2020/4/1','2020/4/2','2020/4/3','2020/4/4','2020/4/5','2020/4/6','2020/4/7','2020/4/8','2020/4/9','2020/4/10','2020/4/11','2020/4/12','2020/4/13','2020/4/14','2020/4/15','2020/4/16','2020/4/17','2020/4/18','2020/4/19','2020/4/20','2020/4/21','2020/4/22','2020/4/23','2020/4/24','2020/4/25','2020/4/26','2020/4/27','2020/4/28','2020/4/29','2020/4/30','2020/5/1','2020/5/2','2020/5/3','2020/5/4','2020/5/5','2020/5/6','2020/5/7','2020/5/8','2020/5/9','2020/5/10','2020/5/11','2020/5/12','2020/5/13','2020/5/14','2020/5/15','2020/5/16','2020/5/17','2020/5/18','2020/5/19','2020/5/20','2020/5/21','2020/5/22','2020/5/23','2020/5/24','2020/5/25','2020/5/26','2020/5/27','2020/5/28','2020/5/29','2020/5/30','2020/5/31','2020/6/1','2020/6/2','2020/6/3','2020/6/4','2020/6/5','2020/6/6','2020/6/7','2020/6/8','2020/6/9','2020/6/10','2020/6/11','2020/6/12','2020/6/13','2020/6/14','2020/6/15','2020/6/16','2020/6/17','2020/6/18','2020/6/19','2020/6/20','2020/6/21','2020/6/22','2020/6/23','2020/6/24','2020/6/25','2020/6/26','2020/6/27','2020/6/28','2020/6/29','2020/6/30','2020/7/1','2020/7/2','2020/7/3','2020/7/4','2020/7/5','2020/7/6','2020/7/7','2020/7/8','2020/7/9','2020/7/10','2020/7/11','2020/7/12','2020/7/13','2020/7/14','2020/7/15','2020/7/16','2020/7/17','2020/7/18','2020/7/19','2020/7/20','2020/7/21','2020/7/22','2020/7/23','2020/7/24','2020/7/25','2020/7/26','2020/7/27','2020/7/28','2020/7/29','2020/7/30','2020/7/31','2020/8/1','2020/8/2','2020/8/3','2020/8/4','2020/8/5','2020/8/6','2020/8/7','2020/8/8','2020/8/9','2020/8/10','2020/8/11','2020/8/12','2020/8/13','2020/8/14','2020/8/15','2020/8/16','2020/8/17','2020/8/18','2020/8/19','2020/8/20','2020/8/21','2020/8/22','2020/8/23','2020/8/24','2020/8/25','2020/8/26','2020/8/27','2020/8/28','2020/8/29','2020/8/30','2020/8/31','2020/9/1','2020/9/2','2020/9/3','2020/9/4','2020/9/5','2020/9/6','2020/9/7','2020/9/8','2020/9/9','2020/9/10','2020/9/11','2020/9/12','2020/9/13','2020/9/14','2020/9/15','2020/9/16','2020/9/17','2020/9/18','2020/9/19','2020/9/20','2020/9/21','2020/9/22','2020/9/23','2020/9/24','2020/9/25','2020/9/26','2020/9/27','2020/9/28','2020/9/29','2020/9/30','2020/10/1','2020/10/2','2020/10/3','2020/10/4','2020/10/5','2020/10/6','2020/10/7','2020/10/8','2020/10/9','2020/10/10','2020/10/11','2020/10/12','2020/10/13','2020/10/14','2020/10/15','2020/10/16','2020/10/17','2020/10/18','2020/10/19','2020/10/20','2020/10/21','2020/10/22','2020/10/23','2020/10/24','2020/10/25','2020/10/26','2020/10/27','2020/10/28','2020/10/29','2020/10/30','2020/10/31','2020/11/1','2020/11/2','2020/11/3','2020/11/4','2020/11/5','2020/11/6','2020/11/7','2020/11/8','2020/11/9','2020/11/10','2020/11/11','2020/11/12','2020/11/13','2020/11/14','2020/11/15','2020/11/16','2020/11/17','2020/11/18','2020/11/19','2020/11/20','2020/11/21','2020/11/22','2020/11/23','2020/11/24','2020/11/25','2020/11/26','2020/11/27','2020/11/28','2020/11/29','2020/11/30','2020/12/1','2020/12/2','2020/12/3','2020/12/4','2020/12/5','2020/12/6','2020/12/7','2020/12/8','2020/12/9','2020/12/10','2020/12/11','2020/12/12','2020/12/13','2020/12/14','2020/12/15','2020/12/16','2020/12/17','2020/12/18','2020/12/19','2020/12/20','2020/12/21','2020/12/22','2020/12/23','2020/12/24','2020/12/25','2020/12/26','2020/12/27','2020/12/28','2020/12/29','2020/12/30','2020/12/31','2021/1/1','2021/1/2','2021/1/3','2021/1/4','2021/1/5','2021/1/6','2021/1/7','2021/1/8','2021/1/9','2021/1/10','2021/1/11','2021/1/12','2021/1/13','2021/1/14','2021/1/15','2021/1/16','2021/1/17','2021/1/18','2021/1/19','2021/1/20','2021/1/21','2021/1/22','2021/1/23','2021/1/24','2021/1/25','2021/1/26','2021/1/27','2021/1/28','2021/1/29','2021/1/30','2021/1/31','2021/2/1','2021/2/2','2021/2/3','2021/2/4','2021/2/5','2021/2/6','2021/2/7','2021/2/8','2021/2/9','2021/2/10','2021/2/11','2021/2/12','2021/2/13','2021/2/14','2021/2/15','2021/2/16','2021/2/17','2021/2/18','2021/2/19','2021/2/20','2021/2/21','2021/2/22','2021/2/23','2021/2/24','2021/2/25','2021/2/26','2021/2/27','2021/2/28','2021/3/1','2021/3/2','2021/3/3','2021/3/4','2021/3/5','2021/3/6','2021/3/7','2021/3/8','2021/3/9','2021/3/10','2021/3/11','2021/3/12','2021/3/13','2021/3/14','2021/3/15','2021/3/16','2021/3/17','2021/3/18','2021/3/19','2021/3/20','2021/3/21','2021/3/22','2021/3/23','2021/3/24','2021/3/25','2021/3/26','2021/3/27','2021/3/28','2021/3/29','2021/3/30','2021/3/31','2021/4/1','2021/4/2','2021/4/3','2021/4/4','2021/4/5','2021/4/6','2021/4/7','2021/4/8','2021/4/9','2021/4/10','2021/4/11','2021/4/12','2021/4/13','2021/4/14','2021/4/15','2021/4/16','2021/4/17','2021/4/18','2021/4/19','2021/4/20','2021/4/21','2021/4/22','2021/4/23','2021/4/24','2021/4/25','2021/4/26','2021/4/27','2021/4/28','2021/4/29','2021/4/30','2021/5/1','2021/5/2','2021/5/3','2021/5/4','2021/5/5','2021/5/6','2021/5/7','2021/5/8','2021/5/9','2021/5/10','2021/5/11','2021/5/12','2021/5/13','2021/5/14','2021/5/15','2021/5/16','2021/5/17','2021/5/18','2021/5/19','2021/5/20','2021/5/21','2021/5/22','2021/5/23','2021/5/24','2021/5/25','2021/5/26','2021/5/27','2021/5/28','2021/5/29','2021/5/30','2021/5/31','2021/6/1','2021/6/2','2021/6/3','2021/6/4','2021/6/5','2021/6/6','2021/6/7','2021/6/8','2021/6/9','2021/6/10','2021/6/11','2021/6/12','2021/6/13','2021/6/14','2021/6/15','2021/6/16','2021/6/17','2021/6/18','2021/6/19','2021/6/20','2021/6/21','2021/6/22','2021/6/23','2021/6/24','2021/6/25','2021/6/26','2021/6/27','2021/6/28','2021/6/29','2021/6/30','2021/7/1','2021/7/2','2021/7/3','2021/7/4','2021/7/5','2021/7/6','2021/7/7','2021/7/8','2021/7/9','2021/7/10','2021/7/11','2021/7/12','2021/7/13','2021/7/14','2021/7/15','2021/7/16','2021/7/17','2021/7/18','2021/7/19','2021/7/20','2021/7/21','2021/7/22','2021/7/23','2021/7/24','2021/7/25','2021/7/26','2021/7/27','2021/7/28','2021/7/29','2021/7/30','2021/7/31','2021/8/1','2021/8/2','2021/8/3','2021/8/4','2021/8/5','2021/8/6','2021/8/7','2021/8/8','2021/8/9']

    const option = {
        title: {
            text: 'Global Situation with Confirmed Cases (daily)',
            left: 'center'
        },

        legend: {
            data: ['Confirmed Cases', '7-day-average' ],
            top: '10%'
        },

        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: "none"
                },
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
                name: 'Date',
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
                itemStyle: {
                    color: "#657ECC"
                },
                data: [0,98,286,492,685,809,2651,589,2068,1692,2111,4749,3100,4011,3745,3160,3593,2734,3030,2609,2042,418,15153,6527,2143,2183,2035,1882,500,560,629,1761,380,564,854,977,1360,1386,1891,2382,1986,2596,2310,2811,3915,4094,3949,4173,4824,7667,5795,14380,11092,11275,14799,15962,19586,27095,30886,32135,35055,42771,41062,51038,62953,65100,67222,59463,65282,76841,83083,83018,83758,59165,71401,73391,69869,83393,86887,85393,74314,119931,70994,84275,77602,95485,88114,77155,76962,75550,75757,81345,84324,84173,82354,71345,70240,75680,77180,83543,88304,79089,74979,77779,80598,90161,88660,90136,85179,74832,76635,84512,85080,96138,95803,94348,78042,89128,96815,102129,106642,106373,104597,94192,86641,93814,102743,119133,120810,136493,106289,96006,121953,114237,130960,131214,133739,112339,102396,125086,135122,138063,128721,135256,132243,119676,142123,143758,141089,179863,157429,127693,139369,166851,172632,178338,191687,178204,163933,155110,174562,217615,209953,201376,193811,183960,163990,211416,214177,226839,232683,216477,192219,191515,222224,231456,251354,242772,236209,213376,207114,233592,279915,282909,281067,254083,213055,226406,252701,291749,280204,290690,248339,230966,206468,257942,276554,285153,282265,258521,224691,225955,257581,276634,289212,303731,247724,214467,207706,258287,279560,272574,261232,264238,206166,225204,244031,283783,283919,283652,263848,220986,262855,264939,283560,281500,314006,270081,230503,217903,242061,284886,299931,321448,286668,242777,263748,285476,304547,314731,326109,292232,252187,275884,284551,276316,353173,330989,288678,251365,254998,282717,326398,318324,297971,332134,261390,300604,326189,351067,361352,360938,356949,287090,291651,319376,382241,407154,411851,373735,315191,386983,389238,444817,472628,496913,456651,360663,486499,470235,511956,550416,570924,476743,462495,562889,554020,511620,596704,644945,596956,483978,501431,559528,648742,649421,652156,594926,473975,533943,611400,627202,653648,668668,587653,488197,524872,590398,636623,582550,686897,586110,488664,508325,612557,651766,694169,683556,642044,538840,519619,643583,670038,674819,704807,635156,530874,525148,636239,733891,740218,720670,611467,533488,548950,650328,695104,666639,468082,514817,434028,495885,665060,761538,744690,555114,589804,527405,553850,740131,783791,881581,803039,760147,588746,619524,705805,748270,755102,767200,639023,529130,514952,608067,693033,656533,658971,567915,445498,497063,556509,598322,614364,590474,515343,381449,446633,458041,522060,466925,535571,372156,397932,315940,427809,435987,441363,428758,373182,293777,283202,350977,395558,403463,412482,370575,314668,288208,388952,445002,447435,443097,389131,303412,305705,310501,441096,453210,446928,410578,368282,298638,414836,466980,476911,489377,454100,360375,348755,473224,539455,553620,561743,498871,423386,416660,514439,633806,651493,641466,584656,469991,458300,568586,683331,711876,633769,529645,552946,489276,604358,684701,839977,748241,664537,690830,616293,779698,817011,816949,854864,787956,685279,693690,854189,889956,899622,903634,821165,722321,682741,844634,905993,897727,879143,796586,674155,681573,807534,841172,870148,832487,785584,641325,621838,738658,760160,725371,717974,627922,548435,540054,622555,671842,628629,625818,578189,476410,454489,532234,568742,554704,500267,481221,391384,378877,463797,485725,489225,419755,398253,322673,321275,366870,419477,449533,421240,371854,302913,308486,371595,398531,392495,405978,347380,300315,297371,372204,437146,403836,421763,362851,309938,331820,384220,393863,440647,440040,375123,326895,371745,453828,463856,481544,508183,426453,364346,440391,518923,541394,570552,598841,473734,422578,499704,532039,559747,567088,689292,474286,432521,544042,612152,651308,643928,736595,508677,463031,587221,640774,671127,687940,821309,544732,437309,656601
                ]
            },
            {
                type: 'line',
                name: '7-day-average',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#3A56AD"
                },
                data: [0,49,128,219,312,395,717,801,1083,1284,1515,2096,2423,2617,3068,3224,3496,3585,3339,3269,2988,2512,4226,4645,4560,4439,4357,4334,4346,2261,1419,1364,1107,897,750,818,932,1040,1059,1345,1548,1797,1987,2195,2556,2871,3094,3407,3725,4490,4917,6412,7411,8458,9976,11567,13270,16313,18671,21677,25074,29070,32656,37149,42271,47159,52172,55658,58874,63986,68563,71430,74095,72944,74650,75808,74812,74856,75409,75643,77807,84740,84397,86455,85628,86856,87245,87651,81512,82163,80946,81481,79887,79324,80066,79264,78505,78494,77899,77788,78378,77912,78431,79508,80210,82065,82796,83057,83927,83906,83743,84302,83576,84645,85454,86764,87223,89007,90765,93200,94701,96211,97675,99982,99627,99198,99286,101070,103133,107689,109418,110755,114775,116417,118107,119593,119200,120064,120977,121424,124408,125423,125067,125283,128127,130595,133029,134263,134695,142001,145169,144519,147332,150865,154989,160311,162000,164968,170145,172394,173495,179921,184438,185822,188051,190912,192181,197446,196955,199367,203839,207077,208257,212189,213733,216202,219704,221145,223964,226987,229215,230839,237762,242270,247740,250294,250248,253004,255734,257424,257038,258413,257592,260151,257302,258051,255880,256587,255384,256838,255942,258726,258674,258686,259266,262332,260790,259329,256722,256823,257241,254864,248793,251152,249966,252466,250429,251033,252653,255856,255800,257918,263296,266283,266251,265906,270242,271132,272492,266070,262802,262991,265624,266688,269057,270811,277360,283562,286371,288485,289151,289946,291290,293024,292892,288859,294350,295047,294540,294422,291439,291177,298331,293353,288636,294844,296276,302791,309001,312526,318672,327668,331213,334884,333605,332632,337085,343628,350902,353300,357314,370933,380913,389853,399206,411358,423203,429699,443916,455487,465078,476190,486763,489634,504181,515094,527063,527015,533628,544202,561376,564445,555665,556452,576041,583572,584602,584312,582883,587527,594938,591860,592464,594823,593784,595816,594520,591520,592866,582709,585313,585092,585159,582795,585961,588124,604070,603592,611583,618751,620364,624797,627407,624643,627679,626695,625557,626346,625297,634419,643762,646028,642644,643017,646418,648430,642889,632378,596294,582487,568278,560698,562802,572293,583443,595876,606588,619928,628209,638933,642112,661668,697086,721421,730184,739566,734662,729587,711519,706399,689096,680579,665640,651678,643787,629705,614244,604086,592138,589583,582217,568687,562663,552878,545368,536218,529013,514947,504052,482989,475146,454691,457045,438375,434056,421760,418108,402849,402996,388117,383440,372464,366688,361274,358949,358576,361561,362276,367701,374764,381046,385420,388070,386462,388962,377755,377197,378022,378569,381633,390900,389890,404795,408493,411879,417943,424161,423031,430191,438532,448885,459844,470182,476578,485579,495280,501168,514646,528628,540017,552272,558930,564879,572614,579689,588315,587216,579357,591208,595633,600743,600939,619239,635592,654862,674560,692705,717754,736655,733366,748597,766229,765436,776492,787134,797555,809365,816332,821076,826368,824804,823439,825730,825459,821961,818449,811568,811402,806102,796841,792902,786236,784665,779975,771441,761602,750029,729346,712987,690464,677194,665511,648924,636308,622487,609322,602217,591928,579705,566802,552073,541512,523576,509724,497577,486776,476999,465139,455785,444283,432431,422615,414386,400539,391075,385405,385617,381846,379023,377196,377871,374879,366731,364550,361054,360683,359095,359182,364698,366319,368574,370784,372158,377080,378796,372613,377872,380483,382236,384658,390362,400306,410305,416147,425882,433215,438565,448372,457671,468748,481463,494414,501169,509488,517961,519835,522456,521962,534883,534962,536382,542716,554161,567241,578218,584976,589889,594248,600416,604505,607336,613624,625726,630876,627202,637113

                ]
            }

        ]
    };
    return <ReactECharts option={option} style={{ height: 600 , width: "1000px"}}/>;
};
export default GlobalDaily;