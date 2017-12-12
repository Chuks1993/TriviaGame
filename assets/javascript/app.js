$(document).ready(function(){




    var userPick;
    var answers = {
        correct: 0,
        incorrect: 0
    };
    var images;
    var count = 20;
    
    var current = 0;
    var questions = [{
        question: "What is 50 Cent's real name?",
        choices: ["Curtis Jackson", "Marshal Mathers", "Jimmy Newtron"],
        images: ["../images/50-cent.gif"],
        correct: 0
    }, {
        question: "Who won BET Hip Hop Award for Best New Hip Hop Artist in 2014?",
        choices: ["Young Thug", "Iggy Azalea", "Schoolboy Q"],
        images: ["../images/iggy.gif"],
        correct: 1

    },  {
        question: "Kayne West is under which Rap Label?",
        choices: ["Sony Records", "RocaFella", "Good Music"],
        images: ["../images/kanye-west.gif"],
        correct: 2
    }];

    function ask () {
        if (questions[current]) {
            $("#timer").html("Time remaining: " + "00:" + count + " secs");
            $("#question_div").html(questions[current].question);
            var choicesArr = questions[current].choices;
            var buttonsArr = [];

            for (var i = 0; i < choicesArr.length; i++) {
                var button = $('<button>');
                button.text(choicesArr[i]);
                button.attr('data-id', i);
                $('#choices_div').append(button);
            }
            window.triviaCounter = setInterval(timer, 1000);
        } else {
            $('body').append($('<div />', {
                text: 'Unanswered: ' + (
                    questions.length - (answers.correct + answers.incorrect)),
                class: 'result'
            }));
            $('#start_button').text('Restart').appendTo('body').show();
        }
    };
    function timer() {
        count--;
        if (count <= 0) {
            setTimeout(function() {
                nextQ();
            });

        } else {
            $("#timer").html("Time remaining: " + "00:" + count + " secs");
        }
    };
    function nextQ () {
        current++;
        clearInterval(window.triviaCounter);
        count = 30;
        $('#timer').html("");
        setTimeout(function() {
            cleanUp();
            ask();
        }, 1000)
    };
    cleanUp = function() {
        $('div[id]').each(function(item) {
            $(this).html('');
        });
        $('.correct').html('Correct answers: ' + answers.correct);
        $('.incorrect').html('Incorrect answers: ' + answers.incorrect);
    };
    answer = function(correct) {
        var string = correct ? 'correct' : 'incorrect';
        answers[string]++;
        $('.' + string).html(string + ' answers: ' + answers[string]);
    };
    return _t;
};
var Trivia;

$("#start_button").click(function() {
    $(this).hide();
    $('.result').remove();
    $('div').html('');
    Trivia = new $(window).trivia();
    Trivia.ask();
});

$('#choices_div').on('click', 'button', function(e) {
    var userPick = $(this).data("id"),
        _t = Trivia || $(window).trivia(),
        index = questions[current].correct,
        correct = questions[current].choices[index];

    if (userPick !== index) {
        $('#choices_div').text("Wrong Answer! The correct answer was: " + correct);
        answer(false);
    } else {
        $('#choices_div').text("Correct!!! The correct answer was: " + correct);
        answer(true);
    }
    nextQ();
});








































});