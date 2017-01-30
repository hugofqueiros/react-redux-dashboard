import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Card from '../../components/card/Card';
import Random from 'lodash/random';
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

        this.dummyData = {
            dataVisits: {
                value: Random(10000, 1000),
                comp: Random(10000, 1000)
            },
            dataPage: {
                value: Random(10000, 1000),
                comp: Random(10000, 1000)
            },
            dataUsers: {
                value: Random(10000, 1000),
                comp: Random(10000, 1000)
            },
            dataSessions: {
                value: Random(10000, 1000),
                comp: Random(10000, 1000)
            }
        }
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
        console.warn('woot: ', !this.props.isFetching, !this.props.isFetchingComp,
            !isEmpty(this.props.data), !isEmpty(this.props.dataComp));

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
                            data={this.dummyData.dataVisits}
                        />
                        <Card
                            classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"
                            type="compare"
                            title="page views"
                            icon="street-view"
                            data={this.dummyData.dataPage}
                        />
                        <Card
                            classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"
                            type="compare"
                            title="users"
                            icon="street-view"
                            data={this.dummyData.dataUsers}
                        />
                        <Card
                            classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"
                            type="compare"
                            title="sessions"
                            icon="street-view"
                            data={this.dummyData.dataSessions}
                        />
                        <Card
                            classes="col-xs-12"
                            type="chart"
                        />
                        <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
                        <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
                    </div>
                </div>
            );
        } else {
            return (
                <div>WOPWOWOWO</div>
            )
        }

    }
}

//export default Overview;

//export default withRouter(connect(mapStateToProps, mapDispatchToProps))(Overview);

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
