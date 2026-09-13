'use strict'
import { getByemail } from '../storage/user.js'


export const profile = function() {

    const userEmail = localStorage.getItem('currentUser')
    const user = getByemail(userEmail) 

    return `
    <div>
    <div>profile</div>
        <div>Nom : ${user.name}</div>
        <div>Email : ${user.email}</div>
    </div>
    `
}