var mainBody = $('.container');

var time = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];


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

    
var inputData = function () {


}

    var currentTime = moment().hours();

    for (y=0; y < 8; y++){

    if (allRows[y].data = currentTime) {
        apptCol.attr('class', 'col-6 textarea form-label present')
    }
    else if (allRows[y].data < currentTime) {
        apptCol.attr('class', 'col-6 textarea form-label future')
    }
    else {
        apptCol.attr('class', 'col-6 textarea form-label past');

} }


