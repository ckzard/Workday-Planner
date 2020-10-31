var timesOfDay = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var inputCounter = 0;
var todos = [];

$(".row").clone().appendTo(".container");
$(".row").clone().appendTo(".container");
$(".row").clone().appendTo(".container");
//everytime the above line is called, it duplicates what is there, so now there are 8 rows


//the code below updates the time box to descend to from 9 - 5
var timeContainer = document.querySelector(".container");
var timeSlotList = timeContainer.getElementsByTagName("aside");

function init() {
    //when application begins we check sessionstorage and take items if they are there
    storedTodos = JSON.parse(sessionStorage.getItem("TodoList"));
    if (storedTodos !== null) {
        todos = storedTodos;
    }
}

function storeTodos() {
    
}

function renderTodos () {

}


for (let i = 0; i < timeSlotList.length; i++) {
    if (i <= 2) {
        timeSlotList[i].textContent = timesOfDay[i] + " AM";
    } else {
        timeSlotList[i].textContent = timesOfDay[i] + " PM";
    }
}

timeContainer.addEventListener("click", function (event) {
    var element = event.target;
    console.log(element)        
    })

this.addEventListener("keypress", function (event) {
        
    var keyPress = event;
    if (keyPress.code === "Enter") {
        console.log("ENTER PRESSED")
        console.log(event.target.value);
        todos.push(event.target.value);
        //upon pressing enter, we push the value of the input box currently being targeted to the list of todos
        sessionStorage.setItem("TodoList", JSON.stringify(todos));
        //then we set the new list into sessionstorage to be reused
        event.target.value = "";
        }
})

init();



