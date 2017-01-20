import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as UIActionsCreator from '../../redux/actions/ui';

import SidebarItem from './SidebarItem';

import './Sidebar.scss';

const mapStateToProps = ({ ui }, { params }) => {
    return {
        sidebarOpen: ui.sidebarOpen
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        UiActions: bindActionCreators(UIActionsCreator, dispatch)
    }
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

    componentDidMount() {
        const dragSupport =  typeof window === 'object' && 'ontouchstart' in window;
        console.log('ondragSupport :', dragSupport);
    }

    componentDidUpdate() {

    }

    render () {
        const sidebarHeader = this.props.hasHeader ?
            <div className="Sidebar-header">
                Sidebar Header
            </div> :
            null;

        const sidebarFooter = this.props.hasFooter ?
            <div className="Sidebar-footer">
                Sidebar Footer
            </div> :
            null;

        let sidebarStyle = {};

        console.log('sidebar Open? ', this.props.sidebarOpen);
        if (this.props.sidebarOpen) {
            sidebarStyle.transform = 'translateX(0%)';
        } else {
            sidebarStyle.transform = 'translateX(-100%)';
        }
        sidebarStyle = {...defaultStyles.sidebar, ...sidebarStyle};

        let items = this.props.sidebarItems.map((item, index) => {
            return <SidebarItem key={index} title={item.name} id={index}
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
    hasHeader: React.PropTypes.bool.isRequired,
    hasFooter: React.PropTypes.bool.isRequired,
    width: React.PropTypes.number,
    sidebarItems: React.PropTypes.array
};

Sidebar.defaultProps = {
    hasHeader: false,
    hasFooter: false,
    width: 250,
    sidebarItems: [{icon: 'home', name: 'Home', link: '/'},
        {icon: 'car', name: 'Overview', link: '/overview'}]
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));

