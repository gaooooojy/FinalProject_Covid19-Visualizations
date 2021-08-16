import { Layout, Menu, Typography, Avatar } from 'antd';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    MenuUnfoldOutlined, MenuFoldOutlined, HomeOutlined, GlobalOutlined, UserOutlined, CalendarOutlined,
    CarryOutOutlined, EyeOutlined, ShopOutlined, AreaChartOutlined, LineChartOutlined, HeatMapOutlined,
    AppstoreOutlined, PieChartOutlined

} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Navi.css';
import MyPortal from "./myportal/myportal";
import Dashboard from "./dashboard/dashboard";
import GlobalWeekly from "./global-weekly/global-weekly";
import GlobalDaily from "./global-daily/global-daily";
import GlobalDailyDeaths from "./global-daily-deaths/global-daily-deaths";
import Map from './map/map'
import MapDeaths from './map-deaths/map-deaths'
import LineChartContinent from "./line-chart-continent/line-chart-continent";
import LineChartContinentDeaths from "./line-chart-continent-deaths/line-chart-continent-deaths";
import LineChartCountries from "./line-chart-countries/line-chart-countries";
import LineChartCountriesDeaths from "./line-chart-countries-deaths/line-chart-countries-deaths";
import CumulativeContinents from "./cumulative-continents/cumulative-continents";
import CumulativeContinentsDeaths from "./cumulative-continents-deaths/cumulative-continents-deaths";
import CumulativeCountries from "./cumulative-countries/cumulative-countries";
import CumulativeCountriesDeaths from "./cumulative-countries-deaths/cumulative-countries-deaths";
import Brazil from "./country-Brazil/country-Brazil";
import China from "./country-China/country-China";
import France from "./country-France/country-France";
import India from "./country-India/country-India";
import Russia from "./country-Russia/country-Russia";
import UnitedKingdom from "./country-UK/country-UK";
import UnitedStatesOfAmerica from "./country-USA/country-USA";
import Heatmap from "./heatmap/heatmap";
import HeatmapDeaths from "./heatmap-deaths/heatmap-deaths";
import HeatmapCountries from "./heatmap-countries/heatmap-countries";
import HeatmapCountriesDeaths from "./heatmap-countries-deaths/heatmap-countries-deaths";
import PieLineChart from "./pie-line-chart/pie-line-chart";
import BarChart from "./bar-chart/bar-chart";
import LoginInfo from "./Login/LoginInfo";


const { Title } = Typography;
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            UserName: {
                display: this.state.collapsed ? 'flex' : 'none',
                alignItems: this.state.collapsed ? 'center' : 'center',
                marginLeft: this.state.collapsed ? '10px': "10px",
                marginRight: this.state.collapsed ? '10px': "10px"
            }
            }
        );
    }

    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <Router>
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                    trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div style={{display:'flex', justifyContent: 'center', height:'120px'}}>
                    {/*<Avatar*/}
                    {/*    size={40}*/}
                    {/*    style={{ color: '#DE6FA1', backgroundColor: '#F8E2EC'}}>*/}
                    {/*    JG</Avatar>*/}

                    {/*<text*/}
                    {/*    style={this.state.collapsed ? this.state.UserName: UserName}>Jingyi Gao</text>*/}
                        <LoginInfo />
                    </div>

                    <Menu
                        onClick={this.handleClick}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <Menu.Item icon={<UserOutlined />} ><Link to="/myportal">My Portal</Link>

                        </Menu.Item>

                        <Menu.Item icon={<AppstoreOutlined />} ><Link to="/dashboard">Dashboard</Link>

                        </Menu.Item>

                        <SubMenu key="sub1" icon={<GlobalOutlined />} title="World Map">
                            <Menu.Item key="1"><Link to="/map">Confirmed Situation</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/mapdeaths">Deaths Situation</Link></Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub3" icon={<EyeOutlined />} title="Global Situation">
                            <Menu.Item key="7" icon={<CalendarOutlined />} ><Link to="/globalweekly">Weekly</Link></Menu.Item>
                            <SubMenu title="Daily" icon={<CarryOutOutlined />} >
                                <Menu.Item key="8"><Link to="/globaldaily">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="24"><Link to="/globaldailydeaths">Deaths</Link></Menu.Item>
                            </SubMenu>
                        </SubMenu>

                        <SubMenu key="sub5" icon={<ShopOutlined />} title="Continents">

                            <SubMenu icon={<LineChartOutlined />} title="Basic Chart">
                                <Menu.Item key="9"><Link to="/linechartscontinent">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="10"><Link to="/linechartscontinentdeaths">Deaths</Link></Menu.Item>
                            </SubMenu>

                            <SubMenu icon={<AreaChartOutlined />} title="Cumulative">
                                <Menu.Item key="3"><Link to="/cumulativecontinents">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/cumulativecontinentsdeaths">Deaths</Link></Menu.Item>
                            </SubMenu>

                            <SubMenu icon={<HeatMapOutlined />} title="Heatmap">
                                <Menu.Item key="25"><Link to="/heatmap">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="26"><Link to="/heatmapdeaths">Deaths</Link></Menu.Item>
                            </SubMenu>

                        </SubMenu>

                        <SubMenu key="sub4" icon={<HomeOutlined />} title="Main Countries">


                            <SubMenu icon={<LineChartOutlined />} title="Basic Chart">
                                <Menu.Item key="15"><Link to="/linechartscontries">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="16"><Link to="/linechartscontriesdeaths">Deaths</Link></Menu.Item>
                                <Menu.Item key="17"><Link to="/Brazil">Brazil</Link></Menu.Item>
                                <Menu.Item key="18"><Link to="/China">China</Link></Menu.Item>
                                <Menu.Item key="19"><Link to="/France">France</Link></Menu.Item>
                                <Menu.Item key="20"><Link to="/India">India</Link></Menu.Item>
                                <Menu.Item key="21"><Link to="/Russia">Russia</Link></Menu.Item>
                                <Menu.Item key="22"><Link to="/UnitedKingdom">UK</Link></Menu.Item>
                                <Menu.Item key="23"><Link to="/UnitedStatesOfAmerica">USA</Link></Menu.Item>

                            </SubMenu>

                            <SubMenu icon={<AreaChartOutlined />} title="Cumulative">
                                <Menu.Item key="5"><Link to="/cumulativecountries">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="6"><Link to="/cumulativecountriesdeaths">Deaths</Link></Menu.Item>
                            </SubMenu>

                            <SubMenu icon={<HeatMapOutlined />} title="Heatmap">
                                <Menu.Item key="27"><Link to="/heatmapcountries">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="28"><Link to="/heatmapcountriesdeaths">Deaths</Link></Menu.Item>
                            </SubMenu>

                        </SubMenu>

                        <Menu.Item icon={<PieChartOutlined />} ><Link to="/pielinechart">Covid-19 with age</Link>
                        </Menu.Item>

                        <Menu.Item icon={<PieChartOutlined />} ><Link to="/barchart">Covid-19 with race</Link>
                        </Menu.Item>

                    </Menu>

                </Sider>
                <Layout className="site-layout"  style={{ marginLeft: 200 ,display:"block"}}>
                    <Header className="site-layout-background" style={{ padding: 10, position:"fixed",zIndex: 1,
                        overflow: 'auto',right:0,height:'10vh',width:"85%",borderBottom:'1px solid #E6E6E6'}}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,

                        })}
                        <Title level={4} style={{display: 'flex', alignItems: 'center'}}>
                            Data Visualization and COVID-19 data</Title>

                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            marginTop: '80px',
                            marginLeft:'2px',
                            paddingTop: 24,
                            minHeight: 750,
                            width: "100%"
                        }}
                    >
                        <Route exact path="/myportal" component={MyPortal} />
                        <Route exact path="/dashboard" component={Dashboard} />
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
                    </Content>
                </Layout>
            </Layout>
            </Router>
        );
    }
}

export default SiderDemo;
