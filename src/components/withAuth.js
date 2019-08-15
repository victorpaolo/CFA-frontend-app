import React, { Component } from 'react'
import {AuthContext} from '../context/auth-context'

const withAuth = (Comp) => {
    return class WithAuth extends Component {
        render () {
            return(
                <AuthContext.Consumer>
                    {({user, isLoggedIn, login, signup, logout}) => (
                        <Comp 
                        user={user}
                        isLoggedIn={isLoggedIn}
                        login={login}
                        signup={signup}
                        logout={logout}
                        {...this.props}
                        />
                    )}
                </AuthContext.Consumer>
            )
        }
    }
}

export default withAuth