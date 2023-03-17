'use strict'

const loginContainer = document.getElementById('login-container')

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('abrir-cadastro').addEventListener('click', moveOverlay)
document.getElementById('abrir-login').addEventListener('click', moveOverlay)

document.getElementById('abrir-cadastro-mobile').addEventListener('click', moveOverlay)
document.getElementById('abrir-login-mobile').addEventListener('click', moveOverlay)