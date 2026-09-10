import {
    router
} from "./router/handler.js";

window.addEventListener('popstate', router);


document.addEventListener('DOMContentLoaded', () => {

    document.body.addEventListener('click', e => {

        if (e.target.matches('a')) {

            e.preventDefault()
            window.history.pushState(null, null, e.target.href)

            router()
        }

    })
})