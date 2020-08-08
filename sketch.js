var ball;
var hypnoticBall,database;
var position;

function setup(){

    database = firebase.database();
    console.log(database);

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var hypnoticBallPosition = database.ref('ball/position');
 hypnoticBallPosition.on("value",readPosition);
}

function draw(){
    background("white");

    

    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}


function readPosition(data){

    position= data.val();
    console.log(position.x)
    hypnoticBall.x=position.x;
    hypnoticBall.y = position.y ;   
}


function writePosition(x,y){

    database.ref('ball/position').set({
       'x': position.x +x,
       'y': position.y+y
    })
}