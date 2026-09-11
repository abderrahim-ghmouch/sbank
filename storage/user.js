'use strict'

export const saveUser = function(user) {
    
    const usersArray = JSON.parse(localStorage.getItem('users')) || [];
    
    usersArray.push(user);
    
    localStorage.setItem('users', JSON.stringify(usersArray));
}

export const getByemail = function(email){

const users = JSON.parse(localStorage.getItem('users')) || [];


    return users.find(u => u.email == email)
}
