# Js Tip Calculator
Welcome to my Js Tip Calculator Repo! The purpose of this project is to learn how to create a tip calculator that accounts for the bill total, excellence of service and separates the tip by how many people are sharing the bill. This is a great exercise as it solves a very real-world problem. People struggle to agree on how well a server should be tipped at a restaurant. 

## Objectives
- Incorporate the state of input
- Factor in dynamic values to return a strategically calculated tip

## Challenges encountered
1. This will be the first project I have worked on which requires the ability to pass a `<select>` `<option>` into React state. I solved this problem by researching methods to accomplish this. What I was missing is something so simple... assigning a value to each option and passing that value into state via `onChange={}`. This made me feel silly to forget, but I'm happy the solution was so simple.

2. Applying a calculation on what it otherwise a string can be troublesome. I certainly did not want to be the fool who tried, so I had to do some conversions to display tip information in a hundredths format after being calculated in `this.setState({})`. Luckily, I remembered some important information I found online while practicing technical interview questions. Specifically, how the `+` works in front of a string. It converts numerical strings to integers. This was a very clean way to represent the logic in my application. 