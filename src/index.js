import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import storeFactory from './store'
import { fetchVacancies, addVacancy, setUser } from './store/actions';

import reducers from './store/reducers'
import Home from './containers/homeContainer';
import Whoops404 from './components/whoops404';


const store = storeFactory(reducers);

window.React = React;
window.store = store;

store.dispatch(fetchVacancies());
store.dispatch(addVacancy({title: 'Vacancy 1', description: 'Some cool description'}));
store.dispatch(setUser({name: 'John Doe'}));

render(
    <Provider store={storeFactory}>
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