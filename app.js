import {
    router
} from "./router/handler.js";
import { initAuth } from "./security/auth.js";
import { saveUser, getByemail } from "./storage/user.js";
import { hashPassword } from "./security/hash.js";
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {

    router()

    initAuth()  
    document.body.addEventListener('click', e => {
        if (e.target.matches('a')) {

            e.preventDefault()
            window.history.pushState(null, null, e.target.href)
            router()
        }

    })
})  