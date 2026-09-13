'use strict'

export const offerCard = function(offer, isSubscribed) {
    return `
    <div class="credit-box offer-card">

        <h3 class="offer-title">${offer.title}</h3>

        <p class="offer-text">${offer.description}</p>

        <button class="spin-btn offer-btn" data-id="${offer.id}">
        
            ${isSubscribed ? 'Souscrit' : 'Souscrire'}
        </button>
    </div>
    `
}