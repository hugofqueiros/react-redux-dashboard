import React from 'react';

const ListErrors = (props) => {
    const render = () => {
        if(errors) {
            return (
                <ul className="error-messages">
                    {
                        Object.keys(props.errors).map(key => {
                            return (
                                <li key={key}>
                                    {key} {props.errors[key]}
                                </li>
                            )
                        })
                    }
                </ul>
            );
        } else {
            return null;
        }
    };

    return render();
};

export default ListErrors;
