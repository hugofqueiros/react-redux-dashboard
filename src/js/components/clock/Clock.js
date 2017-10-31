import React from 'react';
import moment from 'moment';

import './Clock.scss';

class Clock extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            time: moment()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                time: moment()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    toogleDatePicker() {

    }

    render() {
        let time = null;
        if(this.state) {
            time = this.state.time.format('YYYY-MM-DD HH:mm:ss');
        }

        return (
            <div className="Clock">
                {time}
            </div>
        )
    }
}

export default Clock;


