$(document).ready(function () {

var timesOfDay = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var inputCounter = 0;

$(".row").clone().appendTo(".container");
$(".row").clone().appendTo(".container");
$(".row").clone().appendTo(".container");
//everytime the above line is called, it duplicates what is there, so now there are 8 rows


//the code below updates the time box to descend to from 9 - 5
var timeContainer = document.querySelector(".container");
var timeSlotList = timeContainer.getElementsByTagName("aside");

for (let i = 0; i < timeSlotList.length; i++) {
    if (i <= 2) {
        timeSlotList[i].textContent = timesOfDay[i] + " AM";
    } else {
        timeSlotList[i].textContent = timesOfDay[i] + " PM";
    }
}

})

