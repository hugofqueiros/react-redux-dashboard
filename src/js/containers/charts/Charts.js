import React from 'react';
import Card from '../../components/card/Card';

import './Charts.scss';

const Charts = (props) => {
    console.log('CHARTS: ', props);

    return (
        <div className="container-fluid">
            <div className="row">
                <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
                <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
                <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
                <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
                <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
                <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
                <Card classes="col-xs-12 col-sm-6 col-md-6 col-lg-3"/>
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
};

export default Charts;
