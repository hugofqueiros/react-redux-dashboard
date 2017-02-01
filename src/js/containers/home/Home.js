import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as UserActionsCreator from '../../redux/actions/user';
import * as MediumActionsCreator from '../../redux/actions/medium';
import Loader from '../../components/loader/Loader';
import Card from '../../components/card/Card';
import SocialBanner from '../../components/socialbanner/SocialBanner';
import Promise from 'bluebird';
import async from 'async';

import isEmpty from 'lodash/isEmpty';

import './Home.scss';

const mapStateToProps = ({user, medium}) => {
    return {
        isFetching: user.isFetching || medium.isFetching,
        userData: user.data,
        mediumData: medium.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        UserActions: bindActionCreators(UserActionsCreator, dispatch),
        MediumActions: bindActionCreators(MediumActionsCreator, dispatch),
        dispatch: dispatch
    }
};

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (isEmpty(this.props.userData)) {
            let {dispatch} = this.props;

            this.props.UserActions.fetchUser(dispatch);
            this.props.MediumActions.fetchMedium(dispatch);
        }
    }

    render() {
        if(!this.props.isFetching && !isEmpty(this.props.userData) &&
            !isEmpty(this.props.mediumData)) {
            return (
                <div className="container Home">
                    <div className="row no-margins">
                        <SocialBanner {...this.props.userData}/>
                    </div>

                    <div className="row no-margins">
                        <Card
                            classes="col-xs-12"
                            type="github"
                            title="Github"
                            icon="github"
                            data={this.props.userData}
                        />
                        <Card
                            classes="col-xs-12"
                            type="medium"
                            title="Medium"
                            icon="medium"
                            data={this.props.mediumData}
                        />
                    </div>
                </div>
            );
        }
        else {
            return (
                <Loader></Loader>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
