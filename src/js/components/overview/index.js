import React from 'react';
import Card from '../card'

import './Overview.scss';

class Overview extends React.Component {
    render() {
        return (
            <div className="Overview container-fluid">
                <div className="row">
                    <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
                    <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
                    <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
                    <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
                    <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
                    <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
                    <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
                </div>
            </div>
        );
    }
}

export default Overview
