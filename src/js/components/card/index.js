import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './Card.scss';

class Card extends React.component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="Card">
                <div className="Card-header">Header</div>
                <div className="Card-body">Body</div>
                <div className="Card-footer">Footer</div>
            </div>
        )
    }
}

export default Card;
