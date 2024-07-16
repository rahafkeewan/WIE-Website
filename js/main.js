window.onscroll = function(){
    if(window.scrollY >= window.innerHeight - 70){
        document.querySelector("header").classList.add("bg");
    }else{
        document.querySelector("header").classList.remove("bg");
    }
}

let links = [... document.querySelectorAll("header .nav-bars .links .list a")];

links.forEach(element => {
    element.addEventListener('click', (e)=>{
        links.forEach(ele =>{
            ele.classList.remove('active');
        })
        e.target.classList.add('active')
    });
});

let Achievements = [... document.querySelectorAll(".Achievements .nav .nav-item .btn")];

let AchievementsDetails = [... document.querySelectorAll(".Achievements .row .box")];


Achievements.forEach(element => {
    element.addEventListener('click', (e)=>{
        Achievements.forEach(ele =>{
            ele.classList.remove('main-btn');
        })
        e.target.classList.add('main-btn')
        
        AchievementsDetails.forEach(ele=>{
            ele.parentElement.style.display = 'none';
            if(e.target.dataset['achieve'] == ele.dataset['achieve']) {
                ele.parentElement.style.display = 'block';
            }
            if(e.target.dataset['achieve'] == 'All'){
                ele.parentElement.style.display = 'block';
            }
        })
        
    });
});