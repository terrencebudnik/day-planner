var today = moment(); 
$("#currentDay").text(today.format("MMM Do YY"));

var currentTime = moment().hours(); 

var time = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm","5pm"]; 

var mainBody = $('.container'); 

for (t=0, x=9; t < 9; t++, x++) {
    var allRows = $('<div>');
    allRows.attr('class', 'row time-block'); 
    allRows.attr('data', x); 
    mainBody.append(allRows); 

  
    var timeCol = $('<div>'); 
    timeCol.attr('class', 'hour col-3');
    timeCol.text(time[t]);
    allRows.append(timeCol); 
  

    // var apptCol = $('<input>');
    // apptCol.attr('class', 'col-6 textarea form-label');
    // allRows.append(apptCol); 

    // var saveCol = $('<button>');
    // saveCol.attr('class', 'saveBtn col-3');
    // saveCol.text('Save'); 
    // allRows.append(saveCol); 
 
}
    
var apptCol = $('<input>');
    apptCol.attr('class', 'col-6 textarea form-label');
    allRows.append(apptCol); 



// if (allRows[t].data = currentTime) {
//     apptCol.attr('class','col-6 textarea form-label present')
// }
// else if (allRows[t].data < currentTime) {
//     apptCol.attr('class','col-6 textarea form-label future')
//     }
// else {
//     apptCol.attr('class','col-6 textarea form-label past'); 
// }


