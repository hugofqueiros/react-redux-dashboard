import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router';
import * as UIActionsCreator from '../../redux/actions/ui';
import * as UserActionsCreator from '../../redux/actions/user';
import isEmpty from 'lodash/isEmpty';

import SidebarItem from './SidebarItem';

import './Sidebar.scss';

//const mapStateToProps = ({ ui, user }, { params }) => {
const mapStateToProps = ({ ui, user }) => {
    return {
        sidebarOpen: ui.sidebarOpen,
        activeSidebarItem: ui.activeSidebarItem,
        isFetching: user.isFetching,
        userData: user.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        UiActions: bindActionCreators(UIActionsCreator, dispatch),
        UserActions: bindActionCreators(UserActionsCreator, dispatch),
        dispatch: dispatch
    };
};

const defaultStyles = {
    sidebar: {
        transition: 'transform .3s ease-out',
        WebkitTransition: '-webkit-transform .3s ease-out',
        msTransition: 'transform .3s ease-out'
    },
    overlay: {
        transition: 'opacity .3s ease-out, visibility .3s ease-out',
    }
};

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //const dragSupport =  typeof window === 'object' && 'ontouchstart' in window;
    }

    componentDidMount() {
        if (isEmpty(this.props.userData)) {
            let { dispatch } = this.props;
            this.props.UserActions.fetchUser(dispatch);
        }

        //const dragSupport =  typeof window === 'object' && 'ontouchstart' in window;
        //console.log('ondragSupport :', dragSupport);
    }

    render () {
        const userName =  this.props.userData ? this.props.userData.name : null;
        const imgSrc = this.props.userData ? this.props.userData.avatar_url : null;

        const sidebarHeader = this.props.hasHeader ?
            <div className="Sidebar-header">
                <img src={imgSrc} />
                <span>{userName}</span>
                <i className="fa fa-cog" />
            </div> :
            null;

        const sidebarFooter = this.props.hasFooter ?
            <div className="Sidebar-footer">
                Copywrite Hugo Queiros
            </div> :
            null;

        let sidebarStyle = {};
        if (this.props.sidebarOpen) {
            sidebarStyle.transform = 'translateX(0%)';
        } else {
            sidebarStyle.transform = 'translateX(-100%)';
        }
        sidebarStyle = {...defaultStyles.sidebar, ...sidebarStyle};

        let items = this.props.sidebarItems.map((item, index) => {
            const isActive = (this.props.activeSidebarItem === index);
            return <SidebarItem key={index} isActive={isActive} title={item.name} id={index}
                                icon={item.icon} link={item.link} />
        });

        return (
            <aside className="Sidebar" style={sidebarStyle}>
                {sidebarHeader}
                <ul className="Sidebar-body">
                    {items}
                </ul>
                {sidebarFooter}
            </aside>
        );
    }
}

Sidebar.propTypes = {
    hasHeader: PropTypes.bool.isRequired,
    hasFooter: PropTypes.bool.isRequired,
    width: PropTypes.number,
    sidebarItems: PropTypes.array
};

Sidebar.defaultProps = {
    hasHeader: false,
    hasFooter: false,
    width: 250,
    sidebarItems: [{icon: 'home', name: 'Home', link: '/'},
        {icon: 'car', name: 'Overview', link: '/overview'}]
};

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

