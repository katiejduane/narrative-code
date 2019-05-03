
function startRecurse() {
    let title = document.createElement('p');
    title.textContent = 'click the button below to begin';
    let startRecursing = document.createElement('button');
    startRecursing.classList.add('recurse-btn');
    startRecursing.setAttribute('id', 'start-rec')
    startRecursing.textContent = 'recurse!';
    alter.appendChild(title)
    alter.appendChild(startRecursing);
    startRecursing.addEventListener('click', () => {
        alter.innerHTML = '';
        recursivePoem(poemToRecurse)
    })
}


function recursivePoem(arr){
    var recursedPoem = [];
    function helpKatieRecurse(arr){
        if(recursedPoem.length === 10){
            setTimeout(() => {
                alter.innerHTML = '';
                createRecursiveButton('read-rec-poem', printRecursivePoem, recursedPoem);
            }, 1000)
            return;
        }
        alter.innerHTML = '';
        let randomNum = getRandom(arr)
        createRecursiveLine(arr, recursedPoem, randomNum, 'recursive-line');
        arr.splice(randomNum, 1);
        console.log(arr)
        setTimeout(() => {
            createRecursiveButton('next', helpKatieRecurse, poemToRecurse);
        }, 1000)
    }
    helpKatieRecurse(poemToRecurse)
    return recursedPoem;
}


function createRecursiveLine(arr1, arr2, i, lineClass) {
    let thisLine = arr1[i];
    let lineInDOM = document.createElement('div');
    lineInDOM.textContent = thisLine;
    lineInDOM.classList.add(lineClass);
    alter.appendChild(lineInDOM);
    fadeIn(lineInDOM, 1300);
    arr2.push(thisLine);
    console.log(arr2)
}

function createRecursiveButton(btnId, clickFunction, arr) {
    let recurseButton = document.createElement('button');
    recurseButton.setAttribute('id', btnId);
    recurseButton.textContent = '--->';
    alter.appendChild(recurseButton);
    recurseButton.addEventListener('click', function () {
        whiteWash();
        setTimeout(() => {
            clickFunction(arr);
        }, 1500);
    })
    fadeIn(recurseButton, 500);
}

function printRecursivePoem(arr) {
    alter.innerHTML = '';
    arr.forEach(function (line) {
        let lineOfPoem = document.createElement('DIV');
        lineOfPoem.classList.add('poem-line');
        lineOfPoem.textContent = line;
        alter.appendChild(lineOfPoem);
    });
    createFinalButton('let go', 'letGo', letGo, arr);
}