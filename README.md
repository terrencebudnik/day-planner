# Day-planner

![Live Link](https://terrencebudnik.github.io/day-planner/)
[Screenshot]()

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner

THEN the current day is displayed at the top of the calendar
    -moment.js
        -find current format
    -jQuery
        -insert today.format

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
    -bootstrap
        -find 3 column grid
    -html
        -insert and adjust column width 
    -css
        -add id's for each column 
    -jQuery
        -iterate to create 8 rows 



WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future


WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist