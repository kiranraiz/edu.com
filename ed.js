navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist') 
rightnav=document.querySelector('.rightnav')
burger=document.querySelector('.burger')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('res-v-class');
    navlist.classList.toggle('res-v-class');

    navbar.classList.toggle('res-h-nav');



})