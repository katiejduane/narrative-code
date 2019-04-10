# Narrative Code Project


# Description
I came up with this idea because I wanted opportunities to practice writing functions that used various array methods, as well as CSS animations. Since I'm a writer and an artist, the idea of using JavaScript and CSS to create an aesthetic/narrative experience for the user really interested me. What I also enjoyed was the fact that I'd never built anything like this before, so it forced me to do a lot of reading, research, and problem-solving when I was not sure there was a solution!

The 'lines' of each poem (there are three in use for this project) are written by me, but pulled, individually, based on user-input, to build a completely differet poem.

I will likely continue to re-factor and refine the functions. Even in this first draft I noted my ability to see where I could write leaner code and to adjust accordingly as I went along. 


# Technologies
- Vanilla Javascript, CSS, HTML
- [Datamuse API](https://www.datamuse.com/api/) (WIP; this is part two!)

# Challenges & Solutions
- Challenge: When a line of a poem is printed to the DOM, two buttons come along with it. Those buttons create the NEXT line of the poem. But! I wuickly realized I couldn't add a click function to a DOM element that didn't exist yet.
    - Solution: I tried if(element), but once the program ran, it didn't run again to re-check if the element existed later. I considered writing one parent function that contained all of the consecutive functions, but it grew exponentially, and this seemed like a bad and hard-to-manage solution. I looked into using Mutation Observers, but the syntax was too bulky and complex for such a (seemingly!) simple program. 

    FINALLY, I came up with a way to pass down the necessary variables and click handlers from one function to another. When a new line of the poem is generated, the buttons that follow recieve their own data (like name and id) and also the array, user choice, and click function they will run. 

    When the user clicks one of the buttons, the function that is called not only generates a new line of the poem, but also the additional pair of buttons, again, with necessary data passed in. 

- Challenge: Initial functions were bulky!
    - Solution: I figured out ways to make them more dynamic and re-usable; utilzing the 'choice' generated with each click to search the corresponding array for the line to be printed to the DOM. I was also able to create a singular function for creating two buttons as once, cutting down on the code within each poem function.

- Challenge: 
    - Solution: 


# Goals
- To improve my understanding and skill using various array methods and functions
- A choice-based narrative experience for the user where they 'create' a poem
- Use of CSS animations to make the experience more visually stimulating
- Option to save (email via form) poem and/or 'scramble' the poem upon finishing

