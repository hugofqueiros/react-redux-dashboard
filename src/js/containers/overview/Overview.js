import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Card from '../../components/card/Card';
import Loader from '../../components/loader/Loader';
import isEmpty from 'lodash/isEmpty';

import * as MetricsActionCreator from '../../redux/actions/metrics';

import './Overview.scss';

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

class Overview extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const metrics = [
            'visits',
            'pageviews',
            'users',
            'sessions'
        ];

        let { dispatch } = this.props;
        this.props.MetricsActions.fetchMetrics(dispatch, metrics);
        this.props.MetricsActions.fetchMetricsCompare(dispatch, metrics);
    }

    render() {
        if(!this.props.isFetching && !this.props.isFetchingComp &&
            !isEmpty(this.props.data) && !isEmpty(this.props.dataComp)) {
            return (
                <div className="Overview container-fluid">
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
                            type="compare"
                            title="page views"
                            icon="street-view"
                            data={this.props.data.pageviews.sum}
                            dataComp={this.props.dataComp.pageviews.sum}
                        />
                        <Card
                            classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"
                            type="compare"
                            title="users"
                            icon="street-view"
                            data={this.props.data.users.sum}
                            dataComp={this.props.dataComp.users.sum}
                        />
                        <Card
                            classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"
                            type="compare"
                            title="sessions"
                            icon="street-view"
                            data={this.props.data.users.sum}
                            dataComp={this.props.dataComp.users.sum}
                        />
                        <Card
                            classes="col-xs-12"
                            type="highcharts"
                            container="visits-chart"
                            chartType="line"
                            chartSeriesNames={['visits', 'visits compare']}
                            title="Visits Chart"
                            icon="users"
                            data={this.props.data.visits}
                            dataComp={this.props.dataComp.visits}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <Loader />
            )
        }

    }
}

//export default Overview;

//export default withRouter(connect(mapStateToProps, mapDispatchToProps))(Overview);

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
