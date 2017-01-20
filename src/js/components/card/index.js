import React, { PropTypes } from 'react';

import './Card.scss';

class Card extends React.Component {
    constructor(props) {
        super(props);
        console.log('card props', props);
    }

    render() {
        return(
            <div className={this.props.classes}>
            <div className="Card" elevation="1">
                <div className="Card-header">
                    <div className="Card-title">This is my header</div>
                    <div className="Card-icon"></div>
                </div>
                <div className="Card-body">Body like this woooo</div>
                <div className="Card-footer">wowowoow foooooottterrr</div>
            </div>
            </div>
        )
    }


}

Card.propTypes = {
    hasHeader: PropTypes.bool,
    hasFooter: PropTypes.bool,
    icon: PropTypes.string,
    type: PropTypes.string,
    classes: PropTypes.string,
};

Card.defaultProps = {
    hasHeader: true,
    hasFooter: false,
    icon: 'street-view',
    type: '',
    classes: PropTypes.string
};

export default Card;
