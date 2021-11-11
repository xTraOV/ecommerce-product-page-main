
//navigation button open/close
const navOpenButton = document.querySelector('#mobileNavButton');
const navPane = document.querySelector('.navigation');
//navigation open
const navOpen = () => {
    navPane.classList.remove('hidden');
    navPane.classList.add('shown');

    //navigation close
    const navCloseButton = document.querySelector('.navClose');
    const navClose = () => {
        navPane.classList.remove('shown');
        navPane.classList.add('hidden')
    }
    navCloseButton.addEventListener('click', navClose);
}
navOpenButton.addEventListener('click', navOpen);