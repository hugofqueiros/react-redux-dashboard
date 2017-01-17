import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as UIActionsCreator from '../../redux/actions/ui';
import moment from 'moment';

import './DatePicker.scss';


class DatePicker extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            time: moment()
        })
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
            <div className="DatePicker">
                {time}
                <button className="btn DatePicker-btn" onClick={this.toogleDatePicker.bind(this)}>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                </button>

            </div>
        )
    }
}

export default DatePicker;


