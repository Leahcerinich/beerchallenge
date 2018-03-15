# beerchallenge
First collection of data is the hardware or thermostat

Second part of data is the API - Working out what to do with the data 

Collected all the data through arrays (hardware/thermostat) (assumption) I used a loop with an if else statement to work out what to do (with the API)

My first solution was using if else statements assessing each container and the safe and danger zone within each container. I realised that it was so many lines of code - So I decided to refactor using a full loop and a else if statement to log it onto the console.

Current equation = "beers current temp >= min temp or beers current temp <= max temp"

When you run the code the beers are all safe. As the current temp changes the danger and safe zones will change.

I've used vanilla JS to complete this challenge because it's the language I'm most familiar with and I wanted to keep it simple. 

Given my level of experience (junior/ entry level) I just wanted to focus on the basics. Given the opportunity I would of use the Mocha testing framework and TDD.

If I can make any reccomendations - I would integrate a GPS System into the API to monitor the outside tempature and location. The GPS will able to alert API & will be able to manipulate the data into either safe zone or danger zone

If we want to get completely technical and innovative we can implement a machine learning alogrthim that works out when the beer is likely to spoil based on established data sets and whether they have spoiled in the past. 

I've also sketched out a diagram as to how I've approached the problem.

Looking forward to presenting this challenge to you :) 
