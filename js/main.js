//var dec
let beginBtn = document.querySelector('#begin');
let aboutBtn = document.querySelector('#about');
let alter = document.querySelector('.alter');
let altBtn = document.querySelector('#alt');
let genBtn = document.querySelector('#gen');
let recurseBtn = document.querySelector('#recurse');

// functions for DOM with home/about pages
function aboutNarrative(){
    alter.innerHTML = '';
    let about = document.createElement('div');
    about.classList.add('about');
    alter.appendChild(about);
    let title = document.createElement('h1');
    title.textContent = aboutHTML.title;
    let p1 = document.createElement('p');
    p1.textContent = aboutHTML.p1;
    let p2 = document.createElement('p');
    p2.textContent = aboutHTML.p2;
    about.appendChild(title);
    about.appendChild(p1);
    about.appendChild(p2);
}

function resetHome(){
    //there is a slight glitch here. if the user clicks 'begin again' and they have a set time out running for create buttons;
    //the buttons are appended to the dom and so sit below the 'welcome'. maybe creating a button should clear out the dom? or,
    //if begin again or ? are clicked, the set time out function needs to be cancelled somehow...? idk...
    alter.style.opacity = "1";
    alter.innerHTML = '';
    let welcome = document.createElement('div');
    welcome.classList.add('welcome');
    alter.appendChild(welcome);
    let title = document.createElement('h1');
    title.textContent = homeHTML.title;
    let p = document.createElement('p');
    p.textContent = homeHTML.p1;
    let list = document.createElement('ol');
    list.classList.add('menu');
    let altBtn = document.createElement('li');
    altBtn.classList.add('choice');
    altBtn.setAttribute('id', 'alt')
    altBtn.textContent = 'alternative';
    let linkToGen = document.createElement('a')
    linkToGen.setAttribute('href', 'generative.html')
    let genBtn = document.createElement('li');
    genBtn.classList.add('choice');
    genBtn.setAttribute('id', 'gen');
    genBtn.textContent = 'generative';
    linkToGen.appendChild(genBtn)
    let recurseBtn = document.createElement('li');
    recurseBtn.classList.add('choice');
    recurseBtn.setAttribute('id', 'recurse');
    recurseBtn.textContent = 'recursive';
    list.appendChild(altBtn);
    list.appendChild(linkToGen);
    list.appendChild(recurseBtn);
    welcome.appendChild(title);
    welcome.appendChild(p);
    welcome.appendChild(list);
    altBtn.addEventListener('click', () => {
        alter.innerHTML = '';
        startPoem('would you rather be...', 'a cloud', 'a leaf', 'cloud', 'tree');
    })
    recurseBtn.addEventListener('click', () => {
        alter.innerHTML = '';
        startRecurse();
    })
    emptyPoemArray();
    poemToRecurse = jasper.slice(0)
}


// ===================================== nav button functionality =========================================== //

beginBtn.addEventListener('click', () => {
    //cancel any setTimeOuts?
    resetHome();
})

aboutBtn.addEventListener('click', () => {
    //cancel any setTimeOuts?
    aboutNarrative();
})

// ======================================= poem functionality! ============================================== //

// array to store lines of poem during narration
let poemArray = []

//start the choose-your-own-altenture style poem!
altBtn.addEventListener('click', () => {
    alter.innerHTML = '';
    startPoem('would you rather be...', 'a cloud', 'a leaf', 'cloud', 'tree');
})

//recursive poem start
recurseBtn.addEventListener('click', () => {
    alter.innerHTML = '';
    startRecurse();
    
})

