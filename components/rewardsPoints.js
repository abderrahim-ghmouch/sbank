'use strict'

export const rewardsPoints=function(){

  const userEmail= localStorage.getItem('currentUser')

  const allRewards = JSON.parse(localStorage.getItem('userRewards')) || {}


    const myPoints = allRewards[userEmail] || 0

    return `
    <div class='box small-box'> 
        <h3>Récompense</h3>
        <div class="box-content" style="display: flex; align-items: center; justify-content: center; height: 100%;">
            <h2 style="font-size: 3rem; color: #070707; margin: 0; text-shadow: 2px 2px 0 #101010;">
                ${myPoints} points
            </h2>
        </div>
    </div>
    `


}