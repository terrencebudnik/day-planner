var today = moment();
$("#currentDay").text(today.format("MMM Do YY"));
var currentTime = moment().hours();
var container = $('.container');

var timeRow = $('.row'); 

var apptCol = $('.col-6'); 

var saveAppt = $(".saveBtn"); 


var nine = $('#nine');
var ten= $('#ten');
var eleven = $('#eleven');
var twelve = $('#twelve');
var thirteen = $('#thirteen');
var fourteen = $('#fourteen');
var fifteen= $('#fifteen');
var sixteen = $('#sixteen');
var seventeen = $('#seventeen'); 

saveAppt.on("click", function(event) {
    event.preventDefault(); 

   
    var nineInput = nine.val();
    var tenInput = ten.val();
    var elevenInput = eleven.val();
    var twelveInput = twelve.val();
    var thirteenInput = thirteen.val();
    var fourteenInput = fourteen.val();
    var fifteenInput = fifteen.val();
    var sixteenInput =sixteen.val();
    var seventeenInput = seventeen.val(); 
    
    
    
    
    localStorage.setItem("nineInput", nineInput);
    localStorage.setItem("tenInput",tenInput);
    localStorage.setItem("elevenInput", elevenInput);
    localStorage.setItem("twelveInput", twelveInput);
    localStorage.setItem("thirteenInput", thirteenInput);
    localStorage.setItem("fourteenInput", fourteenInput);
    localStorage.setItem("fifteenInput", fifteenInput);
    localStorage.setItem("sixteenInput", sixteenInput);
    localStorage.setItem("seventeenInput", seventeenInput);

   
})

var inputData = function () {
  
     nine = localStorage.getItem("nineInput");
     localStorage.getItem("tenInpput");
     localStorage.getItem("elevenInput");
     localStorage.getItem("twelveInput",);
     localStorage.getItem("thirteenInput");
     localStorage.getItem("fourteenInput");
     localStorage.getItem("fifteenInput");
     localStorage.getItem("sixteenInput");
     localStorage.getItem("seventeenInput");


}



inputData(); 

for (var x = 0; x < 9; x++) {
    if (timeRow[x].dataset.time == currentTime) {
        timeRow[x].classList.remove("past");
        timeRow[x].classList.remove("future");
        timeRow[x].classList.add("present");

    };
    if (timeRow[x].dataset.time > currentTime) {
        timeRow[x].classList.remove("past");
        timeRow[x].classList.remove("present");
        timeRow[x].classList.add("future");

    };
    if (timeRow[x].dataset.time < currentTime) {
        timeRow[x].classList.remove("present");
        timeRow[x].classList.remove("future");
        timeRow[x].classList.add("past");

    }
};

