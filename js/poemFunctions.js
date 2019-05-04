// poem declarations:
let nightSky = poemData[0].lines
let firstRain = poemData[1].lines
let air = poemData[2].lines


//click function that asks user questions to create poem 
function startPoem(question, opt1, opt2, id1, id2) {
    let title = document.createElement('h3');
    title.textContent = question;
    let btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    let btn1 = document.createElement('button');
    btn1.textContent = opt1;
    btn1.setAttribute('id', id1);
    let btn2 = document.createElement('button');
    btn2.textContent = opt2;
    btn2.setAttribute('id', id2);
    btnContainer.append(btn1, btn2);
    alter.append(title, btnContainer);
    btn1.addEventListener('click', () => {
        whiteWash();
        setTimeout(()=>{
            firstLine(id1);
        },1000)
        
    })
    btn2.addEventListener('click', () => {
        whiteWash();
        setTimeout(() => {
            firstLine(id2);
        }, 1000)
    })
}

function firstLine(choice){
    narrateChoice(firstRain, choice)
    setTimeout(() => {
        createButtons('silk', 'silk', 'waves', 'waves', secondLine)
    }, 1000);
}

function secondLine(choice){
    narrateChoice(nightSky, choice)
    setTimeout(() => {
        createButtons('low tide', 'low', 'high tide', 'high', thirdLine);
    }, 1000);
}

function thirdLine(choice){
    narrateRandom(air, choice)
    setTimeout(() => {
        createButtons('raindrop', 'raindrop', 'fireworks', 'fireworks', fourthLine);
    }, 1000);
}

function fourthLine(choice){
    narrateChoice(firstRain, choice)
    setTimeout(() => {
        createButtons('know', 'know', 'where', 'where', fifthLine);
    }, 1000);
}

function fifthLine(choice){
    narrateChoice(nightSky, choice)
    setTimeout(() => {
        createButtons('saturn', 'saturn', 'moon', 'moon', sixthLine);
    }, 1000);
}

function sixthLine(choice){
    narrateChoice(nightSky, choice)
    setTimeout(() => {
        createButtons('substance', 'substance', 'shadows', 'shadows', seventhLine);
    }, 1000);
}

function seventhLine(choice){
    narrateRandom(air, choice)
    setTimeout(() => {
        createButtons('absence', 'absence', 'fruit', 'slender', eighthLine);
    }, 1000);
}

function eighthLine(choice){
    narrateChoice(firstRain, choice)
    setTimeout(() => {
        createButtons('rays', 'rays', 'heaps', 'heaps', ninthLine);
    }, 1000);
}

function ninthLine(choice){
    narrateRandom(nightSky, choice)
    setTimeout(() => {
        createButtons('oyster', 'oyster', 'pearl', 'pearl', tenthLine);
    }, 1000);
}

function tenthLine(choice){
    narrateRandom(air, choice)
    setTimeout(() => {
        createFinalButton('scramble poem', 'scramble', scramblePoem);
        createFinalButton('read as is', 'read', printPoem);
    }, 2000);
}

//functions to reuse within each line creation

//for creating a line with a choice
function narrateChoice(arr,choice,lineNum){
    alter.innerHTML = '';
    for (let line of arr) {
        if (line.includes(choice)) {
            createLine(arr, line, lineNum);
        }
    }
}

//for creating a line with a random number
function narrateRandom(arr, choice, lineNum){
    alter.innerHTML = '';
    let randomNum = getRandom(arr);
    for (let i = 0; i < poemArray.length; i++) {
        if (poemArray[i] == arr[randomNum]) {
            randomNum = getRandom(arr);
        }
    }
    createLine(arr, randomNum, lineNum);
}

//functions that print lines to the DOM and make the corresponding buttons!
function createLine(arr, i){
    let thisLine = arr[i] || i;
    let lineInDOM = document.createElement('p');
    lineInDOM.textContent = thisLine;
    lineInDOM.classList.add("alt-line");
    alter.appendChild(lineInDOM);
    fadeIn(lineInDOM, 1300)
    poemArray.push(thisLine);
}

function createButtons(btn1Name, btn1IdChoice, btn2Name, btn2IdChoice, clickFunction){
    let btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    alter.appendChild(btnContainer);
    let nextBtn1 = document.createElement('button');
    nextBtn1.style.opacity = '0';
    nextBtn1.setAttribute('id', btn1IdChoice);
    nextBtn1.textContent = btn1Name;
    btnContainer.appendChild(nextBtn1);
    nextBtn1.addEventListener('click', function () {
        whiteWash();
        setTimeout(()=>{
            clickFunction(btn1IdChoice);
        }, 1000);
    });
    let nextBtn2 = document.createElement('button');
    nextBtn2.setAttribute('id', btn2IdChoice);
    nextBtn2.style.opacity = '0';
    nextBtn2.textContent = btn2Name;
    btnContainer.appendChild(nextBtn2);
    nextBtn2.addEventListener('click', function(){
        whiteWash();
        setTimeout(() => {
            clickFunction(btn2IdChoice);
        }, 1000);
    });
    fadeInMultiple([nextBtn1, nextBtn2])
}

function createFinalButton(btnName, btnIdChoice, clickFunction) {
    let endButton = document.createElement('button')
    endButton.style.opacity = '0';
    endButton.setAttribute('id', btnIdChoice)
    endButton.textContent = btnName
    alter.appendChild(endButton);
    endButton.addEventListener('click', function () {
        whiteWash();
        setTimeout(()=>{
            clickFunction(btnIdChoice);
        },1000);
    })
    fadeIn(endButton);
}


// function to get random num for randomized line generation
function getRandom(arr){
    return Math.floor(Math.random() * arr.length);
}

//functions for finishing/printing/scrambling/saving poem!
function printPoem(){
    alter.innerHTML = '';
    let poemBox = document.createElement('div');
    poemBox.classList.add('poem-box');
    alter.appendChild(poemBox);
    poemArray.forEach(function(line){
        let lineOfPoem = document.createElement('DIV');
        lineOfPoem.classList.add('poem-line');
        lineOfPoem.textContent = line;
        poemBox.appendChild(lineOfPoem);
    });
    createFinalButton('let go', 'letGo', letGo, poemArray);
}

function scramblePoem(){
    //using the Fisher-Yates algorithm
    var i = 0
        , j = 0
        , temp = null

    for (i = poemArray.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = poemArray[i];
        poemArray[i] = poemArray[j];
        poemArray[j] = temp;
    }
    printPoem();
}
  

function letGo(){
    resetHome();
}

function emptyPoemArray() {
    poemArray = [];
}

