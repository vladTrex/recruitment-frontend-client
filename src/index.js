import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/homeContainer';

export const Whoops404 = ({ location }) =>
    <div className='whoops-404'>
        <h2>Resource not found at '{location.pathname}'</h2>
    </div>

window.React = React;

render(
    <HashRouter>
        <div className='main'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route component={Whoops404} />
            </Switch>
        </div>
    </HashRouter>
    ,
    document.getElementById('rootApp')
);