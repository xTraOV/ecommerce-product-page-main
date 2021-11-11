const cartOpenButton = document.querySelector('.cartButton');
const cartPane = document.querySelector('.cart');
const cartCloseButton = document.querySelector('.cartHeader');


const cartOpen = () => {
    cartPane.classList.remove('hidden');
    cartPane.classList.add('shown');
}
const cartClose = () => {
    cartPane.classList.remove('shown');
    cartPane.classList.add('hidden');
}

cartOpenButton.addEventListener('click', cartOpen);
cartCloseButton.addEventListener('click',cartClose);