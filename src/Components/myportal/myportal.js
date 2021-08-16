import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'antd/dist/antd.css';
import { List, Typography} from 'antd';

const { Title } = Typography;

class MyPortal extends Component {
    render(): React.ReactNode {
        return (
            <Typography>
                <Title level={3}>Bookmarks</Title>
            </Typography>
        )
    }
};

export default MyPortal