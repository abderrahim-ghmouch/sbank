'use strict'

export const creditSimulated=function(){

    const userEmail = localStorage.getItem('currentUser')
    
    const credit = JSON.parse(localStorage.getItem(`userCredit_${userEmail}`))


    const contentHtml = credit 
        ? `
            <div style="text-align: left; width: 100%;">
                <p style="margin: 5px 0;"><strong>Montant :</strong> ${credit.amount} DH</p>
                <p style="margin: 5px 0;"><strong>Durée :</strong> ${credit.duration} Mois</p>
                <p style="margin: 5px 0; color: #25c967;"><strong>Mensualité :</strong> ${credit.mensualite} DH</p>
            </div>
          `
        : '<p style="color: #0f0e10; font-style:inseria-serif" >Aucun crédit simulé</p>'

    return `
    <div class='box small-box'>
        <h3>Crédit Simulé</h3>
        <div class="box-content" style="display: flex; align-items: center; justify-content: center; height: 100%; width: 100%; padding:;">
            ${contentHtml}  
        </div>
    </div>
    `
    

}