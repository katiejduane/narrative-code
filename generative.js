// for random/generative narrative creation 

//dataMuse API model to look at later when creating the 'random/generative' version of this; each click
//makes an API call based on their initial form input to create a very simple 10 line poem! :)

// my old code below is only for starting... it will get... a lot more complicated, and will be built out
// slightly differently in order to 'create' (and briefly 'save') a poem. 

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