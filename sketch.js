var canvas,backgroundimg;
var gameState = 0 ;
var contestantCount;
var allContestants;
var answer,database ;
var question,contestant,quiz;

function setup (){
    canvas = createCanvas (900,450)
    database = firebase.database ();
    quiz = new Quiz ();
    quiz.getState ();
    quiz.start ();
}

function draw (){
    background("turqoise")
    if(contestantCount == 2 ){
        quiz.update (1)
    }

    if(gameState == 1){
        clear();
        quiz.play ();
    }
}