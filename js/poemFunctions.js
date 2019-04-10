// poem declarations:
let nightSky = poemData[0].lines
let firstRain = poemData[1].lines
let air = poemData[2].lines


//click function that asks user questions to create poem 
function startPoem(question, opt1, opt2, id1, id2) {
    let title = document.createElement('h2');
    title.textContent = question;
    let btn1 = document.createElement('button');
    btn1.textContent = opt1;
    btn1.setAttribute('id', id1);
    let btn2 = document.createElement('button');
    btn2.textContent = opt2;
    btn2.setAttribute('id', id2);
    alter.append(title, btn1, btn2);
    btn1.addEventListener('click', () => {
        firstLine(id1);
    })
    btn2.addEventListener('click', () => {
        firstLine(id2);
    })
}

function firstLine(choice){
    alter.innerHTML = '';
    for (let i = 0; i < firstRain.length; i++){
        if(choice === 'cloud'){
            if (firstRain[i].includes('clouds')) {
                createLine(firstRain, i, 'cloudLine');
            }
        }else if(choice === 'leaf'){
            if (firstRain[i].includes('tree')) {
                createLine(firstRain, i, 'leafLine');
            }
        } 
    }
    setTimeout(() => {
        createButton('glitter', 'glitter', secondLine);
        createButton('gold', 'gold', secondLine);
    }, 1000);
}

function secondLine(choice){
    alter.innerHTML = '';
    nightSky.forEach(function(line, i){
        if(choice === 'glitter' && line.includes('silk')){
            createLine(nightSky, i, 'glitterLine');
        }else if(choice ==='gold' && line.includes('waves')){
            createLine(nightSky, i, 'goldLine');
        }    
    });
    setTimeout(() => {
        createButton('low tide', 'low', thirdLine);
        createButton('high tide', 'high', thirdLine);
    }, 1000);
}

function thirdLine(choice){
    alter.innerHTML = '';
    let i = Math.floor((Math.random() * 16) + 1);
    if(choice === 'low'){
        createLine(air, i, 'lowLine');
    }else if(choice === 'high'){
        createLine(air, i, 'highline');
    }
    setTimeout(() => {
        createButton('raindrop', 'raindrop', fourthLine, firstRain);
        createButton('fireworks', 'fireworks', fourthLine, firstRain);
    }, 1000);
}

function fourthLine(choice, arr){
    alter.innerHTML = '';
    for(let line in arr){
        if (arr[line].includes(choice)){
            console.log(line)
            createLine(arr, line, 'fourthLine');
        }
    }
    setTimeout(() => {
        createButton('know', 'know', fifthLine, nightSky);
        createButton('where', 'where', fifthLine, nightSky);
    }, 1000);
}

function fifthLine(choice, arr){
    alter.innerHTML = '';
    for (let line of arr) {
        if (line.includes(choice)) {
            createLine(arr, line, 'fifthLine');
        }
    }
    setTimeout(() => {
        createButton('summoning', 'summoning', sixthLine, nightSky);
        createButton('spinning', 'spinning', sixthLine, nightSky);
    }, 1000);
}

function sixthLine(choice, arr){
    alter.innerHTML = '';
    arr.find((line)=>{
        if (line.includes(choice)) {
            createLine(arr, line, 'sixthLine');
            console.log('sixth')
        }
    })
    setTimeout(() => {
        createButton('substance', 'substance', seventhLine, air);
        createButton('shadows', 'shadows', seventhLine, air);
    }, 1000);
}

function seventhLine(choice, arr){
    alter.innerHTML = '';
    for(let i = 0; i < 100; i++){
        var random = Math.floor(Math.random() * arr.length);
    }
    createLine(arr, random, 'seventhLine');
    setTimeout(() => {
        createButton('absence', 'absence', eighthLine, firstRain);
        createButton('fruit', 'slender', eighthLine, firstRain);
    }, 1000);
}

function eighthLine(choice, arr){
    alter.innerHTML = ''
    findChoice(arr, choice, 'eighthLine');
    createButtons('saturn', 'saturn', 'moon', 'moon', ninthLine, nightSky);
}

function ninthLine(choice, arr){
    alter.innerHTML = ''
    findChoice(arr, choice, 'ninthLine');
    createButtons('oyster', 'oyster', 'pearl', 'pearl', tenthLine, air);
}

function tenthLine(choice, arr){
    alter.innerHTML = ''
    let rand1 = getRandom(arr);
    let rand2 = getRandom(arr);
    for(let i = 0; i < poemArray.length; i++){
        if(poemArray[i] == arr[rand1] || poemArray[i] == arr[rand2]){
            console.log('same')
            rand1 = getRandom(arr);
            rand2 = getRandom(arr)
        }
    }
    if(choice == 'oyster'){
        createLine(arr, rand1, 'tenthLine');
    }else if(choice == 'pearl'){
        createLine(arr, rand2, 'tenthLine');
    }
    setTimeout(() => {
        createButton('scramble poem', 'scramble', scramblePoem, poemArray);
        createButton('read as is', 'read', printPoem, poemArray);
        // 'save' poem or 'let go' will be passed in as buttons/click functions on the page that
        // prints either the scrambled poem or the poem as is
    }, 1000);
}


//functions that print lines to the DOM and make the corresponding buttons!
function createLine(arr, i, lineClass){
    let thisLine = arr[i] || i;
    let lineInDOM = document.createElement('div');
    lineInDOM.textContent = thisLine;
    lineInDOM.classList.add(lineClass);
    alter.appendChild(lineInDOM);
    poemArray.push(thisLine);
    console.log(poemArray)
}

function createButton(btnName, btnIdChoice, clickFunction, arr){
    let nextButton = document.createElement('button')
    nextButton.setAttribute('id', btnIdChoice)
    nextButton.textContent = btnName
    alter.appendChild(nextButton);
    nextButton.addEventListener('click', function(){
        clickFunction(btnIdChoice, arr);
    })
}

function createButtons(btnName1, btnId1, btnName2, btnId2, clickFunction, arr) {
    setTimeout(() => {
        createButton(btnName1, btnId1, clickFunction, arr);
        createButton(btnName2, btnId2, clickFunction, arr);
    }, 1000);
}

function findChoice(arr, choice, lineNum){
    for (let line in arr) {
        if (arr[line].includes(choice)) {
            createLine(arr, line, lineNum);
        }
    }
}

function getRandom(arr){
    return Math.floor(Math.random() * arr.length);
}


//functions for finishing/printing/scrambling/saving poem!
function printPoem(choice, arr){
    alter.innerHTML = '';
    arr.forEach(function(line){
        let lineOfPoem = document.createElement('DIV');
        lineOfPoem.classList.add('poem-line');
        lineOfPoem.textContent = line;
        alter.appendChild(lineOfPoem);
    });
    createButton('let go', 'letGo', letGo, poemArray);
}

function scramblePoem(choice, arr){
    //using the Fisher-Yates algorithm
    var i = 0
        , j = 0
        , temp = null

    for (i = arr.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    printPoem(choice, arr);
}
  

function letGo(){
    resetHome();
}

function emptyPoemArray() {
    poemArray = [];
}

//should i make a checkPoem function for all the random line insertions?? idk...

//consider a recursive option, using a single poem (one longer than the ones used here)
//and Math.random() to pull the lines with each button click...will require some thinking
//but you can do it!
