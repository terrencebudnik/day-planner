var root = $('.container');

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar


var today = moment(); 
$("#currentDay").text(today.format("MMM Do YY"));

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

var mainDiv = $('<div>');
mainDiv.attr('class', 'row'); 
root.append(mainDiv); 

var timeCol = $('<div>'); 
timeCol.attr('class', 'hour'); 
mainDiv.append(timeCol);



/



* <div class="row">
        <div class="col hour">
          9am
        </div>
        <div class="col-6">
          Add Appointments
        </div>
        <div class="col saveBtn">
          Save 
        </div> 

 */


   

