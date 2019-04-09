// poem declarations:
let nightSky = poemData[0].lines
let firstRain = poemData[1].lines
let air = poemData[1].lines


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
    // console.log(choice)
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
    console.log(choice)
}

function emptyPoemArray(arr){
   poemArray = [] 
}


//functions using different array methods for locating lines!
function createLine(arr, i, lineClass){
    let thisLine = arr[i];
    let lineInDOM = document.createElement('div');
    lineInDOM.textContent = thisLine;
    lineInDOM.classList.add(lineClass);
    alter.appendChild(lineInDOM);
    poemArray.push(thisLine);
    console.log(poemArray)
}

function findSome(arr,i, searchVal){
    return arr[i] === searchVal;
}

function createButton(btnName, btnId, callback, cbId){
    let nextButton = document.createElement('button')
    nextButton.setAttribute('id', btnId)
    nextButton.textContent = btnName
    alter.appendChild(nextButton);
    nextButton.addEventListener('click', function(){
        callback(btnId);
    })
}

// not sure i'll need/want to ask more questions... we'll see how it goes without
// function createQuestion(question, questionClass) {
//     let title = document.createElement('h2');
//     title.textContent = question;
//     title.classList.add(questionClass);
//     alter.appendChild(title);
// }
