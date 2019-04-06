// poem declarations:
let nightSky = poemData[0].lines
let firstRain = poemData[1].lines
let air = poemData[1].lines


//click function that initializes the poem scrambling
function advOptions(question, opt1, opt2, id1, id2) {
    let title = document.createElement('h2')
    title.textContent = question;
    let btn1 = document.createElement('button');
    btn1.textContent = opt1;
    btn1.setAttribute('id', id1);
    let btn2 = document.createElement('button');
    btn2.textContent = opt2;
    btn2.setAttribute('id', id2);
    alter.append(title, btn1, btn2)
    btn1.addEventListener('click', () => {
        cloudPoem();
    })
}

function cloudPoem(){
    let path = 'cloud';
    console.log('cloud')
    alter.innerHTML = '';
    for (let i = 0; i < firstRain.length; i++){
        console.log(firstRain[i])
        if (firstRain[i].includes('clouds')){
            console.log('yes')
            createLine(firstRain, i, 'cloudLine')
        }
    }
}

function createLine(arr, i, lineClass){
    let thisLine = arr[i];
    let line = document.createElement('div');
    line.textContent = thisLine;
    line.classList.add(lineClass);
    alter.appendChild(line);
    poemArray.push(thisLine);
}

function createButton(btnName, btnClass){
    // maybe this will be a callback passed to createLine? idk...
    let nextButton = document.createElement('button')
    nextButton.classList.add(btnClass)
}

// const impossibleFind = colors.find((color) => {
//     if (color.colorName === "Purple") {
//         return true;
//     } else {
//         return false;
//     }
// })

function leafPoem() {
    let path = 'leaf';
    let firstLine = firstRain.find((line) => {

    })
}