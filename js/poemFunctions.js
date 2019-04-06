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
    btn2.addEventListener('click', () => {
        leafPoem();
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
            createLine(firstRain, i, 'cloudLine', createButton, 'watermelon slices', 'melon', 'smooth pebbles', 'pebbles')
                //change the names of the buttons, obv... and start console logging the various functions
                //so i can see the order of the stack/queue and evaluate how i will REALLY need to do this...
            
            //once they have this line in the DOM, one of two things will happen:
            //either a single button will appear to take them to the next question,
            //or they'll just choose between two buttons. in order for this to be
            //scrambled, there has to be either randomization with where [i] stops, or
            //if not looping, how a line is selected, OR, scope has to be adjusted so
            //that users do not travel through a single function with chained variable
            //defs and whatnot... i'm not sure how to do this. if it will require
            // callbacks or promises or recursion or what... because i can't just create
            //random functions to call on a whim because the DOM is always changing,
            //and something might not be "available" to the window or as a varaible to
            //get an event listener or whatever...
        }
    }
}

function createLine(arr, i, lineClass, cb, a1, a2, a3, a4){
    let thisLine = arr[i];
    let lineInDOM = document.createElement('div');
    lineInDOM.textContent = thisLine;
    lineInDOM.classList.add(lineClass);
    alter.appendChild(lineInDOM);
    poemArray.push(thisLine);
    if(alter.contains(lineInDOM)){
        cb(a1, a2);
        cb(a3, a4);
    }
}

function createButton(btnName, btnClass){
    // maybe this will be a callback passed to createLine? idk...
    let nextButton = document.createElement('button')
    nextButton.classList.add(btnClass)
    nextButton.textContent = btnName
    alter.append(nextButton)
}

function leafPoem() {
    let path = 'leaf';
    let firstLine = firstRain.find((line) => {

    })
}