import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Login.scss';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
    return {
        onUnload: () =>
            dispatch({type: 'LOGIN_PAGE_UNLOADED'})
    }
};

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
