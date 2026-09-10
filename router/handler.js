'use strict'

import {  navBar} from "../components/navBar.js"

import {Dashboard} from "../views/Dashboard.js"

import {Login} from "../views/Login.js"

import {Offeres} from "../views/Offeres.js"

import {Signup} from "../views/Signup.js"

import {Credit} from "../views/Credit.js"

import {Rewards} from "../views/Rewards.js"



const routes = {
    '/': Dashboard,
    '/Dashboard': Dashboard, 
    '/login': Login,
    '/Offres': Offeres,      
    '/signup': Signup,
    '/credit': Credit,
    '/Rewards': Rewards
}

export const router = function () {
    const root = document.querySelector('#root');
    let path = window.location.pathname;

    if (path === '/index.html') {
        path = '/dashboard';
    }

    root.innerHTML = '';

    root.insertAdjacentHTML('beforeend', navBar())

    const views = routes[path]
    if (!views) {
        root.insertAdjacentElement('beforeend',`<div>404 error</div>`)
    } else if (views) {

       root.insertAdjacentHTML('beforeend', views());
    }

}