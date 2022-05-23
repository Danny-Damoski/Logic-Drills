// This is a simple program to calculate the duration of the year on planets
// As we will only be working on linear algorithms (i.e no functions,lists etc)

// First, you need to understand the problem being thrown at you.
// Disclaimer: year(days) = 2 * pi * r/ v

// lets get input for our radius of the orbit & orbital speed
const r = prompt("Radius of the Orbit(million Km): ") 
const v = prompt("Orbital Speed(Km/s): ") 

// lets convert the inputs to numbers as input values are always in string data type

r = parseFloat(r)
v = parseFloat(v)

//  lets convert the radius from Million kilometers to just Kilometers


r = r * 10**6


//  Year expressed in seconds.
//  Length of circumference = (2 * p i* r / v)  ;   which is the orbit as we know
//  Divided by the speed
const year = 2 * pi * r / v

//  To translate seconds in to days , that is what we want right?
//  we divide by 60(1min = 60s)
//  then divide by 60 again (1hr = 60mins)
//  then divide by 24 (1day = 24hrs)

year = year /(60*60*24)

console.log(Math.floor(year))

//  Happy Coding!!