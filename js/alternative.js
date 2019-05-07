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
        setTimeout(() => {
            firstLine(id1);
        }, 1000)

    })
    btn2.addEventListener('click', () => {
        whiteWash();
        setTimeout(() => {
            firstLine(id2);
        }, 1000)
    })
}

function firstLine(choice) {
    narrateChoice(firstRain, choice, 'alt-line')
    setTimeout(() => {
        createButtons('silk', 'silk', 'waves', 'waves', secondLine)
    }, 1000);
}

function secondLine(choice) {
    narrateChoice(nightSky, choice, 'alt-line')
    setTimeout(() => {
        createButtons('low tide', 'low', 'high tide', 'high', thirdLine);
    }, 1000);
}

function thirdLine(choice) {
    narrateRandom(air, choice, 'alt-line')
    setTimeout(() => {
        createButtons('raindrop', 'raindrop', 'fireworks', 'fireworks', fourthLine);
    }, 1000);
}

function fourthLine(choice) {
    narrateChoice(firstRain, choice, 'alt-line')
    setTimeout(() => {
        createButtons('know', 'know', 'where', 'where', fifthLine);
    }, 1000);
}

function fifthLine(choice) {
    narrateChoice(nightSky, choice, 'alt-line')
    setTimeout(() => {
        createButtons('saturn', 'saturn', 'moon', 'moon', sixthLine);
    }, 1000);
}

function sixthLine(choice) {
    narrateChoice(nightSky, choice, 'alt-line')
    setTimeout(() => {
        createButtons('substance', 'substance', 'shadows', 'shadows', seventhLine);
    }, 1000);
}

function seventhLine(choice) {
    narrateRandom(air, choice, 'alt-line')
    setTimeout(() => {
        createButtons('absence', 'absence', 'fruit', 'slender', eighthLine);
    }, 1000);
}

function eighthLine(choice) {
    narrateChoice(firstRain, choice, 'alt-line')
    setTimeout(() => {
        createButtons('rays', 'rays', 'heaps', 'heaps', ninthLine);
    }, 1000);
}

function ninthLine(choice) {
    narrateRandom(nightSky, choice, 'alt-line')
    setTimeout(() => {
        createButtons('oyster', 'oyster', 'pearl', 'pearl', tenthLine);
    }, 1000);
}

function tenthLine(choice) {
    narrateRandom(air, choice, 'alt-line')
    setTimeout(() => {
        createSingleButton('scramble poem', 'scramble', scramblePoem, poemArray);
        createSingleButton('read as is', 'read', printPoem, poemArray);
    }, 2000);
}



//functions for different line types

//for creating a line with a choice
function narrateChoice(arr, choice, lineClass) {
    alter.innerHTML = '';
    for (let line of arr) {
        if (line.includes(choice)) {
            createLine(arr, poemArray, line, lineClass);
        }
    }
}

//for creating a line with a random number
function narrateRandom(arr, choice, lineClass) {
    alter.innerHTML = '';
    let randomNum = getRandom(arr);
    for (let i = 0; i < poemArray.length; i++) {
        if (poemArray[i] == arr[randomNum]) {
            randomNum = getRandom(arr);
        }
    }
    createLine(arr, poemArray, randomNum, lineClass);
}