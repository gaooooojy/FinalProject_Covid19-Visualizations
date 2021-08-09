import { Layout, Menu, Typography, Avatar } from 'antd';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AppstoreOutlined,
    SettingOutlined,
    GlobalOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Navi.css';
import BarChart from './bar-chart/bar-chart';
import Map from './map/map'
import MapDeaths from './map-deaths/map-deaths'
import LineChart from "./line-chart/line-chart";

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
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
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

                        <SubMenu key="sub1" icon={<GlobalOutlined />} title="World Map">
                            <Menu.Item key="1"><Link to="/map">Confirmed Situation</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/mapdeaths">Deaths Situation</Link></Menu.Item>
                        </SubMenu>



                        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Bar Charts">
                            <Menu.Item key="5"><Link to="/linecharts">Line Charts</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/barcharts">Bar Charts</Link></Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<SettingOutlined />} title="Line Charts">
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>


                </Sider>
                <Layout className="site-layout">
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
                        <Route exact path="/linecharts" component={LineChart} />
                        <Route exact path="/barcharts" component={BarChart} />
                    </Content>
                </Layout>
            </Layout>
            </Router>
        );
    }
}

export default SiderDemo;
