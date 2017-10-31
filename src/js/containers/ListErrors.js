import React from 'react';

const ListErrors = (props) => {
    const render = () => {
        if(props.errors) {
            return (
                <section>

                </section>
            );
        } else {
            return null;
        }
    };

    return render();
};

export default ListErrors;

