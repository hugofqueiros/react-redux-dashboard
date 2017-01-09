import React, { PropTypes } from 'react';

import './Panel.scss';

class Panel extends React.Component {
    constructor(props) {
        super(props);

        console.log('Panel props', props);
    }

    render() {
        return (
            <div className="Panel">
                Hello Panel
            </div>
        )
    }
}

export default Panel;
