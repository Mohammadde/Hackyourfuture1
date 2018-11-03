'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

// Add your code here

// change MIN to HOUR

 let changedDuration = tasks.map( tasks  => tasks.duration /= 60);
 console.log(changedDuration);

// Filter out everything that took less than two hours

let filterDuration = changedDuration.filter( changedDuration => changedDuration >= 2);
console.log (filterDuration);

// Multiply the each duration by a per-hour rate for billing and sum it all up.

let financial = changedDuration.map(changedDuration => changedDuration *= 30).reduce((total, amount) => total += amount);
console.log(" Maartje should earn " + financial + "€");
