// for random/generative narrative creation 
const apiBaseUrl = `https://api.datamuse.com/words?rel_trg=`
let wordInput = document.getElementById('word-input');
const submitButton = document.getElementById('submit-btn');
let alter = document.querySelector('.alter');

let generatedPoem = [];

//dataMuse API model to look at later when creating the 'random/generative' version of this; each click
//makes an API call based on their initial form input to create a very simple 10 line poem! :)

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let wordChoice = wordInput.value;
    console.log(wordChoice)
    let wordSearchURL = `${apiBaseUrl}${wordChoice}&max=5`
    alter.innerHTML = '';
    axios.get(wordSearchURL)
        .then(function (res) {
            printWords(res)
        })
        .catch(function () {
            console.log('error!')
        })
})

function printWords(res){
    res.data.forEach((word)=>{
        console.log(word.word)
        let wordBtn = document.createElement('button')
        wordBtn.textContent = word.word;
        wordBtn.classList.add('word-result');
        wordBtn.type = 'submit';
        wordBtn.addEventListener('click', (event)=>{
            event.preventDefault();
            let thisWord = event.target.textContent
            generatedPoem.push(thisWord)
            getMoreWords(thisWord)
            console.log(generatedPoem);
        })
        alter.appendChild(wordBtn)
    })
}

function getMoreWords(word){
    event.preventDefault();
    let wordChoice = word;
    console.log(wordChoice)
    let wordSearchURL = `${apiBaseUrl}${wordChoice}&max=5`
    alter.innerHTML = '';
    axios.get(wordSearchURL)
        .then(function (res) {
            printWords(res)
        })
        .catch(function () {
            console.log('error!')
        })
    if (generatedPoem.length === 10) {
        return generatedPoem;
    }
}







// $('#word-form').submit((event) => {
//     //stops the browser from going forward
//     console.log('hello')
//     event.preventDefault();
//     let wordSearch = $('#search-input').val()
//     const wordSearchUrl = `${apiBaseUrl}${wordSearch}&max=15`
//     let newHTML = '';
//     $.getJSON(wordSearchUrl, (wordInfo) => {
//         console.log(wordInfo)
//         if (wordInfo.status == 404) {
//             newHTML = `<p> Didn't quite get that! </p>`;
//         }
//         else{
//             newHTML += `<div class="results">`
//             for (let i = 0; i < wordInfo.length; i++){
//                 if (i < wordInfo.length - 1) {
//                     newHTML += `<span class="word">${wordInfo[i].word}, </span>`
//                 } else if (i == wordInfo.length -1) {
//                     newHTML += `<span class="word">${wordInfo[i].word}</span>`
//                 }
//             }
//             newHTML += `</div>`
//         }
//         $('.word-info-box').html(newHTML)
//     })
// })

// the result word(s), onClick --> pushes that word (the target) to the poem array,
// and also calls back out to the API using that word as the paramter (along
// with whatever other parameters i use for searching)