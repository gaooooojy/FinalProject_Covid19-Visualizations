import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'antd/dist/antd.css';
import { List, Typography} from 'antd';
import './dashboard.css'
import {LinkOutlined} from '@ant-design/icons';
import GlobalWeekly from "../global-weekly/global-weekly";
import GlobalDaily from "../global-daily/global-daily";
import GlobalDailyDeaths from "../global-daily-deaths/global-daily-deaths";
import Map from '../map/map'
import MapDeaths from '../map-deaths/map-deaths'
import LineChartContinent from "../line-chart-continent/line-chart-continent";
import LineChartContinentDeaths from "../line-chart-continent-deaths/line-chart-continent-deaths";
import LineChartCountries from "../line-chart-countries/line-chart-countries";
import LineChartCountriesDeaths from "../line-chart-countries-deaths/line-chart-countries-deaths";
import CumulativeContinents from "../cumulative-continents/cumulative-continents";
import CumulativeContinentsDeaths from "../cumulative-continents-deaths/cumulative-continents-deaths";
import CumulativeCountries from "../cumulative-countries/cumulative-countries";
import CumulativeCountriesDeaths from "../cumulative-countries-deaths/cumulative-countries-deaths";
import Brazil from "../country-Brazil/country-Brazil";
import China from "../country-China/country-China";
import France from "../country-France/country-France";
import India from "../country-India/country-India";
import Russia from "../country-Russia/country-Russia";
import UnitedKingdom from "../country-UK/country-UK";
import UnitedStatesOfAmerica from "../country-USA/country-USA";
import Heatmap from "../heatmap/heatmap";
import HeatmapDeaths from "../heatmap-deaths/heatmap-deaths";
import HeatmapCountries from "../heatmap-countries/heatmap-countries";
import HeatmapCountriesDeaths from "../heatmap-countries-deaths/heatmap-countries-deaths";
import PieLineChart from "../pie-line-chart/pie-line-chart";
import BarChart from "../bar-chart/bar-chart";
const { Title } = Typography;
const data = [

    ['World Map of COVID-19 (Confirmed Cases)',
        "The cumulative number of confirmed cases all over the world, displayed in a choropleth map. " +
        "The map is colored for countries by different depth of one color, " +
        "related to different degree of the total number of confirmed cases in countries","/map"],

    ['World Map of COVID-19 (Deaths)',
        "The cumulative number of deaths all over the world, displayed in a choropleth map. " +
    "The map is colored for countries by different depth of one color, " +
    "related to different degree of the total number of deaths in countries","/mapdeaths"],


    ['Global Situation with Confirmed Cases and Deaths (weekly)',
        "A basic column chart for both total confirmed cases and deaths all over the world." +
        "The data is collected weekly. The column chart can be also changed into a line chart." +
        "It can also be saved as an image.","/globalweekly"],

    ['Global Situation with Confirmed Cases (daily)',
        "A combination of a column chart and a line chart for total confirmed cases and the average " +
        "number of cases in 7 days all over the world." +
        "The data is collected daily. " +
        "It can also be chosen to zoom on a specific area and recover." +
        "It can also be saved as an image.","/globaldaily"],

    ['Global Situation with Deaths (daily)',
        "A combination of a column chart and a line chart for total deaths and the average number of " +
        "deaths in 7 days all over the world." +
        "The data is collected daily. " +
        "It can also be chosen to zoom on a specific area and recover." +
        "It can also be saved as an image.","/globaldailydeaths"],


    ['Line Chart of Continents (Confirmed Cases)',
        "A basic line chart for showing total confirmed cases in 5 different continents: Asia, Europe, " +
        "Americas, Africa, Oceania every week. The data is collected weekly. The line chart can be also changed into a " +
        "column chart and a stuck column chart. It can also be saved as an image.","/linechartscontinent"],

    ['Line Chart of Continents (Deaths)',
        "A basic line chart for showing total deaths in 5 different continents: Asia, Europe, " +
        "Americas, Africa, Oceania every week. The data is collected weekly. The line chart can be also changed into a " +
        "column chart and a stuck column chart. It can also be saved as an image.","/linechartscontinentdeaths"],


    ['Cumulative number of Confirmed Cases of Continents',
        "A basic line chart for showing cumulative confirmed cases in 5 different continents: " +
        "Asia, Europe, Americas, Africa, Oceania. The data is collected weekly." +
        "The line chart can be also changed into a column chart and a stuck column chart." +
        "It can also be saved as an image.",
        "/cumulativecontinents"],

    ['Cumulative number of Deaths of Continents',
        "A basic line chart for showing cumulative deaths in 5 different continents: " +
        "Asia, Europe, Americas, Africa, Oceania. The data is collected weekly." +
        "The line chart can be also changed into a column chart and a stuck column chart." +
        "It can also be saved as an image.",
        "/cumulativecontinentsdeaths"],


    ['Data on 14-day notification rate of new cases in per 100,000 people by Continents',
        "A heatmap for showing the 14-day notification rate of new confirmed cases in every 100,000 people in " +
        "5 different continents: Asia, Europe, Americas, Africa, Oceania. The data is collected weekly." +
        "It can also be saved as an image.",
        "/heatmap"],

    ['Data on 14-day notification rate of new deaths in per 100,000 people by Continents',
        "A heatmap for showing the 14-day notification rate of new deaths in every 100,000 people in " +
        "5 different continents: Asia, Europe, Americas, Africa, Oceania. The data is collected weekly." +
        "It can also be saved as an image.",
        "/heatmapdeaths"],


    ['Line Chart of Main Countries (Confirmed Cases)',
        "A basic line chart for showing total confirmed cases in 7 main countries: United States Of America, India, " +
        "Brazil, Russia, France, United Kingdom and China every week. The data is collected weekly. " +
        "The line chart can be also changed into a column chart and a stuck column chart." +
        "It can also be saved as an image.","/linechartscountries"],

    ['Line Chart of Main Countries (Deaths)',
        "A basic line chart for showing total deaths in 7 main countries: United States Of America, India, " +
        "Brazil, Russia, France, United Kingdom and China every week. The data is collected weekly. " +
        "The line chart can be also changed into a column chart and a stuck column chart." +
        "It can also be saved as an image.","/linechartscountriesdeaths"],


    ['Situation in Brazil with Confirmed Cases and Deaths',
        "A basic line chart for showing total confirmed cases and deaths in Brazil every week." +
        "The data is collected weekly. The line chart can be also changed into a column chart. " +
        "It can also be saved as an image.", "/Brazil"],

    ['Situation in China with Confirmed Cases and Deaths',
        "A basic line chart for showing total confirmed cases and deaths in China every week." +
        "The data is collected weekly. The line chart can be also changed into a column chart. " +
        "It can also be saved as an image.", "/China"],

    ['Situation in France with Confirmed Cases and Deaths',
        "A basic line chart for showing total confirmed cases and deaths in France every week." +
        "The data is collected weekly. The line chart can be also changed into a column chart. " +
        "It can also be saved as an image.", "/France"],

    ['Situation in India with Confirmed Cases and Deaths',
        "A basic line chart for showing total confirmed cases and deaths in India every week." +
        "The data is collected weekly. The line chart can be also changed into a column chart. " +
        "It can also be saved as an image.", "/India"],

    ['Situation in Russia with Confirmed Cases and Deaths',
        "A basic line chart for showing total confirmed cases and deaths in Russia every week." +
        "The data is collected weekly. The line chart can be also changed into a column chart. " +
        "It can also be saved as an image.", "/Russia"],

    ['Situation in United Kingdom with Confirmed Cases and Deaths',
        "A basic line chart for showing total confirmed cases and deaths in United Kingdom every week." +
        "The data is collected weekly. The line chart can be also changed into a column chart. " +
        "It can also be saved as an image.", "/UnitedKingdom"],

    ['Situation in United States of America with Confirmed Cases and Deaths',
        "A basic line chart for showing total confirmed cases and deaths in United States of America every week." +
        "The data is collected weekly. The line chart can be also changed into a column chart. " +
        "It can also be saved as an image.", "/UnitedStatesOfAmerica"],


    ['Cumulative number of Confirmed Cases of Main Countries',
        "A basic line chart for showing cumulative confirmed cases in 7 main countries: United States Of America, " +
        "India, Brazil, Russia, France, United Kingdom and China. The data is collected weekly." +
        "The line chart can be also changed into a column chart and a stuck column chart." +
        "It can also be saved as an image.",
        "/cumulativecountries"],

    ['Cumulative number of Deaths of Main Countries',
        "A basic line chart for showing cumulative deaths in 7 main countries: United States Of America, " +
        "India, Brazil, Russia, France, United Kingdom and China. The data is collected weekly." +
        "The line chart can be also changed into a column chart and a stuck column chart." +
        "It can also be saved as an image.",
        "/cumulativecountries"],


    ['Data on 14-day notification rate of new cases in per 100,000 people by Main Countries',
        "A heatmap for showing the 14-day notification rate of new confirmed cases in every 100,000 people in " +
        "7 main countries: United States Of America, India, Brazil, Russia, France, United Kingdom and China. " +
        "The data is collected weekly. It can also be saved as an image.", "/heatmapcountries"],

    ['Data on 14-day notification rate of new deaths in per 100,000 people by Main Countries',
        "A heatmap for showing the 14-day notification rate of new deaths in every 100,000 people in " +
        "7 main countries: United States Of America, India, Brazil, Russia, France, United Kingdom and China. " +
        "The data is collected weekly. It can also be saved as an image.", "/heatmapcountriesdeaths"],


    ['New cases by different age groups of EU/EAA Member states',
        "The chart shows the number of new confirmed cases in different age groups of EU/EAA Member states every week." +
        "It is a combination between a pie chart and a line chart, sharing the same dataset. " +
        "The pie chart displays the proportion of new cases in different age groups in a specific week. " +
        "The line chart displays the changes of different age groups through the time. The pie chart will change" +
        "its displayed data when you are hovering the mouse on a specific position of x-axis, that is the week number." +
        "The data is collected weekly. It can also be saved as an image.", "/pielinechart"],

    ['Rates of deaths by ethnic group per 100,000 people in England and Wales',
        "A bar chart for showing the rates of deaths in every 100,000 people in England and Wales. " +
        "Data is categorized by ethnic group and these people are all 9 to 110 years of age." +
        "Data was collected from 2 March 2020 to 28 July 2020. It can also be saved as an image.",
        "/barchart"]



];
class Dashboard extends Component{
    render(): React.ReactNode {
        return(
            <Typography>
                <Title level={3}>Dashboard</Title>
                <div style={{marginLeft:"50px",display:"flex",justifyContent:"space-between",
                    alignItems: "center", alignContent: "center", padding:"16px 24px",
                    width: "1000px", height: "50px"}}>
                    <div style={{width:"200px",fontSize:"20px",fontWeight:"500"}}>Title</div>
                    <div style={{width:"500px",fontSize:"20px",fontWeight:"500",marginLeft:"20px"}}>Description</div>
                    <div style={{fontSize:"20px",fontWeight:"500"}}>Link</div>
                </div>
            <List
                title="Dashboard"
                size="large"
                bordered
                itemLayout="horizontal"
                dataSource={data}
                style={{marginLeft:"30px"}}
                renderItem={item => <List.Item style={{width: "1000px", height: "auto"}}>
                    <div style={{width:"200px"}}>{item[0]}</div>
                    <div style={{width:"500px"}}>{item[1]}</div>
                    <div><Link to={item[2]}><LinkOutlined /></Link></div>
                </List.Item>
                }>
                <Route exact path="/map" component={Map} />
                <Route exact path="/mapdeaths" component={MapDeaths} />

                <Route exact path="/cumulativecontinents" component={CumulativeContinents} />
                <Route exact path="/cumulativecontinentsdeaths" component={CumulativeContinentsDeaths} />
                <Route exact path="/cumulativecountries" component={CumulativeCountries} />
                <Route exact path="/cumulativecountriesdeaths" component={CumulativeCountriesDeaths} />

                <Route exact path="/linechartscontinent" component={LineChartContinent} />
                <Route exact path="/linechartscontinentdeaths" component={LineChartContinentDeaths} />
                <Route exact path="/linechartscontries" component={LineChartCountries} />
                <Route exact path="/linechartscontriesdeaths" component={LineChartCountriesDeaths} />

                <Route exact path="/Brazil" component={Brazil} />
                <Route exact path="/China" component={China} />
                <Route exact path="/France" component={France} />
                <Route exact path="/India" component={India} />
                <Route exact path="/Russia" component={Russia} />
                <Route exact path="/UnitedKingdom" component={UnitedKingdom} />
                <Route exact path="/UnitedStatesOfAmerica" component={UnitedStatesOfAmerica} />

                <Route exact path="/globalweekly" component={GlobalWeekly} />
                <Route exact path="/globaldaily" component={GlobalDaily} />
                <Route exact path="/globaldailydeaths" component={GlobalDailyDeaths} />

                <Route exact path="/heatmap" component={Heatmap} />
                <Route exact path="/heatmapdeaths" component={HeatmapDeaths} />
                <Route exact path="/heatmapcountries" component={HeatmapCountries} />
                <Route exact path="/heatmapcountriesdeaths" component={HeatmapCountriesDeaths} />

                <Route exact path="/pielinechart" component={PieLineChart} />
                <Route exact path="/barchart" component={BarChart} />
            </List>
            </Typography>

        );
    }
}

export default Dashboard