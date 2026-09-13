'use strict'

export const winModal = function(){

    return `
    <div id="win-modal" class="modal-overlay modal-hidden">


        <div class="modal-box">

            <h2>felicitation</h2>

            <p id="modal-message"></p>

            <button id="close-modal-btn" class="modal-btn">confirm</button>
        </div>
    </div>`

}

export const initWinModal = function() {

    const  modal =document.querySelector('#win-modal')

    const closeBtn = document.querySelector('#close-modal-btn')
    
    if (!modal || !closeBtn) return

    closeBtn.addEventListener('click', () => {
        modal.classList.add('modal-hidden')
    });
}

export const showModal = function(points) {
    const modal = document.querySelector('#win-modal')
    const modalMessage = document.querySelector('#modal-message')
    
    if (modal && modalMessage) {
        modalMessage.textContent = `tu gange ${points} points`
        modal.classList.remove('modal-hidden')
    }
}