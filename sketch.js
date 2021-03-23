var canvas;
var gameState=0,contestantCount;
var database,quiz;
var question,contestant;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount===4){
    quiz.update(1)
}


}

  

