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
}

function cloudPoem(){
    let path = 'cloud';
    for (let i = o; i < firstRain.length; i++){
        if (firstRain[i].includes('clouds')){
            let firstLine = firstRain[i];
            let line = document.createElement('div');
            line.textContent = firstLine;
            line.classList.add('clouds');
            alter.appendChild(line);
            poemArray.push(firstLine);
        }else{
            return;
        }
    }
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