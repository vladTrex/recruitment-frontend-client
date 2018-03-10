import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";

import Home from './containers/homeContainer';
import Whoops404 from './components/whoops404';
import reducers from './store/reducers';

const store = createStore(reducers);

window.React = React;
window.store = store;

render(
    <Provider store={store}>
        <HashRouter>
            <div className='main'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route component={Whoops404} />
                </Switch>
            </div>
        </HashRouter>
    </Provider>
    ,
    document.getElementById('rootApp')
);