$(document).ready( function() {
// displays Day, Month date in the header
$("#currentDay").text(moment().format("dddd, MMMM Do"));

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
        } else if (realTime === timeTest) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
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

    var text10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#ten").val("");
    $("#ten").val(text10);

    var text11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#eleven").val("");
    $("#eleven").val(text11);

    var text12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#twelve").val("");
    $("#twelve").val(text12);

    var text1 = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#one").val("");
    $("#one").val(text1);

    var text2 = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#two").val("");
    $("#two").val(text2);

    var text3 = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#three").val("");
    $("#three").val(text3);

    var text4 = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#four").val("");
    $("#four").val(text4);

    var text5 = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#five").val("");
    $("#five").val(text5);

}
    saveText();
    hourColor();
});