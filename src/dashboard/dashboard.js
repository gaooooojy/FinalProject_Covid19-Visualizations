import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'antd/dist/antd.css';
import { List, Typography} from 'antd';
import './dashboard.css'
import {GlobalOutlined, LinkOutlined} from '@ant-design/icons';
import GlobalWeekly from "../global-weekly/global-weekly";
import GlobalDaily from "../global-daily/global-daily";
import GlobalDailyDeaths from "../global-daily-deaths/global-daily-deaths";
import Map from '../map/map'
import MapDeaths from '../map-deaths/map-deaths'
import StuckColumnChart from '../stuck-column-chart/stuck-column-chart';
import StuckColumnChartDeaths from "../stuck-column-chart-deaths/stuck-column-chart-deaths";
import StuckColumnChartCountries from "../stuck-column-chart-countries/stuck-column-chart-countries";
import StuckColumnChartCountriesDeaths from "../stuck-column-chart-countries-deaths/stuck-column-chart-countries-deaths";
import LineChartContinent from "../line-chart-continent/line-chart-continent";
import LineChartContinentDeaths from "../line-chart-continent-deaths/line-chart-continent-deaths";
import LineChartCountries from "../line-chart-countries/line-chart-countries";
import LineChartCountriesDeaths from "../line-chart-countries-deaths/line-chart-countries-deaths";
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
        "The data is collected weekly. The column chart can be also changed into a line chart.","/globalweekly"],

    ['Global Situation with Confirmed Cases (daily)',
        "A basic column chart for total confirmed cases and the average number of cases in 7 days all over the world." +
        "The data is collected daily. The column chart can be also changed into a line chart." +
        "It can also be chosen to zoom on a specific area and recover.","/globaldaily"],

    ['Global Situation with Deaths (daily)',
        "A basic column chart for total deaths and the average number of deaths in 7 days all over the world." +
        "The data is collected daily. The column chart can be also changed into a line chart." +
        "It can also be chosen to zoom on a specific area and recover.","/globaldailydeaths"],

    ['Stuck Column Chart of Continents (Confirmed Cases)',
        "A stuck column chart for total confirmed cases in 5 different continents: Asia, Europe, Americas," +
        "Africa and Oceania. The data is collected weekly. ","/stuckcolumnchart"],

    ['Stuck Column Chart of Continents (Deaths)',
        "A stuck column chart for total deaths in 5 different continents: Asia, Europe, Americas," +
        "Africa and Oceania. The data is collected weekly. ","/stuckcolumnchartdeaths"],

    ['Line Chart of Continents (Confirmed Cases)',
        "A basic line chart for showing total confirmed cases in 5 different continents: Asia, Europe, " +
        "Americas, Africa, Oceania. The data is collected weekly. The line chart can be also changed into a " +
        "column chart.","/linechartscontinent"],

    ['Line Chart of Continents (Deaths)',
        "A basic line chart for showing total deaths in 5 different continents: Asia, Europe, " +
        "Americas, Africa, Oceania. The data is collected weekly. The line chart can be also changed into a " +
        "column chart.","/linechartscontinentdeaths"],

    ['Data on 14-day notification rate of new cases in per 100,000 people by Continents',
        "A heatmap for showing the 14-day notification rate of new confirmed cases in every 100,000 people in " +
        "5 different continents: Asia, Europe, Americas, Africa, Oceania. The data is collected weekly.",
        "/heatmap"],

    ['Data on 14-day notification rate of new deaths in per 100,000 people by Continents',
        "A heatmap for showing the 14-day notification rate of new deaths in every 100,000 people in " +
        "5 different continents: Asia, Europe, Americas, Africa, Oceania. The data is collected weekly.",
        "/heatmapdeaths"],

    ['Stuck Column Chart of Main Countries (Confirmed Cases)',
        "A stuck column chart for total confirmed cases in 7 main countries: United States Of America, " +
        "India, Brazil, Russia, France, United Kingdom and China. The data is collected weekly.",
        "/stuckcolumnchartcountries"],

    ['Stuck Column Chart of Main Countries (Deaths)',
        "A stuck column chart for total deaths in 7 main countries: United States Of America, " +
        "India, Brazil, Russia, France, United Kingdom and China. The data is collected weekly.",
        "/stuckcolumnchartcountriesdeaths"],

    ['Line Chart of Main Countries (Confirmed Cases)',
        "A basic line chart for showing total confirmed cases in 7 main countries: United States Of America, India, " +
        "Brazil, Russia, France, United Kingdom and China. The data is collected weekly. " +
        "The line chart can be also changed into a column chart.","/linechartscountries"],

    ['Line Chart of Main Countries (Deaths)',
        "A basic line chart for showing total deaths in 7 main countries: United States Of America, India, " +
        "Brazil, Russia, France, United Kingdom and China. The data is collected weekly. " +
        "The line chart can be also changed into a column chart.","/linechartscountriesdeaths"],

    ['Data on 14-day notification rate of new cases in per 100,000 people by Main Countries',
        "A heatmap for showing the 14-day notification rate of new confirmed cases in every 100,000 people in " +
        "7 main countries: United States Of America, India, Brazil, Russia, France, United Kingdom and China. " +
        "The data is collected weekly.", "/heatmapcountries"],

    ['Data on 14-day notification rate of new deaths in per 100,000 people by Main Countries',
        "A heatmap for showing the 14-day notification rate of new deaths in every 100,000 people in " +
        "7 main countries: United States Of America, India, Brazil, Russia, France, United Kingdom and China. " +
        "The data is collected weekly.", "/heatmapcountriesdeaths"],





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
                    <div style={{width:"500px",fontSize:"20px",fontWeight:"500"}}>Description</div>
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
                <Route exact path="/stuckcolumnchart" component={StuckColumnChart} />
                <Route exact path="/stuckcolumnchartdeaths" component={StuckColumnChartDeaths} />
                <Route exact path="/stuckcolumnchartcountries" component={StuckColumnChartCountries} />
                <Route exact path="/stuckcolumnchartcountriesdeaths" component={StuckColumnChartCountriesDeaths} />
                {/*<Route exact path="/pielinechart" component={PieLineChart} />*/}
                <Route exact path="/heatmap" component={Heatmap} />
                <Route exact path="/heatmapdeaths" component={HeatmapDeaths} />
                <Route exact path="/heatmapcountries" component={HeatmapCountries} />
                <Route exact path="/heatmapcountriesdeaths" component={HeatmapCountriesDeaths} />
            </List>
            </Typography>

        );
    }
}

export default Dashboard