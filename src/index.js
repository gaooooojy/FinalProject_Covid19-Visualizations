// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import './index.css';
// import { Layout, Menu } from 'antd';
// import {
//     MenuUnfoldOutlined,
//     MenuFoldOutlined,
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
// } from '@ant-design/icons';
//
// const { Header, Sider, Content } = Layout;
//
// class SiderDemo extends React.Component {
//     state = {
//         collapsed: false,
//     };
//
//     toggle = () => {
//         this.setState({
//             collapsed: !this.state.collapsed,
//         });
//     };
//
//     render() {
//         return (
//             <Layout>
//                 <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
//                     <div className="logo" />
//                     <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//                         <Menu.Item key="1" icon={<UserOutlined />}>
//                             nav 1
//                         </Menu.Item>
//                         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//                             nav 2
//                         </Menu.Item>
//                         <Menu.Item key="3" icon={<UploadOutlined />}>
//                             nav 3
//                         </Menu.Item>
//                     </Menu>
//                 </Sider>
//                 <Layout className="site-layout">
//                     <Header className="site-layout-background" style={{ padding: 0 }}>
//                         {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//                             className: 'trigger',
//                             onClick: this.toggle,
//                         })}
//                     </Header>
//                     <Content
//                         className="site-layout-background"
//                         style={{
//                             margin: '24px 16px',
//                             padding: 24,
//                             minHeight: 280,
//                         }}
//                     >
//                         Content
//                     </Content>
//                 </Layout>
//             </Layout>
//         );
//     }
// }
//
// ReactDOM.render(<SiderDemo />, mountNode);
import React from 'react';
import ReactDOM from 'react-dom';

import SiderDemo from './Navi'
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(<SiderDemo />, document.getElementById('root'));
reportWebVitals();
