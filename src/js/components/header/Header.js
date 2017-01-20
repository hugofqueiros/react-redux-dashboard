import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as UiActionsCreator from '../../redux/actions/ui';

import DatePicker from '../datepicker/';

import './Header.scss';

const mapStateToProps = ({ui}, {params}) => {
    return {
        sidebarOpen: ui.sidebarOpen,
        searchBarOpen: ui.searchBarOpen
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        UiActions: bindActionCreators(UiActionsCreator, dispatch)
    }
};

const Header = (props) => {
    const toogleSidebar = () => {
        props.UiActions.toogleSidebar();
    };

    const toogleSearchbar = () => {
        props.UiActions.toogleSearchbar();
    };

    return (
        <nav className="Header u-shadow">
            <div className="Header-menu-container">
                <button className="btn Header-menu" onClick={toogleSidebar}>
                    <i className="fa fa-bars"></i>
                </button>
            </div>
            <div className="Header-title">
                <h3>{props.appName}</h3>
            </div>
            <div className="Header-search-container">
                <button className="btn Header-search" onClick={toogleSearchbar}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <div className="Header-datepicker-container">
                <DatePicker />
            </div>
        </nav>
    );
};

Header.propTypes = {
    appName: React.PropTypes.string
};

Header.defaultProps = {
    appName: 'React Redux Dashboard'
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
