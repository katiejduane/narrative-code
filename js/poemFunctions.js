// poem declarations:
let nightSky = poemData[0].lines
let firstRain = poemData[1].lines
let air = poemData[1].lines


//click function that asks user questions to create poem 
function askQuestion(question, opt1, opt2, id1, id2) {
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
    console.log(choice)
    alter.innerHTML = '';
    for (let i = 0; i < firstRain.length; i++){
        if(choice === 'cloud'){
            if (firstRain[i].includes('clouds')) {
                createLineLoop(firstRain, i, 'cloudLine');
                setTimeout(() => {
                    createButton('a pearl', 'pearl')
                    createButton('gold', 'gold')
                }, 2000);
            }
        }else if(choice === 'leaf'){
            if (firstRain[i].includes('tree')) {
                createLineLoop(firstRain, i, 'leafLine');
                setTimeout(() => {
                    createButton('a pearl', 'pearl')
                    createButton('gold', 'gold')
                }, 2000);
            }
        } 
    }
}


function secondLine(choice){

}

function createLineLoop(arr, i, lineClass){
    let thisLine = arr[i];
    let lineInDOM = document.createElement('div');
    lineInDOM.textContent = thisLine;
    lineInDOM.classList.add(lineClass);
    alter.appendChild(lineInDOM);
    poemArray.push(thisLine);
    console.log(poemArray)
}

function createLineMethod(){

}

function createButton(btnName, btnId){
    let nextButton = document.createElement('button')
    nextButton.setAttribute('id', btnId)
    nextButton.textContent = btnName
    alter.appendChild(nextButton);
}

// not sure i'll need/want to ask more questions... we'll see how it goes without
// function createQuestion(question, questionClass) {
//     let title = document.createElement('h2');
//     title.textContent = question;
//     title.classList.add(questionClass);
//     alter.appendChild(title);
// }
