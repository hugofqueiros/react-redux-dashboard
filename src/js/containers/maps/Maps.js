import React from 'react';
import Card from '../../components/card/Card';

const Maps = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Card classes="col-xs-12 col-sm-12 col-md-6 col-lg-6"/>
                <Card classes="col-xs-12 col-sm-12 col-md-6 col-lg-6"/>
                <Card classes="col-xs-12 col-sm-12 col-md-6 col-lg-6"/>
                <Card classes="col-xs-12 col-sm-12 col-md-6 col-lg-6"/>
            </div>
        </div>
    );
};

export default Maps;
