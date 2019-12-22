

function hamburgerToggle(){
    var hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('change');
    var plank = document.querySelector('.plank');
    var navList = document.querySelector('.navlist');
    
    if(navList.classList.contains('appended')){
        navList.classList.replace('appended', 'collapsed');
        plank.classList.replace('appended', 'collapsed');
        document.body.style = '';

    }else{
        navList.classList.replace('collapsed', 'appended');
        plank.classList.replace('collapsed', 'appended');
        document.body.style = 'margin: 0; overflow: hidden; height: 100%;';
    }

    

}



// hamburger.addEventListener('click', hamburgerToggle);

