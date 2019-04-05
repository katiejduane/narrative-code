//var dec
let beginButton = document.querySelector('#begin')
let aboutButton = document.querySelector('#about')
let alter = document.querySelector('.alter')


//nav button functions
beginButton.addEventListener('click',()=>{
    alter.innerHTML = homeHTML;
})
aboutButton.addEventListener('click',()=>{
    alter.innerHTML = aboutHTML;
})