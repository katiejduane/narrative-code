//functions that print lines to the DOM 
function createLine(arr, arr2, i, lineClass){
    let thisLine = arr[i] || i;
    let lineInDOM = document.createElement('p');
    lineInDOM.textContent = thisLine;
    lineInDOM.classList.add(lineClass);
    alter.appendChild(lineInDOM);
    fadeIn(lineInDOM, 1300)
    arr2.push(thisLine);
}

// functions that makes/prints buttons to DOM
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

function createSingleButton(btnName, btnId, clickFunction, arr) {
    let theButton = document.createElement('button')
    // theButton.style.opacity = '0';
    theButton.setAttribute('id', btnId)
    theButton.textContent = btnName
    alter.appendChild(theButton);
    theButton.addEventListener('click', function () {
        whiteWash();
        setTimeout(()=>{
            clickFunction(arr);
        },1500);
    })
    fadeIn(theButton, 500);
}

// function to get random num for randomized line generation
function getRandom(arr){
    return Math.floor(Math.random() * arr.length);
}

//functions that prints poem to the DOM
function printPoem(arr){
    alter.innerHTML = '';
    let poemBox = document.createElement('div');
    poemBox.classList.add('poem-box');
    alter.appendChild(poemBox);
    arr.forEach(function(line){
        let lineOfPoem = document.createElement('div');
        lineOfPoem.classList.add('poem-line');
        lineOfPoem.textContent = line;
        poemBox.appendChild(lineOfPoem);
    });
    createSingleButton('let go', 'letGo', letGo, arr);
}

// function to scramble poem using the Fisher-Yates algorithm
function scramblePoem(arr){
    var i = 0
        , j = 0
        , temp = null

    for (i = arr.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    printPoem(arr);
}
  
// clears out poem array and re-renders the landing page
function letGo(){
    resetHome();
}

//empties poem array, this is called in resetHome()
function emptyPoemArray() {
    poemArray = [];
}

