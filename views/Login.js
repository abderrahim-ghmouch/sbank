'use strict'

import { AuthForm } from "../components/AuthForm.js"

export const Login=function(){
    return AuthForm({
        title: 'Welcome back',
        titleId: 'login-title',
        fields: [
            { label: 'Email', type: 'email', id: 'email', name: 'email', autocomplete: 'email' },
            { label: 'Password', type: 'password', id: 'password', name: 'password', autocomplete: 'current-password' }
        ],
        buttonText: 'Login',
        helperText: "Don't have an account?",
        helperHref: '/signup',
        helperLinkText: 'Sign up'
    })
}
