import React, { PropTypes } from 'react';

import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        console.log('Header props: ', props);
    }

    render() {
        return (
            <div className="Header">
                {this.props.appName}
            </div>
        )
    }
}

Header.propTypes = {
    appName: React.PropTypes.string
};

Header.defaultProps = {
    appName: 'React Redux Dashboard'
};

export default Header;
