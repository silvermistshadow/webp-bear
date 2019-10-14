# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

specs:
example (primary) input: `let fuzzy = new Bear("Fuzzy")`
0. should create and store Bear object and data
1. should have a name and a food level of 10 when it is created
  example input: `fuzzy`
  output: `Bear {name: "Fuzzy", foodLevel: 10}`
2. should have a food level of 7 after 3001 milliseconds
3. should get very hungry if the food level drops below zero
4. should get very hungry if 10 seconds pass without feeding (on hard difficulty)
5. should have a food level of ten if it is fed (standard feed, anyways)
  fuzzy.foodLevel = 5
  input: fuzzy.feed(10);
  output: fuzzy.foodLevel = 10
6. should change how much time it takes for the food level to fall if the user  selects another difficulty
  example input: user selects 'easy'
  example output, after 10 seconds: fuzzy.foodLevel = 8;

## Setup/Installation Requirements

* _Download or clone from git_
* _use 'npm install' in your terminal/shell/CLI_
* _create a .env file with your own api key_
* _use npm run start or npm run build_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_Javascript, Node.js, Webpack, Jasmine and Karma, among others_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
