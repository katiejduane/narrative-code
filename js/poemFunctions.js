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
        createButton('glitter', 'glitter', secondLine)
        createButton('gold', 'gold', secondLine)
    }, 2000);
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
        createButton('low tide', 'low', thirdLine)
        createButton('high tide', 'high', thirdLine)
    }, 2000);
}

function thirdLine(choice){
    alter.innerHTML = '';
    let i = Math.floor((Math.random() * 16) + 1);
    if(choice === 'low'){
        createLine(air, i, 'lowLine')
    }else if(choice === 'high'){
        createLine(air, i, 'highline')
    }
    setTimeout(() => {
        createButton('green', 'green', fourthLine)
        createButton('blue', 'blue', fourthLine)
    }, 2000);
}

function fourthLine(choice){
    console.log(choice)
}



//functions that print lines to the DOM and make the corresponding buttons!
function createLine(arr, i, lineClass){
    //maybe the actual LOOP or METHOD chould go HERE, and not in the function...?? idk, then
    //it would be easier to create different functions for different kinds of line creation?
    //think about it... OR, should i re-factor the 'firstLine' 'secondLine' etc to handle incoming arrays
    //so each is NOT hardcoded? IT WOULD BE SENT DOWN WHEN THE BUTTON IS CREATED AND THE CLICK HANDLER
    //IS ADDED!!!!!
    let thisLine = arr[i];
    let lineInDOM = document.createElement('div');
    lineInDOM.textContent = thisLine;
    lineInDOM.classList.add(lineClass);
    alter.appendChild(lineInDOM);
    poemArray.push(thisLine);
    console.log(poemArray)
}

function createButton(btnName, btnId, callback, arr){
    //WORKING ON MAYBE REFACTORING HOW THE BUTTON IS MADE/EXECUTED FOR PASSING OF ARRAYS
    //TO ELIMINATE HARD CODING ARRAY NAMES IN EACH LINE FUNCTION! :D
    let nextButton = document.createElement('button')
    nextButton.setAttribute('id', btnId)
    nextButton.textContent = btnName
    alter.appendChild(nextButton);
    nextButton.addEventListener('click', function(){
        callback(btnId, arr);
    })
}

function emptyPoemArray(arr) {
    poemArray = []
}


