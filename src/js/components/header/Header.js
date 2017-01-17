import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as UiActionsCreator from '../../redux/actions/ui';
import { Link } from 'react-router';

import DatePicker from '../datepicker/';

import './Header.scss';

const mapStateToProps = ({ ui }, { params }) => {
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

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    toogleSidebar() {
        this.props.UiActions.toogleSidebar();
    }

    toogleSearchbar() {
        this.props.UiActions.toogleSearchbar();
    }

    render() {
        return (
            <nav className="Header u-shadow">
                <div className="Header-menu-container">
                    <button className="btn Header-menu" onClick={this.toogleSidebar.bind(this)}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="Header-title">
                    <Link to="/">{this.props.appName}</Link>
                    <Link to="/overview">Overview</Link>
                </div>
                <div className="Header-search-container">
                    <button className="btn Header-search" onClick={this.toogleSearchbar.bind(this)}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                <div className="Header-datepicker-container">
                    <DatePicker />
                </div>
            </nav>
        )
    }
}

Header.propTypes = {
    appName: React.PropTypes.string
};

Header.defaultProps = {
    appName: 'React Redux Dashboard'
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
