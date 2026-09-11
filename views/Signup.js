'use strict'

import { AuthForm } from "../components/AuthForm.js"

export const Signup=function()
    {
        return AuthForm({
            title: 'join us',
            titleId: 'signup-title',
            fields: [
                { label: 'Name', type: 'text', id: 'name', name: 'name', autocomplete: 'name' },
                { label: 'Email', type: 'email', id: 'email', name: 'email', autocomplete: 'email' },
                { label: 'Password', type: 'password', id: 'password', name: 'password', autocomplete: 'new-password' }
            ],
            buttonText: 'Sign up',
            helperText: 'Already have an account?',
            helperHref: '/login',
            helperLinkText: 'Login',
            cardClass: 'signup-card'
        })   
    }      
