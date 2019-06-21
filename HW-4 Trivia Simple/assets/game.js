$("#mainbox").hide();
$("#go").on("click", go);
$("#question2").hide();
$("#question3").hide();
$("#question4").hide();
$("#question5").hide();
$("#endcard").hide();
$("#next1").on("click", q2);
$("#next2").on("click", q3);
$("#next3").on("click", q4);
$("#next4").on("click", q5);
$("#finish").on("click", finish);
$("#playagain").on("click", reset);
$("#timer").hide();

var intervalId;
var clockRunning = false;
var time = 60;
// here
var rightanswers = 0;

function go() {
    $("#mainbox").show();
    $("#question1").show();
    $("#timer").show();
    $("#go").hide();
    if (time != 0) {
    intervalId = setInterval(count, 1000);
  }
}
function count() {
    time--;
    $("#timer").text(time);
    // here
}

function reset() {
    time = 60;
    rightanswers = 0;
    clearTimeout(intervalId);
    $("#timer").hide();
    $("#endcard").hide();
    $("#go").show();
    $("#mainbox").hide();
}

// I tried to put this in a few places to create an end condition when time=0. Not sure why it doesn't work. I put "here" in the places I tried it.
// if (time=0) {
//     $("#question1").hide();   
//     $("#question2").hide();
//     $("#question3").hide();
//     $("#question4").hide();
//     $("#question5").hide();
//     $("#endcard").show();
// }

function q2() {
    $("#question1").hide();
    $("#question2").show();
    var radioValue = $("input[name='1t']:checked").val();
    if(radioValue) {
        rightanswers++;
    }
}
function q3() {
    $("#question2").hide();
    $("#question3").show();
    var radioValue = $("input[name='2t']:checked").val();
    if(radioValue) {
        rightanswers++;
    }
}
function q4() {
    $("#question3").hide();
    $("#question4").show();
    var radioValue = $("input[name='3t']:checked").val();
    if(radioValue) {
        rightanswers++;
    }
}
function q5() {
    $("#question4").hide();
    $("#question5").show();
    var radioValue = $("input[name='4t']:checked").val();
    if(radioValue) {
        rightanswers++;
    }
}
function finish() {
    $("#question5").hide();
    $("#endcard").show();
    var radioValue = $("input[name='5t']:checked").val();
    if(radioValue) {
        rightanswers++;
    }
$("#numright").text("You got " + rightanswers + " out of 5 correct!");

}
