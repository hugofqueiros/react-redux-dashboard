import React, {PropTypes} from 'react';
import classname from 'classnames';
import Random from 'lodash/random';

class CardRealTime extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            num: Random(1, 10)
        })
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                num: Random(0, 20)
            })
        }, 10000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <section className="Card-body Card-body-realtime">
                <div className="Card-body-realtime-info">
                    Right Now
                </div>
                <div className="Card-body-realtime-value">
                    {this.state.num}
                </div>
            </section>
        )
    }
}

CardRealTime.propTypes = {

};

CardRealTime.defaultProps = {

};

export default CardRealTime;
