import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './components/home';
import Overview from './components/overview';
import Panel from './components/panel/Panel';

import NotFoundPage from './components/NotFound';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path="/overview" component={Overview} />
        <Route path="/visits" component={Panel} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);
