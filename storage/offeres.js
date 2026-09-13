'use strict'

export const offersData = [
    {
        id: 'credit-logement',
        title: 'Crédit Logement',
        description: "Profitez d'un taux préférentiel à partir de 4.5% pour financer l'achat de votre future maison avec des facilités de remboursement."
    },
    
    {
        id: 'carte-gold',
        title: 'Carte Gold',
        description: 'Bénéficiez d\'une carte internationale avec des plafonds de paiement élevés et une assurance voyage incluse.'
    },
    {
        id: 'carte-code30',
        title: 'Carte code30',
        description: 'Bénéficiez d\'une carte internationale avec des plafonds de paiement élevés et une assurance voyage incluse.'
    },

{
        id: 'carte-selver',
        title: 'Carte selver',
        description: 'Bénéficiez d\'une carte internationale avec des plafonds de paiement élevés et une assurance voyage incluse.'
    },

{
        id: 'carte-diamond',
        title: 'Carte dimond',
        description: 'Bénéficiez d\'une carte internationale avec des plafonds de paiement élevés et une assurance voyage incluse.'
    }
]


export const getUserOffers = function(email) {
    const data = JSON.parse(localStorage.getItem('userOffers')) || {}
    return data[email] || []
}

export const saveUserOffer = function(email, offerId) {
    const data = JSON.parse(localStorage.getItem('userOffers')) || {}
    const userList = data[email] || []
    
    if (!userList.includes(offerId)) {
        userList.push(offerId)
        data[email] = userList
        localStorage.setItem('userOffers', JSON.stringify(data))
    }
}