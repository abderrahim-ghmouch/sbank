'use strict'

export const creditForm = function() {
    return `
    <div class="credit-box">
        <div class="credit-input-group">
            <label for="amount">Montant souhaité (DH)</label>
            <input type="number" id="amount" class="credit-input">
        </div>
        
        <div class="credit-input-group">
            <label for="duration">Durée (Mois)</label>
            <input type="number" id="duration" class="credit-input">
        </div>
        
        <div class="credit-input-group">
            <label for="rate">Taux d'intérêt (%)</label>
            <input type="number" id="rate" class="credit-input">
        </div>
        
        <div class="credit-input-group">
            <label for="income">Revenu mensuel (DH)</label>
            <input type="number" id="income" class="credit-input">
        </div>
        
        <button id="calc-btn" class="spin-btn" style="margin-top: 15px; width: 100%;">Calculer</button>
    </div>

    <div class="credit-box" style="padding: 60px 50px; justify-content: center;">
        <div class="credit-result-group">
            <h3>Mensualité estimée :</h3>
            <p id="res-mensualite" class="highlight">0.00 DH</p>
        </div>
        
        <div class="credit-result-group">
            <h3>Montant total:</h3>
            <p id="res-total" class="normal">0.00 DH</p>
        </div>
        
        <div class="credit-result-group">
            <h3>Coût du crédit:</h3>
            <p id="res-cout" class="normal">0.00 DH</p>
        </div>
    </div>
    `
}

export const initCreditSimulation = function() {

    const amount = document.querySelector('#amount')

    const duration = document.querySelector('#duration')

    const rate = document.querySelector('#rate') 
    const calcBtn = document.querySelector('#calc-btn')  
    
    const resMensualite = document.querySelector('#res-mensualite')

    const resTotal = document.querySelector('#res-total')

    const resCout = document.querySelector('#res-cout')

    
    if (!calcBtn) return


    calcBtn.addEventListener('click', () => {
        const P = parseFloat(amount.value) || 0
        
        const n = parseInt(duration.value) || 0

        const annualRate = parseFloat(rate.value) || 0
        
        if (P <= 0 || n <= 0) {

            resMensualite.textContent = '0.00 DH'


            resTotal.textContent = '0.00 DH'
            
            resCout.textContent = '0.00 DH'
            return
        }

        const r = (annualRate / 100) / 12
        let M   = (r === 0) ? (P / n) : (P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1))
        
        const totalAmount = M * n
        const creditCost = totalAmount - P

        resMensualite.textContent = `${M.toFixed(2)} DH`
        resTotal.textContent = `${totalAmount.toFixed(2)} DH`
        resCout.textContent = `${creditCost.toFixed(2)} DH`

        const userEmail = localStorage.getItem('currentUser')
        const creditData = {
            amount: P,
            duration: n,
            rate: annualRate,
            mensualite: M.toFixed(2),
            total: totalAmount.toFixed(2)
        }
        localStorage.setItem(`userCredit_${userEmail}`, JSON.stringify(creditData))
    })


}