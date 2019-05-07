let poemToRecurse = jasper.slice(0)

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
                createSingleButton('read poem', 'read-rec-poem', printPoem, recursedPoem);
            }, 1000)
            return;
        }
        alter.innerHTML = '';
        let randomNum = getRandom(arr)
        createLine(arr, recursedPoem, randomNum, 'recursive-line');
        arr.splice(randomNum, 1);
        setTimeout(() => {
            createSingleButton('--->', 'next', helpKatieRecurse, poemToRecurse);
        }, 1000)
    }
    helpKatieRecurse(poemToRecurse)
    return recursedPoem;
}

