import { Layout, Menu, Typography, Avatar } from 'antd';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    MenuUnfoldOutlined, MenuFoldOutlined, SettingOutlined, GlobalOutlined, UserOutlined, CalendarOutlined,
    CarryOutOutlined, EyeOutlined, ShopOutlined, AreaChartOutlined, LineChartOutlined, HeatMapOutlined,
    AppstoreOutlined

} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Navi.css';
import Dashboard from "./dashboard/dashboard";
import GlobalWeekly from "./global-weekly/global-weekly";
import GlobalDaily from "./global-daily/global-daily";
import GlobalDailyDeaths from "./global-daily-deaths/global-daily-deaths";
import Map from './map/map'
import MapDeaths from './map-deaths/map-deaths'
import StuckColumnChart from './stuck-column-chart/stuck-column-chart';
import StuckColumnChartDeaths from "./stuck-column-chart-deaths/stuck-column-chart-deaths";
import StuckColumnChartCountries from "./stuck-column-chart-countries/stuck-column-chart-countries";
import StuckColumnChartCountriesDeaths from "./stuck-column-chart-countries-deaths/stuck-column-chart-countries-deaths";
import LineChartContinent from "./line-chart-continent/line-chart-continent";
import LineChartContinentDeaths from "./line-chart-continent-deaths/line-chart-continent-deaths";
import LineChartCountries from "./line-chart-countries/line-chart-countries";
import LineChartCountriesDeaths from "./line-chart-countries-deaths/line-chart-countries-deaths";
import Brazil from "./country-Brazil/country-Brazil";
import China from "./country-China/country-China";
import France from "./country-France/country-France";
import India from "./country-India/country-India";
import Russia from "./country-Russia/country-Russia";
import UnitedKingdom from "./country-UK/country-UK";
import UnitedStatesOfAmerica from "./country-USA/country-USA";
import PieLineChart from "./pie-line-chart/pie-line-chart";
import Heatmap from "./heatmap/heatmap";
import HeatmapDeaths from "./heatmap-deaths/heatmap-deaths";
import HeatmapCountries from "./heatmap-countries/heatmap-countries";
import HeatmapCountriesDeaths from "./heatmap-countries-deaths/heatmap-countries-deaths";
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
                        <Menu.Item icon={<UserOutlined />} >My Portal

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
                            <SubMenu icon={<AreaChartOutlined />} title="Stuck Column Chart">
                                <Menu.Item key="11"><Link to="/stuckcolumnchart">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="12"><Link to="/stuckcolumnchartdeaths">Deaths</Link></Menu.Item>
                            </SubMenu>

                            <SubMenu icon={<LineChartOutlined />} title="Basic Chart">
                                <Menu.Item key="9"><Link to="/linechartscontinent">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="10"><Link to="/linechartscontinentdeaths">Deaths</Link></Menu.Item>
                            </SubMenu>

                            <SubMenu icon={<HeatMapOutlined />} title="Heatmap">
                                <Menu.Item key="25"><Link to="/heatmap">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="26"><Link to="/heatmapdeaths">Deaths</Link></Menu.Item>
                            </SubMenu>

                        </SubMenu>

                        <SubMenu key="sub4" icon={<SettingOutlined />} title="Main Countries">

                            <SubMenu icon={<AreaChartOutlined />} title="Stuck Column Chart">
                                <Menu.Item key="13"><Link to="/stuckcolumnchartcountries">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="14"><Link to="/stuckcolumnchartcountriesdeaths">Deaths</Link></Menu.Item>
                            </SubMenu>

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

                            <SubMenu icon={<HeatMapOutlined />} title="Heatmap">
                                <Menu.Item key="27"><Link to="/heatmapcountries">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="28"><Link to="/heatmapcountriesdeaths">Deaths</Link></Menu.Item>
                            </SubMenu>

                        </SubMenu>

                        <Menu.Item icon={<GlobalOutlined />} ><Link to="/pielinechart">Pie-Line Chart</Link>

                        </Menu.Item>

                    </Menu>

                </Sider>
                <Layout className="site-layout"  style={{ marginLeft: 200 }}>
                    <Header className="site-layout-background" style={{ padding: 10 }}>
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
                            margin: '24px 16px',
                            paddingTop: 24,
                            minHeight: 750,
                            width: "100%"
                        }}
                    >
                        <Route exact path="/dashboard" component={Dashboard} />
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
                        <Route exact path="/pielinechart" component={PieLineChart} />
                        <Route exact path="/heatmap" component={Heatmap} />
                        <Route exact path="/heatmapdeaths" component={HeatmapDeaths} />
                        <Route exact path="/heatmapcountries" component={HeatmapCountries} />
                        <Route exact path="/heatmapcountriesdeaths" component={HeatmapCountriesDeaths} />
                    </Content>
                </Layout>
            </Layout>
            </Router>
        );
    }
}

export default SiderDemo;
