'use strict'
import { spinWheel } from "../components/spin.js"
import { winModal} from "../components/winModal.js"

export const Rewards=function(){

return `<main class="rewards-page">
        ${spinWheel()}
        ${winModal()}
    </main>`
    
}