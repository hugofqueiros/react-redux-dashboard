import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CardCompare = (props) => {
    const calc = (props.value - props.comp) / props.comp;
    const diffPercentage = (calc * 100).toFixed(1) + '%';

    const diffClasses = (calc <= 0) ?
        classnames('Card-body-compare-diff', 'neg') :
        classnames('Card-body-compare-diff', 'pos');

    return (
        <section className="Card-body Card-body-compare">
            <div className="Card-body-compare-values">
                <span>{props.value}</span>
                <span>{props.comp}</span>
            </div>
            <div className={diffClasses}>
                {diffPercentage}
            </div>
        </section>);
};

CardCompare.propTypes = {
    value: PropTypes.number.isRequired,
    comp: PropTypes.number.isRequired
};

CardCompare.defaultProps = {
    value: 0,
    comp: 0
};

export default CardCompare;
