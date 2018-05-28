import React, {Component} from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
    class Auth extends Component {
        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    const mapStateToProps = state => ({authentificated: state.authentificated});

    return connect(mapStateToProps)(Auth);
}