# work_scheduler
// USE CASES:
    // 1) When opened the planner presents:
        // a) Work Day Scheduler :A simple calendar app for scheduling your work day with current date listed below (at top of the page)
        // b) Time Blocks for daily operational hours 9 am to 5 pm 
        // c) lock data type button next to Time Blocks
    // 2) User may see time blocks in grey, red or green depending on time of day
        // a) grey is for time blocks that have passed.
        // b) red is for current time block
        // c) green is for future time blocks
    // 3)When user clicks on the time blocks
        // a) then the user should be able to enter an event
    // 4)When user clicks the lock button for that time block
        // a) The text for that time block is saved into local storage
    // 5)When the page is refreshed the data is still present
    // 6) if you click the lock button again
        // a) data remains on the page until page is refreshed or deleted
//HTML
// create time blocks and save buttons

// CSS
//create differnt stylesheets for different times of day 

// VARIABLES
// var date
    // will use moment.js
// multiple style sheets pending time of day

// EVENT LISTENERS
// User clicks a time block
// using jquery $, what html element are we going to select for the time blocks
// User Clicks the lock button to save data.
// on clock liseners for 
    // input area of time blocks
    // lock button