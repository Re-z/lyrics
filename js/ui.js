
//Declaring variables

export 
    let artist = document.querySelector('#artist'),
    song = document.querySelector('#song'),
    form = document.querySelector('#search-form'),
    result = document.querySelector('#result'),
    messagesBlock = document.querySelector('#messages');


export function showError(errorText) {
    messagesBlock.innerHTML = errorText;
    messagesBlock.style.cssText = 'display: block;'
    setTimeout(() => {
        messagesBlock.style.cssText = 'display: none;'
    }, 3000)
}