import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'whatwg-fetch';

import store from './store'
import { fetchVacancies, addVacancy, setUser } from './store/actions';

import Home from './containers/homeContainer';
import Vacancy from './containers/vacancyContainer';
import Whoops404 from './components/whoops404';

window.React = React;
window.store = store;

// store.dispatch(setUser({name: 'John Doe'}));

fetch('/store.json')
  .then((res) => res.json())
  .then((data) => {
    store.dispatch(fetchVacancies(data.vacancies));
  });

render(
    <Provider store={store}>
        <HashRouter>
            <div className='main'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/vacancy/:id' component={Vacancy} />
                    <Route component={Whoops404} />
                </Switch>
            </div>
        </HashRouter>
    </Provider>
    ,
    document.getElementById('rootApp')
);