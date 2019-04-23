let poemData = [
    {
        title: 'night sky',
        keywords: '',
        lines: [
            'delicate, threadbare—', 'partial to sky, to black silk that hangs', 'throwing light off its course',
            'as if rays could be redirected', 'as if summoning actually serves a purpose, does anything',
            'clear through the rings of saturn', 'a pebble like a moon skirts below, spinning',
            'conducting matters like ocean waves, and rain', 'I cannot pretend to know anything at all',
            'Even these plates I clear,the silverware I place', 'the linen I fold into near-perfect squares',
            'where is any of it? and what is it for?'
        ]
    },
    {
        title: 'first rain',
        keywords: '',
        lines: [ 'The rain  fell yesterday','for the first time in months','the sky was swollen',
            'with orange clouds and everything', 'even the air, every raindrop', 'shimmered with the color of apricots',
            'a fruit that does not exist here', 'there were fireworks after, and I asked him', 
            'if they were to celebrate the rain', 'he only laughed', 'as we stood there, briefly connected',
            'beneath his mango tree', 'that everyday, sends its fruit earthward', 'without there ever being a fret over loss, over absence',
            'a long slender branch, carrying one less fruit'
        ]
    },
    {
        title: 'air',
        keywords: '',
        lines: [ 'The air is best when it is so thick', 'that it becomes a substance: something',
            'You can feel as you move through it', 'Like space opening and closing', 'Around you', 
            'Peeling itself apart, its skin on your skin', 'when at night, it is so heavy', 'that it hangs off the street lamp',
            'Like a loose veil', 'like a wide and sprawling skirt','when it catches the light and holds it', 
            'a small container where there are no secrets', 'The darkness sings around me', 'shadows of leaves play across the pavement',
            'as I pedal down the hill through this air', 'and I can feel it as it holds me', 'just like it holds the light'
        ]
    },

]

// rescursive data
let poemToRecurse = ['someplace else', 'time is solid','someplace else','time is something you can touch', 'can pick up and take with you', 
'so it is also something you can break', 'something you can crack', 'in half and look inside of', 'what color would time be', 'if it were a thing?',
'if it were like a stone', 'that could be broken in two', 'I think: it would break easily', 'I think: it would be blue', 'imagine: time as a stone',
'you could slip inside your pocket and carry', 'imagine: time as a stone ground down', 'like sand, like the sand', 'at the edge of a continent',
'the sand that the sea sinks into', 'vanishing with a sigh', 'with relief', 'after travelingall those miles', 'imagine: time ground even finer:',
'like dust, it would settle and then drift','floating in and out of the sunlight', 'becoming and unbecoming without end', 'here: I am always so busy fighting with time', 
'with its absurd need to continue', 'all that forward momentum', 'but in this someplace else', 'I’m careful with it', 'sitting there', 'my arms outstretched, waiting',
'for time to fall', 'ready to catch it, but', 'so afraid: to miss it', 'so prepared: to lose', 'and later, when they examine the crash site', 'I’m long gone, but the stone that fell',
'It’s called Jasper, he says', 'most often red, but in this case: blue'];


// page data
let homeHTML = {
    title: 'welcome to narrative code',
    p1: 'please choose an option to create a poem:',
    li1: 'choose-your-own-adventure',
    li2: 'generative'
}

let aboutHTML = {
    title: 'what is narrative code?',
    p1: `i really wanted two things: a way to get more creative/expressive with my coding
        projects, and a way to practice array methods, higher-order functions,
        css animations, and more efficient organization and use of data.`,
    p2: `narrative code has three parts: a poem-scrambler, which uses 3 poems written by
        me, plus input from the user, to scramble the poems and create something
        entirely new. there's also a generative poem which reaches out to the
        Datamuse API (with user input) to create a list-type poem. last, you can create a
        randomized poem by way of recursion. i hope you enjoy them!`
}