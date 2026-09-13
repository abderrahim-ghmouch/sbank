'use strict'
import { getByemail } from "../storage/user.js"
import {creditSimulated} from"../components/creditSimulated.js"


import { rewardsPoints} from "../components/rewardsPoints.js"

import { AvailableOffers } from "../components/AvailableOfferes.js"

export const Dashboard = function () {
   
    const userEmail = localStorage.getItem('currentUser')
   
 const user = getByemail(userEmail) || { name: 'guest' }

    return `
    <main class='dash-container'>
    
        <h1 class='dash-welcome'>
            bonjour ${user.name}
        </h1>

        <div class="dash-com">
            <div class='dash-left'>
            ${creditSimulated()}
            ${rewardsPoints()}
            </div> 
            <div class="dash-right">
            ${AvailableOffers()}
            </div>
        </div>
            
    </main>
    `
}