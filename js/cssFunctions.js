let screen = document.querySelector('.screen')


function fadeIn(itemToFadeIn, time){
    alter.style.opacity = '1'
    alter.style.transition = 'opacity 1s'
    setTimeout(() => {
        itemToFadeIn.style.opacity = '1';
        itemToFadeIn.style.transition = 'opacity 1s, filter 1s';
    }, time)
    
}

function fadeInMultiple(arr) {
    alter.style.opacity = '1'
    alter.style.transition = 'opacity 1s'
    setTimeout(() => {
        arr.forEach(element => {
            element.style.opacity = '1';
            element.style.transition = 'opacity 1s, filter 1s';
        });
    }, 1500)

}

function whiteWash(){
    alter.style.opacity = '0';
    alter.style.transition = 'opacity 1s';
    console.log('white')
}
