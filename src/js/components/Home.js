import React from 'react';

import Sidebar from './sidebar/Sidebar';
import Panel from './panel/Panel';

import './Home.scss';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Panel/>
            </div>
        );
    }
}

export default Home;
