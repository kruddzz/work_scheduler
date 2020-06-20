// displays Day, Month date in the header
const m = moment();
// console.log(m);
$("#currentDay").text(m.format("dddd, MMMM Do"));

function hourColor () {
    
    var realTime = moment().hours();
    // console.log("Current Time" + realTime);

    // 
    $(".input").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        console.log(timeTest);
        
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
$(document).ready( function() {
    hourColor ();
});