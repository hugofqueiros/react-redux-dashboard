import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Panel from '../components/panel/Panel';

import './App.css';

const mapStateToProps = state => ({
    appLoaded: state.common.appLoaded,
    appName: state.common.appName
});

const mapDispatchToProps = dispatch => ({

});

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('App props children: ', this.props.children);
    };

    componentWillMount() {

    };

    render () {
        return (
            <div className="App">
                <Header
                    appName={this.props.appName}/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
