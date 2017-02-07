import React from 'react';

import './Error.scss';

const Error = (props) => {
    const render = () => {
        if(props.errors) {
            return (
                <section className="Error">
                    {props.errors}
                </section>
                )
        }
    };

    return render();
};

Error.propTypes = {
    errors: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.array
    ]).isRequired
};

export default Error;
