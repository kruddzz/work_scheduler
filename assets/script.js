$(document).ready( function() {
// displays Day, Month date in the header
const m = moment();
// console.log(m);
$("#currentDay").text(m.format("dddd, MMMM Do"));

function hourColor () {
    
    var realTime = moment().hours();
    // console.log("Current Time" + realTime);

    // color change by time of day
    $(".input").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        // console.log(timeTest);
        
        if (realTime > timeTest) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (realTime < timeTest) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        } else {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
    });
}
// Save Buttons
$(".saveBtn").click(function() {
    text = $(this).siblings(".input").val();
    // console.log(text);
    time = $(this).siblings(".hour").text();
    // console.log(time);
    localStorage.setItem(time, JSON.stringify(text));

    hourColor();
    saveText();
});

function saveText () {
    var text9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#nine").val("");
    $("#nine").val(text9);
}
    saveText();
    hourColor();
});