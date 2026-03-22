# IS120 HW9: JavaScript Tip Calculator
[Live Link](https://hamidjae.github.io/is120-hw9-hamidjaeyoung-jahangir/)

## Walk me through how you thought about this assignment. What aspects did you handle or accomplish first, and what did you leave for last?
Throughout the entire assignment, I had the thought of "I want to do X. Can searching online for X give me a Y to work with?" and then played around with it in the script.js to see how it worked, while referencing the documentation I got it from.
The very first aspect of this assignment that I handled was setting up dummy text in the HTML in order to see what the layout would be like for the assignment. I thought that creating a framework with which to work with would be best to effectively tackle this assignment, since the real meat of this assignment is the JavaScript itself, not HTML or CSS. The beginning of the assignment was me setting up script.js and main.css to work with the index.html. After that, I followed the instructions and first created radio buttons to play with inside of my script.js. The only thing in the index.html were those radio buttons before I started working on the script.js itself.

After that, I decided to tackle the "first tip radio button" problem first, using .checked = true in order to default the selection to be the very first item using querySelector.
The next part of this assignment for me was the event handlers, since I needed two: when input was entered, and when the user changes which tip button they want. For this, I looked online and found out that .forEach was the exact answer to my question of how I would assign every single button to have this property. From what I understood, .forEach runs a loop through whatever you want, and applies the JavaScript code encased in the {} to run on all of them. It was only a matter of just using the "change" property (while using "input" for the input box) in order for the .addEventListeners to work properly.

I then tackled the actual tip calculation function. The only thing of note here is converting everything to Number (since otherwise, I would be working with strings and I do not want any JavaScript chicanery) and using the .toFixed built-in function in order to round off the decimals. I then had to figure out how to dynamically change the text in the HTML, and decided to experiment with the .textContent built-in function, which I found through W3 Schools.

The very last aspect of this assignment was just very minimal styling through CSS. I was not quite sure how much "minimal styling" entails, so I opted to just set up a grid and used flex inside of those grid areas so that everything looks pretty, while using other CSS properties such as margin, gap, font-family, etc.

## What was the most difficult problem of this assignment and how did you work through it?
The most difficult problem of this assignment was figuring out how to allow the website to automatically call the tipCalculation function when the radio buttons were changed. As stated before, this ended up being the .forEach built-in function. I worked through it by searching "JavaScript how to apply scripts to multiple things", and ended up getting my answer through a Stack Overflow post. The concepts talked about in that post were a bit higher level than expected, but I started playing around with it in my own code and found out how it worked.

## What features would you like to add to this tip calculator in the future to make it more robust?
Disallowing negative numbers. Currently in my code, the tip calculator allows for negative inputs which means you get quite some interesting results (does this mean the tip is paid to you now?)
Allowing custom tip percentages. I only have four hard-coded percentage amounts, but it is entirely reasonable to allow a custom input to suit user demands.




