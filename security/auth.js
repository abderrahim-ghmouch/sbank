'use strict';
import { router, getBasePath } from "../router/handler.js"


import { saveUser, getByemail } from "../storage/user.js"


import { hashPassword } from "./hash.js"



export const initAuth = function () {
    document.body.addEventListener('click', (e) => {
        if (!e.target.matches('.logout-btn')) return

        const base = getBasePath()

        localStorage.removeItem('currentUser')
        window.history.pushState(null, null, `${base}/login`)
        router()
    })

    document.body.addEventListener('submit', async (e) => {
        if (!e.target.matches('.auth-form')) return
        
        e.preventDefault()


        const formData = new FormData(e.target)


        const data = Object.fromEntries(formData.entries())

        const base = getBasePath()


        if (window.location.pathname.includes('/signup'))
            
            
            {

            data.password = await hashPassword(data.password)

            saveUser(data)
            
            localStorage.setItem('currentUser', data.email)

            window.history.pushState(null, null, `${base}/dashboard`)


            router()
        } else if (window.location.pathname.includes('/login'))
            
            
            {
            const user = getByemail(data.email);
            if (!user) {
                alert("Invalid email or password")
                return;
            }

            const hashedInput = await hashPassword(data.password)
            if (user.password === hashedInput) {
                localStorage.setItem('currentUser', user.email)
                window.history.pushState(null, null, `${base}/dashboard`)
                router();
            } else {
                alert("Invalid email or password")
            }
        }
    });
};
