import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
// import {TransitionView, MultiMonthView, Footer} from 'react-date-picker';
import {DateRangePicker} from 'react-dates';

import moment from 'moment';

import './Datepicker.scss';
// import 'react-date-picker/index.css'

class Datepicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }

    toogleDatePicker() {
        console.log('wowoowow');

        this.setState({
            isOpen: !this.state.isOpen,
            focusedInput: null,
            startDate: null,
            endDate: null,
        });

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onDatesChange({ startDate, endDate }) {
        this.setState({ startDate, endDate });
    }

    onFocusChange(focusedInput) {
        this.setState({ focusedInput });
    }

    pickDate() {
        console.log('pick date');
    }

    render() {
        // let datepicker = null;
        //
        // if(this.state.isOpen) {
        //     datepicker = (
        //         <div className="Datepicker" onClick={this.pickDate.bind(this)}>
        //         <TransitionView
        //             footer={true}
        //             navigation={true}
        //         >
        //             <MultiMonthView
        //                 highlightWeekends={true}
        //                 highlightToday={true}
        //                 weekNumbers={true}
        //                 locale="en"
        //                 highlightRangeOnMouseMove={true}
        //                 weekStartDay={0}
        //                 footer={true}
        //                 defaultRange={[]}
        //             />
        //             <Footer/>
        //         </TransitionView>
        //         </div>
        //     )
        // }

        const { focusedInput, startDate, endDate } = this.state;
        let datepickerAirbnb = null;

        // if(this.state.isOpen) {
        //     datepickerAirbnb = (
        //         <div>
        //             <DateRangePicker
        //                 {...this.props}
        //                 onDatesChange={this.onDatesChange}
        //                 onFocusChange={this.onFocusChange}
        //                 focusedInput={focusedInput}
        //                 startDate={startDate}
        //                 endDate={endDate}
        //             />
        //         </div>
        //     )
        // }

        console.log('this.datepciker: ', datepickerAirbnb);

        return (
            <div className="Datepicker-container">
                <button className="btn Datepicker-btn" onClick={this.toogleDatePicker.bind(this)}>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

Datepicker.propTypes = {

};

Datepicker.defaultProps = {

};

export default Datepicker;
