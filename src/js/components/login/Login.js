import React from 'react';

import './Login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {

    }
}

export default Login;
