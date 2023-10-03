var typed = new Typed(".typing",{
    strings: ["Web Designeer","App Designeer","Web Developer","App Developer","Youtuber"],
    typeSpeed: 80,
    backSpeed: 80,
});

var typed = new Typed(".typing2",{
    strings: ["App Designeer","Web Designeer","Web Developer","App Developer"],
    typeSpeed: 100,
    backSpeed: 80,
});

// Show/hide Ans 

const faqs = document.querySelectorAll('.fag');
faqs.forEach(fag =>{
    fag.addEventListener('click',()=>{
        fag.classList.toggle('open');

        //Change Icon

        const icon = fag.querySelector('.fag_icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus'
        }else{
            icon.className = 'fa-solid fa-plus'
        }
    })
})


// open nav bar 

const menu = document.querySelector('.nav_menu');
const menuBtn1 = document.querySelector('#open-menu-btn');
const menuBtn2 = document.querySelector('#close-menu-btn');

menuBtn1.addEventListener('click',()=>{
    menu.style.display = "flex";
    menuBtn2.style.display = "inline-block";
    menuBtn1.style.display = "none";
})

// Colose Nav menu

const closeNav = ()=>{
    menu.style.display = "none";
    menuBtn2.style.display = "none"
    menuBtn1.style.display = "inline-block";
}
menuBtn2.addEventListener('click',closeNav)


// nav color change scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>100)
})