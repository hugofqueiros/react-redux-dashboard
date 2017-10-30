import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import App from './containers/App';
import Home from './containers/home/Home';
import Overview from './containers/overview/Overview';
import Visits from './containers/visits/Visits';
import Charts from './containers/charts/Charts';
import Maps from './containers/maps/Maps';

import NotFoundPage from './components/NotFound';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path="/overview" component={Overview} />
        <Route path="/visits" component={Visits} />
        <Route path="/charts" component={Charts} />
        <Route path="/maps" component={Maps} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);
