// i'm getting stuck because i have SO many ideas about how to do this...
// and i think i could play with these ideas and make projects for each of them...
// do lots of neat OOP stuff with the poems/stories manipulating themselves...
// but for now, for the firt project, keep it simple, and stick with your original idea...
// a collection of phrases, from my work, that the user navigates through...
// and makes choices about where the story will go next, clicking a button...
// each button retrieves a new phrase, and triggers another dom event/css animation/whateva...
// so the data for now, will just bem random phrases from 'gravity'...
// store lines in variables and then play with using arrays/objects (maybe even classes w/ methods?) to access them and print to DOM...
// figure out how to 'save' the poem the user creates and print it to the DOM when they're done, but then it vanishes when they lick "begin again"

// 1 //poemData (maybe start here, without the randomization, this will be easier, but will still let you practice
// CSS animation and more elegant DOM manipulation!)
let nightSky = [
    'Delicate, threadbare—','partial to sky, to black silk that hangs', 'throwing light off its course',
    'As if rays could be redirected', 'as if summoning actually serves a purpose, does anything.',
    'Clear through the rings of Saturn', 'a moon the size of a pebble', 'skirts below, it spins',
    'conducting matters like ocean waves, and rain', 'I cannot pretend to know anything at all', 
    'Even these plates I clear,the silverware I place', 'the linen I fold into near-perfect squares',
    'Where is any of it?', 'And what is it for?'
]

// i think for the snippets below, i should use those "chance" collages 
// by various Dada artists as inspiration AND DRASTICALLY SHORTEN THEM (the
// snippets) so they're more anonymous and can be more easily assigned unqiue
// meanings by each user....!?!

// 2 // choose-your-own-adventure style story creation (!?!?!?!?)

let citrusFruits = "I saw them coming down: tiny black crescents in the sky, like slices of darkened citrus fruits, cradled by the air."
let watching = "Later, standing on the runway, I watched again as they left the plane."
let whiteDots = "They were nothing more than tiny white dots, barely visible pinpricks of light, until they’d fallen far enough to open up into color: yellow, pink, gold, black, pale green."
let freeFall = "Anything can enter a state of free fall. A stone from a cliff, an apple from a tree, a human from an airplane. It simply requires that you let gravity do all the work."
let whatIWanted = "That was what I wanted: to do nothing but fall freely, to let gravity take over, to be a tiny white dot in the blue sky and feel the earth pull me back to its surface."
let movement = "Somehow, falling out of the sky seemed like necessary movement toward whatever was next."
let flying = "So there I was, sitting, waiting until we were high enough, until Georgia became a distant patchwork of green and gold."
let edge = "I close my eyes and recall that doorway: the blinding blue, the rush of cold air, the unbelievable noise of the wind and the engines, the memory of nothing below me."
let clouds = "The numinous clouds below us held steady to their form and place—their white shocking from above, their stillness disturbing as the plane bobbed and rolled each time someone else leapt out of it."
let dive = "In twelve seconds, we fell approximately 1,500 feet."
let stoneThrouWater = "We were like a heavy stone through water: sinking into nothing, dropping without pause toward the bottom."
let air = "The air was deafening as we tore through it, placidly following the laws of physics."
let plummet = "I looked down at the earth as we plummeted toward it. As it clarified itself, as it unfolded into farmland, forests, backyards, pools, open fields, and narrow, winding roads."
let floating = "A human floating, a human in midair, legs hanging, looking down at the sunny tops of clouds."
let tiny = "Beneath her photo on Wikipedia, the caption reads: Ready to drop."
let parachutes = "They bloom rapidly, catching whatever air they can in order to expand."
let nineHundredFeet = "It feels instantaneous, like you travel no distance while the parachute is busy unfolding itself into a wide and fluttering arc overhead."
let stitched = "It felt like we were stitched into the air itself, like the parachute was a needle with a long thread, like the sky could be pulled down and twisted into a cord."
let death = "Maybe I’m not afraid to die. Maybe I just really, really, really don’t want to do it. I don’t want to leave."
let silent = "For the spectators below, we were silent as we dropped, as we sank, and as we expanded, as we opened up into color: florescent yellow with a red stripe. Parachute number thirteen."
let falling = "We were above the clouds and then level with the clouds and then below them."
let drive = "I passed though forests of towering loblolly pines, through pecan orchards filled with light that was sharply angled and golden, lazy and loose in its hold on earth."

let angleOfRepose = "The steepest angle that a slope can maintain before falling away is called its angle of repose."
let slopeFailure = "At which angle, I wonder, had my life started breaking up like distressed regolith, falling toward some place else?"
let massWasting = "Any number of stressors can trigger slope failure: but most often, the gentle yet persistent burden of gravity and time."
let wondering = "I spent every morning with my cup of coffee in the backyard, looking out at all of the kudzu as it grew ferociously over the trees and up the TV tower, wondering what the hell I was doing down here."
let crumbled = "I am happier, despite the fact that what was once stable, coherent rock has since crumbled."

let bath = "I let myself float for as long as I can and then I take note of my weight against the porcelain as the water vanishes."
let breathing = "My lungs feel the weight of the body they’re breathing against."
let fierce = "Feeling gravity on the ground is so commonplace we forget how strong it is, how fierce and constant that attraction."
let terminalVelocity = "No matter how far they fall, they will never reach a terminal velocity that is fatal to them. "
let threat = "As humans, though, gravity poses a sincere threat."

let einstein = "Albert Einstein proposed something radically different: that gravity was not a force, but a result of the curvature of spacetime."
let orbit = "Earth does not revolve around the sun because the sun pulls on us, but because we’re falling into curved space."
let leaveBehind = "They found it by finding what it left behind, the impressions it left in space after it had come and gone."
let speedOfLife = "But what is the speed of a life? What is the distance it travels? How long does one get? Where does it come from? And where does it go?"
let sustainMe = "More than anything, I wanted to feel the air sustain me, to feel it hold me in its body—the parachute a medium between forces that don’t ordinarily coalesce."

let gravityIsLove = "I’ve been thinking: maybe gravity is like love."
let serious = "I didn’t want anything to get in between gravity and me."
let attachment = "He tapped with his fingers all four points of attachment, over and over, and named them out loud for me, as if knowing where we were connected would make me feel better."
let youGoIGo = '“You see? You’re not going anywhere without me. Anywhere you go, I go, too.”'
let trust = "Do we trust life, the earth, the air, the people we love, ourselves: to hold us?"

let free = "Even if I still have so few answers, I’ve already done what frightened me the most.I am free."
let radioWaves = "Radio waves slosh through space unnoticed by humans."
let friction = "Air has friction."
let proof = "Sometimes you have to look for something in order to prove that it’s real."
let fallingAllTheTime = "We are all falling, all the time, at tens of thousands miles-per-hour, and yet we feel perfectly stationary."
let resist = "You do not resist."