'use strict'
 export function  navBar (){
    
    return `
        <nav class="navbar">
            <a class="navbar-brand" href="/dashboard" aria-label="SBank dashboard">
                <img src="./assets/sbank.png" alt="SBank">
            </a>

            <div class="navbar-links">
                <a href="/dashboard">dashboard</a>
                <a href="/rewards">rewards</a>
                <a href="/offres">offers</a>
                <a href="/credit">credit</a>
                <a href="/profile">profile</a>
                <button class="logout-btn" type="button">logout</button>
            </div>
        </nav>
    `}

            



    
