import React from 'react';
import PropTypes from 'prop-types';

import './Error.scss';

const Error = (props) => {
    const render = () => {
        if(props.errors) {
            return (
                <section className="Error">
                    {props.errors}
                </section>
                );
        }
    };

    return render();
};

Error.propTypes = {
    errors: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]).isRequired
};

export default Error;
