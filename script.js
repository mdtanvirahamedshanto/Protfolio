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