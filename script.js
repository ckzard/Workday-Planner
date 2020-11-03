var timesOfDay = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var militaryTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var currentHour = moment().hour();
// var currentDayTime = moment();
var inputCounter = 0;
var todos = [];

$(".row").clone().appendTo(".container");
$(".row").clone().appendTo(".container");
$(".row").clone().appendTo(".container");
//everytime the above line is called, it duplicates what is there, so now there are 8 rows

//the code targets time slots, to iterate through later
var workContainer = document.querySelector(".container");
var timeSlotList = workContainer.getElementsByTagName("aside");
//the code below targets description slots, to iterate through later
var descriptionList = workContainer.getElementsByTagName("section");
var inputSlotList = workContainer.getElementsByTagName("input");


//TIME FUNCTIONS FOR REAL TIME DISPLAY OF CURRENT TIME
function updateTime() {
    var currentDateTime = moment(new Date());
    $("#currentDay").text(currentDateTime);
}

$(document).ready(function(){
    updateTime();
    setInterval(updateTime, 1000);
});

//adding ids based on time to each inputslot
var x = 0;
$(".inputSlot").each(function() {
    var idTime = militaryTimes[x];
    $(this).attr("id", idTime);
    x++;
})

var y = 0;
$(".bi").each(function() {
    var idTime = militaryTimes[y];
    $(this).attr("id", idTime);
    y++;
})

var z = 0;
$(".saveIcon").each(function() {
    var idTime = militaryTimes[z];
    $(this).attr("id", idTime);
    z++;
})

function init() {
    //when application begins we check sessionstorage and take items if they are there
     //creates a variable to check what is stored in sessionstorage, and updates todos list with whats there as long as its not empty
    storedTodos = JSON.parse(sessionStorage.getItem("TodoList"));
    if (storedTodos !== null) {
        todos = storedTodos;
    }
    renderTodos();
    renderTimeTags();
    momentTimeColours();
    console.log(todos)
}

function renderTimeTags() {
    for (let i = 0; i < timeSlotList.length; i++) {
        if (i <= 2) {
            timeSlotList[i].textContent = timesOfDay[i] + " AM";
        } else {
            timeSlotList[i].textContent = timesOfDay[i] + " PM";
        }
    }
}

function momentTimeColours() {
    //iterate through timeslots and change colour depending on time
    for (let i = 0; i < descriptionList.length; i++) {
        var timeTag = parseInt(timeSlotList[i].textContent.split(" "));
        // var currentHour = 12; - for testing
        if (i > 3) {
            timeTag += 12;
            //adjusting for military time to compare to moment
        }
        
        if (timeTag < currentHour) {
            $(descriptionList[i]).addClass("past");
        } else if (timeTag > currentHour) {
            $(descriptionList[i]).addClass("future"); 
        } else if (timeTag == currentHour){
            $(descriptionList[i]).addClass("present");
        }
    }
}

function storeTodos() {
    sessionStorage.setItem("TodoList", JSON.stringify(todos));
    //creates a key TodoList and makes its values whatefver todos is
}

function renderTodos () {
    //function to iterate through todos, on each todo, iterate through description list items and change text content depending on if time ID matches the time slot
    for (let i = 0; i < todos.length; i++) {
        itemSplit = todos[i].split(" "); 
        var timeId = itemSplit.pop(); 
        console.log(todos[i]) 
        console.log(timeId) 
        for (let j = 0; j < inputSlotList.length; j++) {
            listTime = militaryTimes[j]; 
            if(listTime == timeId) { 
                itemSplit = todos[i].split(" ");
                itemSplit.pop();
                itemJoin = itemSplit.join(" "); 
                inputSlotList[j].placeholder = itemJoin;
            }
        }
    } 
}

//enter to save
this.addEventListener("keypress", function (event) {
        
    var keyPress = event;
    if (keyPress.code === "Enter" && event.target.value) {
        // console.log("ENTER PRESSED")
        // console.log(event.target)
        // console.log(event.target.value);
        todos.push(event.target.value + ' ' + event.target.id);
        //upon pressing enter, we push the value of the input box currently being targeted to the local list and call store function
        storeTodos();
        event.target.value = "";
        renderTodos();
        }
})

//click to save
this.addEventListener("click", function (event) {
        
    var element = event.target;
    if (element.matches("svg") === true || element.matches("i") === true) {
        console.log(element);    
        for (let i = 0; i < inputSlotList.length; i++) {
            if (inputSlotList[i].value && inputSlotList[i].id === element.id) {
                todos.push(inputSlotList[i].value + ' ' + inputSlotList[i].id);
                storeTodos();
                inputSlotList[i].value = "";
            }   
        }    
    }
    renderTodos();
})

init();



