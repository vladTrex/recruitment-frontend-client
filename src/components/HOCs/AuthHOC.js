import React, {Component} from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
    class Auth extends Component {
        componentWillMount(){
            console.log(this.props);
            if(!this.props.auth){
                this.props.history.push('/')
            }
        }
        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    const mapStateToProps = state => ({auth: state.auth});

    return connect(mapStateToProps)(Auth);
}