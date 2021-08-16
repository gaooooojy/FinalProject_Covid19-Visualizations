import React from 'react';

import './App.css';
import "antd/dist/antd.css";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Map from './Components/map/map'
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

                    </Route>

                </Switch>
            </Router>

        </div>
    );
}

export default App;

