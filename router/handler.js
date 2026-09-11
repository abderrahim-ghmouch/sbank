'use strict'


import { navBar } from "../components/navBar.js"

import { Dashboard } from "../views/Dashboard.js"

import { Login } from "../views/Login.js"

import { Offeres } from "../views/Offeres.js"

import { Signup } from "../views/Signup.js" 

import { Credit } from "../views/Credit.js"

import { Rewards } from "../views/Rewards.js"


export const getBasePath = () => window.location.pathname.startsWith('/sbank') ? '/sbank' : ''

const routes = {
    '/': Dashboard,
    '/dashboard': Dashboard,
    '/login': Login,
    '/offres': Offeres,
    '/signup': Signup,
    '/credit': Credit,
    '/rewards': Rewards
};

export const router = function () {
    const root = document.querySelector('#root')
    let path = window.location.pathname;
    const base = getBasePath()

    if (path.startsWith(base)) {
        path = path.replace(base, '') || '/'
    }

    if (path === '/index.html' || path === '/') {
        path = '/dashboard';
    }

    const isLoggedIn = localStorage.getItem('currentUser')

    if (!isLoggedIn && path !== '/login' && path !== '/signup') {
        path = '/login';
        window.history.pushState(null, null, `${base}/login`)
    }

    root.innerHTML = ''

    if (isLoggedIn) {
        root.insertAdjacentHTML('beforeend', navBar())
    }

    const view = routes[path]
    if (!view) {
        root.insertAdjacentHTML('beforeend', `<div>404 error</div>`)
    } else {
        root.insertAdjacentHTML('beforeend', view())
    }
};