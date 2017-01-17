import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import './SidebarItem.scss';

class SidebarItem extends React.Component {
    constructor(props) {
        super(props);

        console.log('sidebar Item props: ', props);
    }

    render () {
        const iconClasses = 'Sidebar-item-icon fa fa-' + this.props.icon;

        return (
        <Link to={this.props.link}>
            <div className="Sidebar-item">
                <i className={iconClasses}></i>
                <div className="Sidebar-item-title">{this.props.title}</div>
            </div>
        </Link>
        );
    }
}

SidebarItem.propTypes = {
    icon: React.PropTypes.string,
    title: React.PropTypes.string
};

SidebarItem.defaultProps = {
    icon: 'whatever',
    title: 'woo title'
};

export default SidebarItem;
