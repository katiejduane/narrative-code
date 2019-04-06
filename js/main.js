//var dec
let beginBtn = document.querySelector('#begin');
let aboutBtn = document.querySelector('#about');
let alter = document.querySelector('.alter');
let advBtn = document.querySelector('#adv');
let genBtn = document.querySelector('#gen');

let path;

// array to store lines of poem during narration
let poemArray = []


//menu button functions
advBtn.addEventListener('click', () => {
    alter.innerHTML = '';
    advOptions('would you rather be...', 'a cloud', 'a leaf', 'cloud', 'leaf');
    if(path === 'cloud'){
        console.log('cloud')
    }
})

genBtn.addEventListener('click', () => {
    alter.innerHTML = 'Coming soon!';
})

//poem scrambling ---> two main options: leaf or cloud, while there are numerous
//options within these two main options, ither or determines which parent function
//runs...

//cloud 
let cloud = document.querySelector('#cloud')
//maybe i'll have to have two complete functions? or use objects? i don't know...
if(alter.contains(cloud)){
    console.log('hi')
    cloud.addEventListener('click',()=>{
    cloudPoem();
    })
}

//leaf
let leaf = document.getElementById('#leaf');





//nav button functions
beginBtn.addEventListener('click', () => {
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
    let advBtn = document.createElement('li');
    advBtn.classList.add('choice');
    advBtn.setAttribute('id', 'adv')
    advBtn.textContent = 'choose-your-own-adventure';
    let genBtn = document.createElement('li');
    genBtn.classList.add('choice');
    genBtn.setAttribute('id', 'gen');
    genBtn.textContent = 'generative';
    list.appendChild(advBtn);
    list.appendChild(genBtn);
    welcome.appendChild(title);
    welcome.appendChild(p);
    welcome.appendChild(list);
    advBtn.addEventListener('click', () => {
        alter.innerHTML = '';
        advOptions('would you rather be...', 'a cloud', 'a leaf', 'cloud', 'leaf');
    })
    genBtn.addEventListener('click', () => {
        alter.innerHTML = 'Coming soon!';
    })
})

aboutBtn.addEventListener('click', () => {
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
})