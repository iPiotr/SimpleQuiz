function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;


    if (question1 == "good") {
        correct++;
    }
    if (question2 == "good") {
        correct++;
    }
    if (question3 == "good") {
        correct++;
    }

    var messages = ["Great job!", "That's just okay", "You really need to do better"];
    var score;

    if (correct == 0) {
        score = 2;
        document.querySelector('#submit').style.background = "#a71912";
    }

    if (correct > 0 && correct < 3) {
        score = 1;
        document.querySelector('#submit').style.background = "#979494";
    }

    if (correct == 3) {
        score = 0;
        document.querySelector('#submit').style.background = "#0e8013";
    }

    document.querySelector("#message").innerHTML = messages[score];
    document.querySelector("#number-correct").innerHTML = "You got " + correct + " correct.";
    document.querySelector('#submit').style.visibility = "visible";

}