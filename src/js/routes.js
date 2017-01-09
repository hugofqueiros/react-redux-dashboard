import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './components/Home';

import NotFoundPage from './components/NotFound';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);
