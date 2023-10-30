let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    wineItem.classList.remove('active');
    searcheFrom.classList.remove('active');
}


let wineItem = document.querySelector('.wine-items-container');

document.querySelector('#wine-btn').onclick = () =>{
    wineItem.classList.toggle('active');
    navbar.classList.remove('active');
    searcheFrom.classList.remove('active');
}



let searcheFrom = document.querySelector('.search-from');

document.querySelector('#search-btn').onclick = () =>{
    searcheFrom.classList.toggle('active');
    navbar.classList.remove('active');
    wineItem.classList.remove('active');
   
}



window.onscroll = () =>{
    navbar.classList.remove('active');
    wineItem.classList.remove('active');
    searcheFrom.classList.remove('active');
}