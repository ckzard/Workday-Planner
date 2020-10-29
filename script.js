$(document).ready(function () {

var timesOfDay = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (let i = 0; i < timesOfDay.length; i++) {
    var timeSlot = $("<button>");
    timeSlot.addClass("time time-color col-lg-12");
    timeSlot.attr("data-time", timesOfDay[i]);
    timeSlot.text(timesOfDay[i]);
    timeSlot.attr("style", "height: 100px; text-align: left;");
    $(".container").append(timeSlot);
    timeSlot.append("<p class='innertext'>");
    var timeText = $(".innertext");
    timeText.attr("style", "text-align: center;");
    // timeSlot.append("<input class='timeInput'>");
}
//generates timeslots from top of the page going down
$(".time").on("click", function () {
    $(this).children(".innertext").text("THING TO DO");
    //selects the p tag inside the button and makes its text "HELLO"

    })

})

