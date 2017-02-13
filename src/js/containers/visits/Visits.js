import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from '../../components/card/Card';
import Loader from '../../components/loader/Loader';
import isEmpty from 'lodash/isEmpty';
import * as MetricsActionCreator from '../../redux/actions/metrics';
import './Visits.scss'

const mapStateToProps = ({ metrics }) => {
    return {
        isFetching: metrics.isFetching,
        isFetchingComp: metrics.isFetchingComp,
        data: metrics.data,
        dataComp: metrics.dataComp
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        MetricsActions: bindActionCreators(MetricsActionCreator, dispatch),
        dispatch: dispatch
    }
};

class Visits extends React.Component {
    constructor(props) {
        super(props);
        this.hasFetched = false;
    }

    componentDidMount() {
        const metrics = [
            'visits'
        ];

        const { dispatch } = this.props;
        this.props.MetricsActions.fetchMetrics(dispatch, metrics);
        this.props.MetricsActions.fetchMetricsCompare(dispatch, metrics);
        this.hasFetched = true;
    }

    render() {
        if(this.hasFetched && !this.props.isFetching && !this.props.isFetchingComp &&
            !isEmpty(this.props.data) && !isEmpty(this.props.dataComp)) {

            return (
                <div className="Visits container-fluid">
                    <div className="row">
                        <Card
                            classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"
                            type="compare"
                            title="visits"
                            icon="street-view"
                            data={this.props.data.visits.sum}
                            dataComp={this.props.dataComp.visits.sum}
                        />
                        <Card
                            classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"
                            title="Visits Real-Time"
                            type="realtime"
                            icon="users"
                        />
                        <Card
                            classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"
                            type="compare"
                            title="New Visits"
                            icon="street-view"
                            data={this.props.data.visits.newVisits.sum}
                            dataComp={this.props.dataComp.visits.newVisits.sum}
                        />
                        <Card
                            classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"
                            type="compare"
                            title="Returning Visits"
                            icon="street-view"
                            data={this.props.data.visits.returningVisits.sum}
                            dataComp={this.props.dataComp.visits.returningVisits.sum}
                        />

                        <Card
                            classes="col-xs-6 col-sm-6 col-md-6 col-lg-6"
                            type="highcharts"
                            chartType="pie"
                            title="Visits Chart"
                            icon="users"
                            chartSeriesNames={['visits', 'visits compare']}
                            data={this.props.data.visits.sum}
                            dataComp={this.props.dataComp.visits.sum}
                            container="pie-visits-chart"
                        />
                        <Card
                            classes="col-xs-6 col-sm-6 col-md-6 col-lg-6"
                            type="highcharts"
                            chartType="pie"
                            title="New Visits vs Returning Visits"
                            icon="users"
                            chartSeriesNames={['New Visits', 'Returning Visits']}
                            data={this.props.data.visits.newVisits.sum}
                            dataComp={this.props.dataComp.visits.returningVisits.sum}
                            container="pie-new-return-chart"
                        />
                    </div>
                    <div className="row">
                        <Card
                            classes="col-xs-12"
                            type="highcharts"
                            chartType="line"
                            title="Visits Chart"
                            icon="users"
                            chartSeriesNames={['visits', 'visits compare']}
                            data={this.props.data.visits}
                            dataComp={this.props.dataComp.visits}
                            container="line-visits-chart"
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <Loader />
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visits);
