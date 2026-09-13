'use strict'
import { offersData, getUserOffers } from '../storage/offeres.js'

export const AvailableOffers = function() {
    const userEmail = localStorage.getItem('currentUser')
    const userOffers = getUserOffers(userEmail)

    const subscribedOffers = offersData.filter(offer => userOffers.includes(offer.id))

    const contentHtml = subscribedOffers.length > 0 
        ? subscribedOffers.map(offer => `
            <div class="dash-mini-card">

                <h4 style="margin: 0 0 5px 0; color: #25c967;">${offer.title}</h4>

                <p style="margin: 0; font-size: 0.9rem; color: #101010;">${offer.description}</p>
                
            </div>
          `).join('')
        : '<p class="empty-offers">Aucune offre souscrite pour le moment</p>'

    return `
    <div class='box large-box'>
        <h3>Available Offers</h3>
        <div class="box-content subscribed-container">
            ${contentHtml}
        </div>
    </div>
    `
}