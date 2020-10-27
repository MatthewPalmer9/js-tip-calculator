# JS Tip Calculator
Production: N/A
Staging: N/A

## Developers
[Matthew Palmer](https://github.com/matthewpalmer9)

## About
This project focuses on practice building a tip calculator in JavaScript-based programming. It serves to solve a real-world issue where parties question how much they should tip their waiter/waitress when dining out in public.

## Objectives
- Incorporate state of input
- Factor in dynamic values to return a calculated tip

## Challenges encountered
- This will be the first project I have worked on which requires the ability to pass a `<select>` `<option>` into React state. I solved this problem by researching methods to accomplish this. What I was missing is something so simple... assigning a value to each option and passing that value into state via `onChange={}`. This made me feel silly to forget, but I'm happy the solution was so simple.
- Applying a calculation on what it otherwise a string can be troublesome. I certainly did not want to be the fool who tried, so I had to do some conversions to display tip information in a hundredths format after being calculated in this.setState({}). Luckily, I remembered some important information I found online while practicing technical interview questions. Specifically, how the + works in front of a string. It converts numerical strings to integers. This was a very clean way to represent the logic in my application.

## Key Features
- A calculator that processes the tip owed to a waiter/waitress based on bill total, service rating and party count

## Tech Stack
- React.js
- Node.js
- JavaScript
- CSS
- HTML

## Dependencies 
| Dependency | URL      |
|-----------|-----------|
| None      | N/A       |

## Back-end Documentation
There is currently no back-end associated with this project.

## Getting started
To get the site running locally:
- Clone this repo
- Run `npm install` to ensure the default dependencies are installed
- Run `npm start` to run the application in a production environment 

## Scripts 
- `npm run dev` - Runs the development environment on your system
- `npm start` - Runs the production environment on your system

## Testing Documentation
There is currently no testing on this application.

## Making Contributions
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

### Issue/Bug Request
If you are having an issue with the existing project code, please submit a bug report under the following guidelines:
-Check first to see if your issue has already been reported.
-Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
-Create a live example of the problem.
-Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests
I would love to hear from you about new features which would improve this app and further the aims of my project. Please provide as much detail and information as possible to show me why you think your new feature should be implemented.

### Pull Requests
If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

**Pull Request Guidelines**

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of the developer(s).

# Js Tip Calculator
Welcome to my Js Tip Calculator Repo! The purpose of this project is to learn how to create a tip calculator that accounts for the bill total, excellence of service and separates the tip by how many people are sharing the bill. This is a great exercise as it solves a very real-world problem. People struggle to agree on how well a server should be tipped at a restaurant. 

## Objectives
- Incorporate the state of input
- Factor in dynamic values to return a strategically calculated tip

## Challenges encountered
1. This will be the first project I have worked on which requires the ability to pass a `<select>` `<option>` into React state. I solved this problem by researching methods to accomplish this. What I was missing is something so simple... assigning a value to each option and passing that value into state via `onChange={}`. This made me feel silly to forget, but I'm happy the solution was so simple.

2. Applying a calculation on what it otherwise a string can be troublesome. I certainly did not want to be the fool who tried, so I had to do some conversions to display tip information in a hundredths format after being calculated in `this.setState({})`. Luckily, I remembered some important information I found online while practicing technical interview questions. Specifically, how the `+` works in front of a string. It converts numerical strings to integers. This was a very clean way to represent the logic in my application. 

## Get Started
First, clone this repo `git clone https://github.com/MatthewPalmer9/js-tip-calculator`

Make sure you 