import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Panel from '../components/panel/Panel';
import Config from '../config';

import * as UiActionsCreator from '../redux/actions/ui';

import './App.scss';

const mapStateToProps = state => ({
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    sidebarOpen: state.common.sidebarOpen
});

const mapDispatchToProps = dispatch => {
    return {
        UiActions: bindActionCreators(UiActionsCreator, dispatch)
    }
};

const defaultStyles = {
    transition: 'all .3s ease-out',
    WebkitTransition: 'all .3s ease-out',
    msTransition: 'all .3s ease-out'//,
    //backgroundColor: 'rgba(0,0,0,.02)'
    //width: '100%'
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.appName = Config.appName;
    };

    componentWillMount() {
        console.log('ComponentWillMount');
    };

    componentDidMount() {
        console.log('ComponentDidMount');
    }

    render () {
        let {children} = this.props;

        let mainStyle = {};

        if(this.props.sidebarOpen) {
            //mainStyle.width = '100%';
            //mainStyle.transform = 'translateX(0%)';
            mainStyle.marginLeft = '0px';
            mainStyle.width = 'calc(100% - 250px)';

        } else {
            //mainStyle.transform = 'translateX(-25%)';
            mainStyle.marginLeft = '-250px';
            mainStyle.width = '100%';
            //mainStyle.width = '100%';
        }

        mainStyle = {...defaultStyles, ...mainStyle};
        console.log('mainStyle: ', mainStyle);

        return (
            <div className="App">
                <Header
                    appName={this.appName}/>
                <Sidebar hasHeader={true} hasFooter={true}/>
                <section className="Layout">
                    <div className="MainWrapper" style={mainStyle}>
                        {children}
                    </div>
                </section>
            </div>
        );

        // return (
        //     <div className="App">
        //         <Header
        //             appName={this.appName}/>
        //         <Sidebar hasHeader={true} hasFooter={true}/>
        //         <section className="Layout" style={mainStyle}>
        //             {children}
        //         </section>
        //     </div>
        // );
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(App));
