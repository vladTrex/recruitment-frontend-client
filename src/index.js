import React from 'react';
import {render} from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import 'whatwg-fetch';

import {store, persistor} from './store'

import App from './containers/appContainer';
import AuthHOC from './components/HOCs/AuthHOC';
import Login from './containers/loginContainer';
import Home from './containers/homeContainer';
import Vacancy from './containers/vacancyContainer';
import Vacancies from './containers/vacanciesContainer';
import Whoops404 from './components/whoops404';

window.React = React;
window.store = store;

render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <HashRouter>
                <App>
                    <Switch>
                        <Route exact path='/' component={AuthHOC(Home)}/>
                        <Route path='/vacancy/:id' component={AuthHOC(Vacancy)}/>
                        <Route path='/vacancies' component={AuthHOC(Vacancies)}/>
                        <Route component={Whoops404}/>
                    </Switch>
                </App>
            </HashRouter>
        </PersistGate>
    </Provider>
    ,
    document.getElementById('rootApp')
);