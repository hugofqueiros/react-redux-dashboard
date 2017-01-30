import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import * as UiActionsCreator from '../../redux/actions/ui';
import classnames from 'classnames';

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
    const itemClasses = () => {
        if(props.isActive) {
            return classnames('Sidebar-item', 'active');
        }
        return classnames('Sidebar-item');
    };
    const iconClasses = classnames('Sidebar-item-icon', 'fa fa-' + props.icon);

    return (
        <li className={itemClasses()} onClick={activateSidebarItem}>
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
    id: React.PropTypes.number.isRequired,
    isActive: React.PropTypes.bool
};

SidebarItem.defaultProps = {
    icon: 'home',
    title: 'Home',
    isActive: false
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarItem));
