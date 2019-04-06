// a collection of phrases, from my work, that the user navigates through...
// and makes choices about where their 'chance poem' will go next, clicking a button...
// the buttons will be words that relate to the line(s) they are capable
// of printing; each button retrieves a new phrase, and triggers another dom event/css animation.

// what kind of functionality will i need? i know i want to pracitce using new/advanced
// array methods and object functionality. perhaps also recursion? in how it knows to
// 'keep going' (like maybe: the poem array they create needs to equal 10 lines), using helper
// function syntax to hold the data outside of the recursive function?

// also: how to load the buttons? because it's all random, there's not 
// a definite, navigable path of action where i can render buttons from. there will also perhaps
// need to be an array of buttons, and an array of corresponding functions that both trigger dom events
// and load lines from poems...

// figure out how to 'save' the poem the user creates and print it to the DOM when they're done, but then it vanishes when they lick "begin again"

// 1 //poemData (maybe start here, without the randomization, this will be easier, but will still let you practice
// CSS animation and more elegant DOM manipulation!)

// i should use those "chance" collages by various Dada artists as inspiration 
// for these little jumbled poems...

// should i make declared objects outside of the array, and then put their variable
// names in an array? idk....


let poemData = [
    {
        title: 'night sky',
        keywords: '',
        lines: [
            'Delicate, threadbare—', 'partial to sky, to black silk that hangs', 'throwing light off its course',
            'As if rays could be redirected', 'as if summoning actually serves a purpose, does anything.',
            'Clear through the rings of Saturn', 'a pebble like a moon', 'skirts below, it spins',
            'conducting matters like ocean waves, and rain', 'I cannot pretend to know anything at all',
            'Even these plates I clear,the silverware I place', 'the linen I fold into near-perfect squares',
            'Where is any of it?', 'And what is it for?'
        ]
    },
    {
        title: 'first rain',
        keywords: '',
        lines: [ 'The rain  fell yesterday','for the first time in months','the sky was swollen',
            'with orange clouds and everything', 'even the air, every raindrop', 'shimmered with the color of apricots',
            'a fruit that does not exist here', 'there were fireworks after', 'and I asked him', 
            'if they were to celebrate the rain', 'he only laughed', 'as we stood there, briefly connected',
            'beneath his mango tree', 'that everyday, sends its fruit earthward', 'without there ever being a fret', 
            'over loss, over absence', 'a long slender branch, carrying one less fruit.'
        ]
    },
    {
        title: 'air',
        keywords: '',
        lines: [ 'The air is best when it is so thick', 'that it becomes asubstance: something',
            'You can feel as you move through it', 'Like space opening and closing', 'Around you', 
            'Peeling itself apart, its skin on your skin', 'when at night, it is so heavy', 'that it hangs off the street lamp',
            'Like a loose veil', 'like a wide and sprawling skirt','when it catches the light and holds it', 
            'a small container where there are no secrets', 'The darkness sings around me', 'shadows of leaves play across the pavement',
            'as I pedal down the hill through this air', 'and I can feel it as it holds me', 'just like it holds the light'
        ]
    },

]

// console.log(poemData[0].lines[0])

let homeHTML = {
    title: 'welcome to narrative code',
    p1: 'please choose an option to create a poem:',
    li1: 'choose-your-own-adventure',
    li2: 'generative'
}

let aboutHTML = {
    title: 'what is narrative code?',
    p1: `i really wanted two things: a way to get more creative/expressive with my coding
        projects, and a way to practice advanced array methods, higher-order functions,
        css animations, and more efficient organization and use of data.`,
    p2: `narrative code has two parts: a poem-scrambler, which uses 3 poems written by
        me, plus input from the user, to scramble the poems and create something
        entirely new. there's also a generative poem (coming soon) which reaches out to the
        datamuse API based on user input to create a list-type poem. i hope you enjoy them!`
}



// 2 // choose-your-own-adventure style story creation (!?!?!?!?)
// use the datamust API for this :D, separate file!