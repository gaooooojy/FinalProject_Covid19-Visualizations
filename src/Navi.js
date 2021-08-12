import { Layout, Menu, Typography, Avatar } from 'antd';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SettingOutlined,
    GlobalOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Navi.css';
import GlobalWeekly from "./global-weekly/global-weekly";
import Map from './map/map'
import MapDeaths from './map-deaths/map-deaths'
import LineChartContinent from "./line-chart-continent/line-chart-continent";
import LineChartContinentDeaths from "./line-chart-continent-deaths/line-chart-continent-deaths";
import LineChartCountries from "./line-chart-countries/line-chart-countries";
import LineChartCountriesDeaths from "./line-chart-countries-deaths/line-chart-countries-deaths";
import StuckColumnChart from './stuck-column-chart/stuck-column-chart';
import StuckColumnChartDeaths from "./stuck-column-chart-deaths/stuck-column-chart-deaths";
import StuckColumnChartCountries from "./stuck-column-chart-countries/stuck-column-chart-countries";
import StuckColumnChartCountriesDeaths from "./stuck-column-chart-countries-deaths/stuck-column-chart-countries-deaths";

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
        let UserName={
            color:'black', display: 'flex', alignItems: 'center',
            marginLeft:'10px', marginRight:'10px'
        }

        return (
            <Router>
            <Layout>
                <Sider


                    trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div style={{display:'flex', justifyContent: 'center', height:'80px'}}>
                    <Avatar
                        size={40}
                        style={{ color: '#DE6FA1', backgroundColor: '#F8E2EC'}}>
                        JG</Avatar>

                    <text
                        style={this.state.collapsed ? this.state.UserName: UserName}>Jingyi Gao</text>

                    </div>

                    <Menu
                        onClick={this.handleClick}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <Menu.Item icon={<GlobalOutlined />} >My Portal

                        </Menu.Item>


                        <SubMenu key="sub1" icon={<GlobalOutlined />} title="World Map">
                            <Menu.Item key="1"><Link to="/map">Confirmed Situation</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/mapdeaths">Deaths Situation</Link></Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub3" icon={<GlobalOutlined />} title="Global Situation">
                            <Menu.Item key="7"><Link to="/globalweekly">Weekly</Link></Menu.Item>
                            {/*<Menu.Item key="8"><Link to="/barchartsdeaths">Deaths</Link></Menu.Item>*/}
                        </SubMenu>

                        <SubMenu key="sub5" icon={<SettingOutlined />} title="Stuck Column Charts">
                            <SubMenu  title="Continents">
                                <Menu.Item key="11"><Link to="/stuckcolumnchart">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="12"><Link to="/stuckcolumnchartdeaths">Deaths</Link></Menu.Item>
                            </SubMenu>

                            <SubMenu title="Main Countries">
                                <Menu.Item key="13"><Link to="/stuckcolumnchartcountries">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="14"><Link to="/stuckcolumnchartcountriesdeaths">Deaths</Link></Menu.Item>

                            </SubMenu>

                        </SubMenu>

                        <SubMenu key="sub4" icon={<SettingOutlined />} title="Basic Charts">
                            <SubMenu title="Continents">
                                <Menu.Item key="9"><Link to="/linechartscontinent">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="10"><Link to="/linechartscontinentdeaths">Deaths</Link></Menu.Item>
                            </SubMenu>

                            <SubMenu title="Main Countries">
                                <Menu.Item key="15"><Link to="/linechartscontries">Confirmed Cases</Link></Menu.Item>
                                <Menu.Item key="16"><Link to="/linechartscontriesdeaths">Deaths</Link></Menu.Item>

                            </SubMenu>
                        </SubMenu>

                    </Menu>

                </Sider>
                <Layout className="site-layout" >
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
                        <Route exact path="/map" component={Map} />
                        <Route exact path="/mapdeaths" component={MapDeaths} />
                        <Route exact path="/linechartscontinent" component={LineChartContinent} />
                        <Route exact path="/linechartscontinentdeaths" component={LineChartContinentDeaths} />
                        <Route exact path="/linechartscontries" component={LineChartCountries} />
                        <Route exact path="/linechartscontriesdeaths" component={LineChartCountriesDeaths} />
                        <Route exact path="/globalweekly" component={GlobalWeekly} />
                        {/*<Route exact path="/barchartsdeaths" component={BarChartDeaths} />*/}
                        <Route exact path="/stuckcolumnchart" component={StuckColumnChart} />
                        <Route exact path="/stuckcolumnchartdeaths" component={StuckColumnChartDeaths} />
                        <Route exact path="/stuckcolumnchartcountries" component={StuckColumnChartCountries} />
                        <Route exact path="/stuckcolumnchartcountriesdeaths" component={StuckColumnChartCountriesDeaths} />
                    </Content>
                </Layout>
            </Layout>
            </Router>
        );
    }
}

export default SiderDemo;
