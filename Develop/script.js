var today = moment();
$("#currentDay").text(today.format("MMM Do YY"));

var time = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

var mainBody = $('.container');

for (t = 0, x = 9; t < 9; t++, x++) {
    var allRows = $('<div>');
    allRows.attr('class', 'row time-block');
    allRows.attr('data', x);
    mainBody.append(allRows);


    var timeCol = $('<div>');
    timeCol.attr('class', 'hour col-3');
    timeCol.text(time[t]);
    allRows.append(timeCol);

    var apptCol = $('<input>');
    apptCol.attr('class', 'col-6 textarea form-label');
    apptCol.attr('id', x);
    allRows.append(apptCol);

    var saveCol = $('<button>');
    saveCol.attr('class', 'saveBtn col-3');
    saveCol.text('Save');
    allRows.append(saveCol);
}

var saveButton = $(".saveBtn");

var nineText = $("#9").text;
var tenText = $("#10").text;
var elevenText = $("#11").text;
var twelveText = $("#12").text;
var thirteenText = $("#13").text;
var fourteenText = $("#14").text;
var fifteenText = $("#15").text;
var sixteenText = $("#16").text;
var seventeenText = $("#17").text; 

saveButton.on("click", function(event){
    event.preventDefault(); 
    localStorage.setItem("hour9", nineTex);
    localStorage.setItem("hour10",tenText);
    localStorage.setItem("hour11", elevenText);
    localStorage.setItem("hour12", twelveText);
    localStorage.setItem("hour13", thirteenText);
    localStorage.setItem("hour14", fourteenText);
    localStorage.setItem("hour15", fifteenText);
    localStorage.setItem("hour16", sixteenText);
    localStorage.setItem("hour17", seventeenText);

}
)

function init() {
    nineText(localStorage.getItem("hour9"));
    tenText(localStorage.getItem("hour10"));
    elevenTex(localStorage.getItem("hour11"));
    twelveText(localStorage.getItem("hour12",));
    thirteenText(localStorage.getItem("hour13"));
    fourteenText(localStorage.getItem("hour14"));
    fifteenText(localStorage.getItem("hour15"));
    sixteenText(localStorage.getItem("hour16"));
    seventeenText(localStorage.getItem("hour17"));
}


// var currentTime = moment().hours();

// for (y=0; y < 8; y++){

// if (allRows[y].data = currentTime) {
//     apptCol.attr('class', 'col-6 textarea form-label present')
// }
// else if (allRows[y].data < currentTime) {
//     apptCol.attr('class', 'col-6 textarea form-label future')
// }
// else {
//     apptCol.attr('class', 'col-6 textarea form-label past');

// } }