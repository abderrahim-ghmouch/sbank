'use strict'

import { offersData, getUserOffers } from '../storage/offeres.js'
export const history=function history()
{

    const userEmail = localStorage.getItem('currentUser')
    const credit = JSON.parse(localStorage.getItem(`userCredit_${userEmail}`))
    const userOffersIds = getUserOffers(userEmail)
    const subscribedOffers = offersData.filter(offer => userOffersIds.includes(offer.id))
    const allRewards = JSON.parse(localStorage.getItem('userRewards')) || {}
    const myPoints = allRewards[userEmail] || 0

    return `
    <main class="dash-container">
        <h1 class="dash-welcome">Historique</h1>
        
        <div class="credit-box" style="margin-bottom: 20px;">
            <h3>Crédit</h3>
            ${credit ? `<p>${credit.amount} DH - ${credit.duration} Mois (${credit.mensualite} DH/mois)</p>` : '<p>Aucun crédit simulé.</p>'}
        </div>

        <div class="credit-box" style="margin-bottom: 20px;">
            <h3>Offres</h3>
            ${subscribedOffers.length > 0 ? subscribedOffers.map(o => `<p>• ${o.title}</p>`).join('') : '<p>Aucune offre souscrite.</p>'}
        </div>

        <div class="credit-box">
            <h3>Rewards</h3>
            <p>${myPoints} points</p>
        </div>
    </main>
    `


}