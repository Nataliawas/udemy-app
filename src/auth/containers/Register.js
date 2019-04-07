import React, { Component } from 'react';

import { connect } from 'react-redux'
import { registerUser } from '../actions';


class Register extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }


    handleChange = (event) => {
        this.setstate({ [event.target.name]: event.target.value })
    }


    handleSubmit = (event) => {
        this.props.registerUser(this.state)
        event.preventDefault()
    }
    renderIndicator = () => {
        if (this.props.registerUser(this.state)) {
            return <div>loading...</div>
        }
        return null
    }
renderError = () => {
    if (this.props.hasError) {
        return <div><span style={{color: 'red'}}>Error</span></div>
    }
}
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="email" placeholder="email"></input>
                </div>
                <div>
                    <input type="password" placeholder="password"></input>
                </div>
                <div>
                    <input type="firstName" placeholder="First Name"></input>
                </div>
                <div>
                    <input type="lastName" placeholder="Last Name"></input>
                </div>
            </form>
        )
    }
}


const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    hasError: state.auth.hasError
})



const mapDispatchToProps = dispatch => ({
    registerUser: FormData => dispatch(registerUser(FormData))
})
export default connect(null, mapDispatchToProps)(Register) 