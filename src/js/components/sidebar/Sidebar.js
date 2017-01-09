import React, { PropTypes } from 'react';

import './Sidebar.scss';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        console.log('Sidebar props: ', props);
    }

    componentDidMount() {

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

        return (
            <div className="Sidebar">
                {sidebarHeader}
                <div className="Sidebar-body">
                    Hello Sidebar
                </div>
                {sidebarFooter}
            </div>
        );
    }
}

Sidebar.propTypes = {
    hasHeader: React.PropTypes.bool,
    hasFooter: React.PropTypes.bool,
    width: React.PropTypes.number
};

Sidebar.defaultProps = {
    hasHeader: false,
    hasFooter: false,
    width: 250
};

export default Sidebar;
