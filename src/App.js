import React from 'react';

import './App.css';
import "antd/dist/antd.css";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Map from './Components/map/map'
import Line from './Components/line-chart/line-chart'
import MyMenu from './Components/Navi'

function App() {

    return (
        <div className="App">
            <Router>

                <MyMenu />

                <Switch>
                    <Route path="/map">
                        <Map />
                    </Route>
                    <Route path="/linecharts">
                        <Line />
                    </Route>

                </Switch>
            </Router>

        </div>
    );
}

export default App;

