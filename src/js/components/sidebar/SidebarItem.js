import React, {PropTypes} from 'react';

import './SidebarItem.scss';

class SidebarItem extends React.Component {
    constructor(props) {
        super(props);

        console.log('sidebar Item props: ', props);
    }

    render () {
        return (
            <div className="Sidebar-item">
                <div className="Sidebar-item-icon">{this.props.icon}</div>
                <div className="Sidebar-item-title">{this.props.title}</div>
            </div>
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
