import React, {Component} from 'react';
import {connect} from 'react-redux';

export default ComposedComponent => {
    class Auth extends Component {
        componentDidMount() {
            this.shouldNavigateAway();
        }

        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway(){
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    const mapStateToProps = state => ({auth: state.auth});

    return connect(mapStateToProps)(Auth);
}