'use strict'
import { showModal } from "./winModal.js"

export const spinWheel=function(){

    return `<div class="spinner-container">

        <div class="spinner-wrapper">

            <div class="pointer"></div> 


            <div class="spinner-wheel" id="spinner-wheel"></div>

        </div>


        <button id="spin-btn" class="spin-btn">Spin it</button>

    </div>
    `
}



export const initSpinWheel = function() {

    const spinBtn = document.querySelector('#spin-btn')

    const wheel = document.querySelector('#spinner-wheel')

    
    if (!spinBtn || !wheel) return

    let isSpinning = false;
    let currentRotation = 0;
    const PRIZES = [10, 50, 0, 100, 20, 5]
    const SLICE_ANGLE = 360 / PRIZES.length

    spinBtn.addEventListener('click', () => {


        if (isSpinning) return

        isSpinning = true


        const randomExtra = Math.floor(Math.random() * 360)
        currentRotation += (360 * 5) + randomExtra
        wheel.style.transform = `rotate(${currentRotation}deg)`

        wheel.addEventListener('transitionend', function handleTransition()
         {

            isSpinning = false

            wheel.removeEventListener('transitionend', handleTransition)

                 const actualDeg = currentRotation % 360

                
                 const winningIndex = Math.floor(((360 - actualDeg) % 360) / SLICE_ANGLE)


                 const wonValue = PRIZES[winningIndex]


                 const userEmail = localStorage.getItem('currentUser')


                    const storedRewards = JSON.parse(localStorage.getItem('userRewards')) || {}


            storedRewards[userEmail] = (storedRewards[userEmail] || 0) + wonValue

            localStorage.setItem('userRewards', JSON.stringify(storedRewards))

            showModal(wonValue)
        });
    });
}