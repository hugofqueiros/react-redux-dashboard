import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import * as UiActionsCreator from '../../redux/actions/ui';

import './SidebarItem.scss';

const mapStateToProps = ({ ui }) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        UiActions: bindActionCreators(UiActionsCreator, dispatch)
    }
};

const SidebarItem = (props) => {

    const activateSidebarItem = () => {
        props.UiActions.activeSidebarItem(props.id);
    };

    //render () {
    const iconClasses = 'Sidebar-item-icon fa fa-' + props.icon;

    return (
        <li className="Sidebar-item" onClick={activateSidebarItem}>
            <Link to={props.link}>
                <i className={iconClasses}></i>
                <div className="Sidebar-item-title">{props.title}</div>
            </Link>
        </li>
    );
    //}
};

SidebarItem.propTypes = {
    icon: React.PropTypes.string,
    title: React.PropTypes.string,
    id: React.PropTypes.number.isRequired
};

SidebarItem.defaultProps = {
    icon: 'home',
    title: 'Home'
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarItem));
