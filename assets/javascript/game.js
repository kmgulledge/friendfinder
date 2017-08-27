// White belt coding ninja javascript

function Question(text, choices, answer) {
    this.text=text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
    this.questionIndex++;

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}

// Populate Score
function populate() {
    if (quiz.isEnded()){
        showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex = 1;
    var element = document.getElementById("progress");
    element.innerHTML - "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};



function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// Question Variable
var questions = [
    new Question("Goonies never say what?", ["Die", "Love", "Time to eat", "Ice Cream"], "Die"),
    new Question("What year was the Goonies made?", ["1984", "1985", "1986", "1987"], "1985"),
    new Question("Where did they find the treasure map?", ["Basement", "Garage", "Attic", "Living Room"], "Attic"),
    new Question("Who did the Truffle Shuffle?", ["Mikey", "Brand", "Mouth", "Chunk"] , "Chunk"),
    new Question("Who's treasure were they looking for?", ["Redbeard", "Blackbeard", "One Eye Willy", "Two Eye Willy"], "One Eye Willy"),
    new Question("What was the name of the town the Goonies were from?", ["Toronto", "Astoria", "Charlotte", "Dallas"], "Astoria"),
    new Question("What does Mouth tease Brand about?", ["Flunking his driver's test", "Andy turning him down for a date", "His sweat band", "His sweet bike"], "Flunking his driver's test"),
    new Question("Who kissed Andy in the cave?", ["Brand", "Mikey", "Chunk", "Data"], "Mikey"),
    new Question("What superhero shirt was Sloth wearing?", ["Batman", "Flash", "Superman", "Green Lantern"], "Superman"),
    new Question("What was the name of the treasure hunter they read about?", ["Indiana Jones", "Allan Quatermain", "Jonny Quest", "Chester Copperpot"], "Chester Copperpot")
    ];

    var quiz = new Quiz(questions);

    populate();