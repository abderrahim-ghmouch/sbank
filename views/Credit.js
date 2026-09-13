'use strict'

import { creditForm } from "../components/creditForm.js"

export const Credit = function() {
    return `
   <main class="dash-container">
        <h1 class="dash-welcome">Simulation de Crédit</h1>
        <div class="credit-com">
            ${creditForm()}
        </div>
    </main>
    `
}