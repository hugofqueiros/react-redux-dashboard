import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Loader from '../components/loader/Loader';

import Config from '../config/config';

import * as UiActionsCreator from '../redux/actions/ui';
import * as CommonActionsCreator from '../redux/actions/common';

import './App.scss';

const mapStateToProps = state => ({
    appLoaded: state.common.appLoaded,
    sidebarOpen: state.ui.sidebarOpen,
    pathname: state.routing.locationBeforeTransitions.pathname
});

const mapDispatchToProps = dispatch => {
    return {
        UiActions: bindActionCreators(UiActionsCreator, dispatch),
        CommonActions: bindActionCreators(CommonActionsCreator, dispatch)
    };
};

const defaultStyles = {
    transition: 'all .3s ease-out',
    WebkitTransition: 'all .3s ease-out',
    msTransition: 'all .3s ease-out'
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.appName = Config.appName;
        this.mql = window.matchMedia("(min-width: 1024px)");
        this.isMobile = Config.isMobileDevice;
    }

    componentWillMount() {
        // change active sidebar item to the correct one on route path
        Config.sidebarItems.forEach((item, index) => {
            if(item.link === this.props.pathname) {
                this.props.UiActions.activeSidebarItem(index);
            }
        });
    }

    componentDidMount() {
        this.toogleAppLoad();
    }

    componentWillUpdate() {
        this.mql = window.matchMedia("(min-width: 1024px)");
    }

    toogleAppLoad = () => {
        this.props.CommonActions.appLoaded();
    };

    render () {
        if (this.props.appLoaded) {
            const {children} = this.props;
            let mainStyle = {};
            if (this.mql.matches || !this.isMobile) {
                if(this.props.sidebarOpen) {
                    mainStyle.left = '250px';
                    mainStyle.width = 'calc(100% - 250px)';
                } else {
                    mainStyle.left = '0px';
                    mainStyle.width = '100%';
                }
            }

            mainStyle = {...defaultStyles, ...mainStyle};

            return (
                <div className="App">
                    <Header
                        appName={this.appName}/>

                    <section className="MainWrapper" style={mainStyle}>
                        {children}
                    </section>
                    <Sidebar hasHeader={true}
                             hasFooter={false}
                             sidebarItems={Config.sidebarItems}
                    />
                </div>
            );
        }

        return (
            <div className="App">
                <Loader />
            </div>
        );
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(App));
