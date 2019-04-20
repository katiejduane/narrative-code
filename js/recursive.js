

function recursivePoem(arr){
    var recursedPoem = [];
    function helpKatieRecurse(arr){
        if(recursedPoem.length === 10){
            setTimeout(() => {
                alter.innerHTML = '';
                createRecursiveButton('read poem', 'read-rec-poem', printPoem, recursedPoem);
            }, 1000)
            return;
        }
        alter.innerHTML = '';
        let randomNum = getRandom(arr)
        createRecursiveLine(arr, recursedPoem, randomNum, 'recursive-line')
        setTimeout(() => {
            createRecursiveButton('next', 'next', helpKatieRecurse, poemToRecurse);
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
    arr2.push(thisLine);
    console.log(arr2)
}

function createRecursiveButton(btnName, btnId, clickFunction, arr) {
    let recurseButton = document.createElement('button')
    recurseButton.setAttribute('id', btnId)
    recurseButton.textContent = btnName
    alter.appendChild(recurseButton);
    recurseButton.addEventListener('click', function () {
        clickFunction(arr);
    })
}