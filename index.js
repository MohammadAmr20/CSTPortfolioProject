const toggleMenu = document.getElementById('toggle-menu');
const menu = document.querySelector('header .container nav .toggle-menu + ul');
const header = document.querySelector('header');
console.log(toggleMenu);
toggleMenu.addEventListener("click",()=>{
    if(toggleMenu.style.display != 'none'){
        if(!menu.classList.contains('mobile-view-menu'))
            menu.classList.add('mobile-view-menu');
        else
        menu.classList.remove('mobile-view-menu');
    }
});

window.addEventListener('resize',()=>{
    if(window.innerWidth >= 768)
        menu.classList.remove('mobile-view-menu');
});

window.onscroll = ()=>{
    if(window.scrollY >= 10){
        header.style.backgroundColor = 'rgb(0,0,0)';
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
};