$(document).ready(function(){




    var userPick;
    var answers = {
        correct: 0,
        incorrect: 0
    };
    var images;
    var count = 5;
    var myVar;
    
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

   

   
   $('#start').click(function () {
       timer();
       trivia();
       
   })

    //timer 

   function timer() {
       myVar = setInterval(countDown, 1000);
   }

   function countDown () {
        count--;
        $('#timer').html(count)
        

        if (count === 0) {
            count = 5;
            current++;
            console.log(current);
            $('#choices_div').empty();
            trivia();
        }
   }

   //display questions

   function trivia() {
       $("#question_div").html(questions[current].question);
       var choicesArr = questions[current].choices;
       var buttonsArr = [];
   

   for (var i = 0; i < choicesArr.length; i++) {
                var button = $('<button>');
                button.text(choicesArr[i]);
                button.attr('data-id', i);
                $('#choices_div').append(button);
            }
}
     $('#choices_div').on('click', 'button', function(e) {
       userPick = $(this).data("id"),
        index = questions[current].correct;
        correct = questions[current].choices[index];

    if (userPick !== index) {
        $('#choices_div').text("Wrong Answer! The correct answer was: " + correct);
        answers.incorrect++;
    } else {
        $('#choices_div').text("Correct!!! The correct answer was: " + correct);
        answers.corret++;
    }
    
});




































});