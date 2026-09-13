'use strict'
import { offersData, getUserOffers, saveUserOffer } from '../storage/offeres.js'
import { searchBar } from '../components/searchBar.js'
import { offerCard } from '../components/offerCard.js'

export const Offeres = function() {
    return `
    <main class="dash-container">
        <h1 class="dash-welcome">Offres Bancaires</h1>
        ${searchBar()}
        <div class="offers-grid" id="offers-grid">
            ${renderOfferCards(offersData)}
        </div>
    </main>
    `
}

const renderOfferCards = function(offers) {
    const userEmail = localStorage.getItem('currentUser')
    const userOffers = getUserOffers(userEmail)

    if (offers.length === 0) {
        return `<p style="font-size: 1.2rem; font-weight: bold;">Aucune offre trouvée</p>`
    }

    return offers.map(offer => {
        const isSubscribed = userOffers.includes(offer.id)
        return offerCard(offer, isSubscribed)
    }).join('')
}

export const offers = function() {
    const container = document.querySelector('#offers-grid')
    const searchInput = document.querySelector('#search-offer')
    
    if (!container) return

    container.addEventListener('click', (e) => {
        if (!e.target.matches('.offer-btn')) return

        const offerId = e.target.getAttribute('data-id')
        const userEmail = localStorage.getItem('currentUser')
        
        saveUserOffer(userEmail, offerId)
        e.target.textContent = 'Souscrit'
    })

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase()
            const filtered = offersData.filter(offer => 
                offer.title.toLowerCase().includes(query) || 
                offer.description.toLowerCase().includes(query)
            )
            container.innerHTML = renderOfferCards(filtered)
        })
    }
}