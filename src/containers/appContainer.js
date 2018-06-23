import React from 'react';
import {connect} from "react-redux";

import Menu from '../components/menu';
import { authentificate } from '../store/actions';

const App = ({children, authentificate, authentificated}) => {
    return(
        <div className='main'>
            <Menu
                authentificate={authentificate}
                authentificated={authentificated}
            />
            {children}
        </div>
        );
};


const mapStateToProps = state => ({
    authentificated: state.auth
});

export default connect(mapStateToProps, {authentificate})(App);