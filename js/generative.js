// for random/generative narrative creation 
const apiBaseUrl = `https://api.datamuse.com/words?rel_trg=`
let wordInput = document.getElementById('word-input');
const submitButton = document.getElementById('submit-btn');
let alter = document.querySelector('.alter');

let generatedPoem = [];

//dataMuse API model to look at later when creating the 'random/generative' version of this; each click
//makes an API call based on their initial form input to create a very simple 10 line poem! :)

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let wordChoice = wordInput.value;
    console.log(wordChoice)
    let wordSearchURL = `${apiBaseUrl}${wordChoice}&max=5`
    alter.innerHTML = '';
    axios.get(wordSearchURL)
        .then(function (res) {
            printWords(res)
        })
        .catch(function () {
            console.log('error!')
        })
})

function printWords(res){
    if (generatedPoem.length === 10) {
        alter.innerHTML = 'your poem is finished! soon i will add a button so you can read it!';
        makePrintButton(generatedPoem);
    }else{
        res.data.forEach((word) => {
            console.log(word.word)
            let wordBtn = document.createElement('button')
            wordBtn.textContent = word.word;
            wordBtn.classList.add('word-result');
            wordBtn.type = 'submit';
            wordBtn.addEventListener('click', (event) => {
                event.preventDefault();
                let thisWord = event.target.textContent
                generatedPoem.push(thisWord)
                addMoreWords(thisWord)
                console.log(generatedPoem);
            })
            alter.appendChild(wordBtn)
        })
    }
}

function addMoreWords(word){
    event.preventDefault();
    let wordChoice = word;
    console.log(wordChoice)
    let wordSearchURL = `${apiBaseUrl}${wordChoice}&max=5`
    alter.innerHTML = '';
    axios.get(wordSearchURL)
        .then(function (res) {
            printWords(res)
        })
        .catch(function(err) {
            console.log(err)
        })
}

function makePrintButton(arr){
    let printGenPoem = document.createElement('button');
    printGenPoem.textContent = 'read poem';
    printGenPoem.setAttribute('id', 'print-gen-btn');
    alter.appendChild(printGenPoem);
    printGenPoem.addEventListener('click', () => {
        printPoem(arr)
    })
}

function printPoem(arr){
    alter.innerHTML = '';
    arr.forEach(function (line) {
        let lineOfPoem = document.createElement('div');
        lineOfPoem.classList.add('gen-poem-line');
        lineOfPoem.textContent = line;
        alter.appendChild(lineOfPoem);
    });
    arr = []
    let linkHome = document.createElement('a')
    linkHome.setAttribute('href', 'index.html')
    linkHome.textContent = 'home'
    alter.appendChild(linkHome);
}


// function to print the 'about' section ('begin again' will link back to home)
let aboutBtn = document.getElementById('about');
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