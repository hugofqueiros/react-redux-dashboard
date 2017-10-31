import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './Loader.scss';

const mapStateToProps = () => {
    return {
    };
};

const defaultStyles = {
    spinnerContainer: {

    },
    path: {
        stokeWidth: '4'
    }
};


const Loader = (props) => {

    let spinnerContainerStyle = {
        width: props.width + 'px',
        height: props.height + 'px'
    };

    spinnerContainerStyle = {...defaultStyles.spinnerContainer, spinnerContainerStyle};

    return (
        <div className="Loader">
            <svg className="spinner-container" viewBox="0 0 44 44" style={spinnerContainerStyle}>
                <circle className="path" cx="22" cy="22" r="20" fill="none">
                </circle>
            </svg>
        </div>
    );
};

Loader.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};

Loader.defaultProps = {
    width: 65,
    height: 65
};

export default connect(mapStateToProps, {})(Loader);
