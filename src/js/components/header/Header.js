import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {withRouter} from 'react-router';
import {Link} from 'react-router';
import * as UiActionsCreator from '../../redux/actions/ui';
import * as UserActionsCreator from '../../redux/actions/user';

import Clock from '../clock/Clock';
import Datepicker from '../datepicker/DatePicker';

import './Header.scss';

const mapStateToProps = ({ui, user}) => {
    return {
        sidebarOpen: ui.sidebarOpen,
        user: user.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        UiActions: bindActionCreators(UiActionsCreator, dispatch),
        UserActions: bindActionCreators(UserActionsCreator, dispatch)
    }
};

class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //this.props.UserActions.fetchUser();
    }

    componentWillUpdate() {
        //console.log('componentWillUpdate', this.props);
    }

    componentDidUpdate() {
        //console.log('componentDidUpdate', this.props);
    }

    toogleSidebar() {
        this.props.UiActions.toogleSidebar();
    }

    render () {
        return (
            <nav className="Header u-shadow">
                <div className="Header-menu-container">
                    <button className="btn Header-menu" onClick={this.toogleSidebar.bind(this)}>
                        <i className="fa fa-bars" />
                    </button>
                </div>
                <h3>{this.props.appName}</h3>
                <Clock />
                <Datepicker />
            </nav>
        );
    }
}

/*<Link to="/" className="Header-title">
    <h3>{this.props.appName}</h3>
</Link>*/

Header.propTypes = {
    appName: PropTypes.string
};

Header.defaultProps = {
    appName: 'React Redux Dashboard'
};

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
export default connect(mapStateToProps, mapDispatchToProps)(Header);
