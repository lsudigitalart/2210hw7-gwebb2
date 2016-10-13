var song;
song.play();

function preload() {
  song = loadSound("music/music.mp3");
}

function setup() {
  createCanvas(1100, 500);
  noStroke();
  background(random(255), random(255), random(255));
  song.play();

}

function draw(){
var currentTime = millis()
var squarestate = 76;
var rectstate = 1;
//var doonce = 1;
rectMode(CENTER);
background(0, 0, 0, 1);
noStroke();

if(currentTime > 2000) {
  if(squarestate == 76) {
  //background(0);
  //doonce = 0;
}
squarestate = 75;
}
else {
  if(squarestate == 76) {
    fill(255);
    rect(400, 300, 50, 50);
  }
  //doonce = 1

}

if(currentTime > 2800) {
  if(squarestate == 75) {
  //background(0);
  //doonce = 0;
}
squarestate = 74;
}
else {
  if(squarestate == 75) {
    fill(255);
    rect(500, 200, 50, 50);
  }
  //doonce = 1;
}

if(currentTime > 3600) {
if(doonce == 1 && squarestate == 74) {
//background(0);
  doonce = 0;
}
squarestate = 73;
}
else {
  if(squarestate == 74) {
    fill(255);
    rect(600, 100, 50, 50);
  }
  doonce = 1;
}

if(currentTime > 5200) {
  if(squarestate == 73) {
  //background(0);
  //doonce = 0;
}
squarestate = 72;
}
else {
  if(currentTime > 4400) {
  if(squarestate == 73) {
    fill(255);
    rect(400, 300, 50, 50);
  }
  //doonce = 1
}
}

// Rect 1

if(currentTime > 5866.67) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 4400) {
  if(rectstate = 1) {
    fill(255);
    rect(662.5, 300, 75, 50);
  }
  //doonce = 1;
}
}

// Rect 2

if(currentTime > 6000) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 5866.67) {
  if(rectstate = 1) {
  fill(225);
    rect(437.5, 450, 75, 50);
  }
  //doonce = 1;
}
}

if(currentTime > 6000) {
  if(squarestate == 72) {
  //background(0);
  //doonce = 0;
}
squarestate = 71;
}
else {
  if(squarestate == 72) {
    fill(255);
    rect(500, 200, 50, 50);
  }
  //doonce = 1;
}

// Rect 3

if(currentTime > 7466.67) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 6000) {
  if(rectstate = 1) {
    fill(255);
    rect(812.5, 200, 75, 50);
  }
  //doonce = 1;
}
}

if(currentTime > 6800) {
if(doonce == 1 && squarestate == 71) {
  //background(0);
  doonce = 0;
}
squarestate = 70;
}
else {
  if(squarestate == 71) {
    fill(255);
    rect(600, 100, 50, 50);
  }
  doonce = 1;
}

// Rect 4

if(currentTime > 7600) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 7466.67) {
  if(rectstate = 1) {
    fill(255);
    rect(662.5, 300, 75, 50);
  }
  //doonce = 1;
}
}


if(currentTime > 8400) {
  if(squarestate == 70) {
  //background(0);
  //doonce = 0;
}
squarestate = 69;
}
else {
  if(currentTime > 7600) {
  if(squarestate == 70) {
    fill(255);
    rect(400, 300, 50, 50);
  }
  //doonce = 1
}
}

if(currentTime > 9200) {
  if(squarestate == 69) {
  //background(0);
  //doonce = 0;
}
squarestate = 68;
}
else {
  if(squarestate == 69) {
    fill(255);
    rect(500, 200, 50, 50);
  }
  //doonce = 1;
}

// Rect 5

if(currentTime > 10000) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 7600) {
  if(rectstate = 1) {
    fill(255);
    rect(962.5, 100, 75, 50);
  }
  //doonce = 1;
}
}

// Rect 6

if(currentTime > 10200) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 10000) {
  if(rectstate = 1) {
    fill(255);
    rect(850, 175, 75, 50);
  }
  //doonce = 1;
}
}

if(currentTime > 10000) {
  if(doonce == 1 && squarestate == 68) {
  //background(0);
  doonce = 0;
}
squarestate = 67;
}
else {
  if(squarestate == 68) {
    fill(255);
    rect(600, 100, 50, 50);
  }
  doonce = 1;
}

// Rect 7

if(currentTime > 10400) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 10200) {
  if(rectstate = 1) {
    fill(255);
    rect(812.5, 200, 75, 50);
  }
  //doonce = 1;
}
}

// Rect 8

if(currentTime > 10600) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 10400) {
  if(rectstate = 1) {
    fill(255);
    rect(737.5, 250, 75, 50);
  }
  //doonce = 1;
}
}

// Rect 9

if(currentTime > 10800) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 10600) {
  if(rectstate = 1) {
    fill(255);
    rect(662.5, 300, 75, 50);
  }
  //doonce = 1;
}
}

if(currentTime > 10800) {
  if(squarestate == 67) {
  //background(0);
  //doonce = 0;
}
squarestate = 66;
}
else {
  if(squarestate == 67) {
    fill(255);
    rect(400, 300, 50, 50);
  }
  //doonce = 1
}

// Rect 10

if(currentTime > 11600) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 10800) {
  if(rectstate = 1) {
    fill(255);
    rect(700, 275, 75, 50);
  }
  //doonce = 1;
}
}

if(currentTime > 11600) {
  if(squarestate == 66) {
  //background(0);
  //doonce = 0;
}
squarestate = 65;
}
else {
  if(squarestate == 66) {
    fill(255);
    rect(250, 450, 50, 50);
  }
  //doonce = 1
}

// Rect 11

if(currentTime > 12400) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 11600) {
  if(rectstate = 1) {
    fill(255);
    rect(737.5, 250, 75, 50);
  }
  //doonce = 1;
}
}

if(currentTime > 12400) {
  if(squarestate == 65) {
  //background(0);
  //doonce = 0;
}
squarestate = 64;
}
else {
  if(squarestate == 65) {
    fill(255);
    rect(350, 350, 50, 50);
  }
  //doonce = 1
}

if(currentTime > 13200) {
  if(squarestate == 64) {
  //background(0);
  //doonce = 0;
}
squarestate = 63;
}
else {
  if(squarestate == 64) {
    fill(255);
    rect(450, 250, 50, 50);
  }
  //doonce = 1
}

if(currentTime > 14800) {
  if(squarestate == 63) {
  //background(0);
  //doonce = 0;
}
squarestate = 62;
}
else {
  if(currentTime > 14000){
  if(squarestate == 63) {
    fill(255);
    rect(250, 450, 50, 50);
  }
  //doonce = 1
}
}

// Rect 12

if(currentTime > 15600) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 14000) {
  if(rectstate = 1) {
    fill(255);
    rect(437.5, 450, 75, 50);
  }
  //doonce = 1;
}
}

if(currentTime > 15600) {
  if(squarestate == 62) {
  //background(0);
  //doonce = 0;
}
squarestate = 61;
}
else {
  if(squarestate == 62) {
    fill(255);
    rect(350, 350, 50, 50);
  }
  //doonce = 1
}

// Rect 13

if(currentTime > 16400) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 15600) {
  if(rectstate = 1) {
    fill(255);
    rect(587.5, 350, 75, 50);
  }
  //doonce = 1;
}
}

if(currentTime > 16400) {
  if(squarestate == 61) {
  //background(0);
  //doonce = 0;
}
squarestate = 60;
}
else {
  if(squarestate == 61) {
    fill(255);
    rect(450, 250, 50, 50);
  }
  //doonce = 1
}

// Rect 14

if(currentTime > 17200) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 16400) {
  if(rectstate = 1) {
    fill(255);
    rect(737.5, 250, 75, 50);
  }
  //doonce = 1;
}
}

if(currentTime > 18000) {
  if(squarestate == 60) {
  //background(0);
  //doonce = 0;
}
squarestate = 59;
}
else {
  if(currentTime > 17200){
  if(squarestate == 60) {
    fill(255);
    rect(250, 450, 50, 50);
  }
  //doonce = 1
}
}

if(currentTime > 18800) {
  if(squarestate == 59) {
  //background(0);
  //doonce = 0;
}
squarestate = 58;
}
else {
  if(squarestate == 59) {
    fill(255);
    rect(350, 350, 50, 50);
  }
  //doonce = 1
}

// Rect 15

if(currentTime > 19200) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 17200) {
  if(rectstate = 1) {
    fill(255);
    rect(850, 162.5, 75, 50);
  }
  //doonce = 1;
}
}

// Rect 16

if(currentTime > 19600) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 19200) {
  if(rectstate = 1) {
    fill(255);
    rect(1037.5, 50, 75, 50);
  }
  //doonce = 1;
}
}

if(currentTime > 19600) {
  if(squarestate == 58) {
  //background(0);
  //doonce = 0;
}
squarestate = 57;
}
else {
  if(squarestate == 58) {
    fill(255);
    rect(450, 250, 50, 50);
  }
  //doonce = 1
}

// Rect 17

if(currentTime > 20000) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 19600) {
  if(rectstate = 1) {
    fill(255);
    rect(962.5, 100, 75, 50);
  }
  //doonce = 1;
}
}

// Rect 18

if(currentTime > 20400) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 20000) {
  if(rectstate = 1) {
    fill(255);
    rect(850, 162.5, 75, 50);
  }
  //doonce = 1;
}
}

if(currentTime > 20400) {
  if(squarestate == 57) {
  //background(0);
  //doonce = 0;
}
squarestate = 56;
}
else {
  if(squarestate == 57) {
    fill(255);
    rect(250, 450, 50, 50);
  }
  //doonce = 1
}

// Rect 19

if(currentTime > 20800) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 20400) {
  if(rectstate = 1) {
    fill(255);
    rect(775, 237.5, 75, 50);
  }
  //doonce = 1;
}
}


if(currentTime > 21200) {
  if(squarestate == 56) {
  //background(0);
  //doonce = 0;
}
squarestate = 55;
}
else {
  if(squarestate == 56) {
    fill(255);
    rect(400, 300, 50, 50);
  }
  //doonce = 1
}

// Rect 20

if(currentTime > 21200) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 20800) {
  if(rectstate = 1) {
    fill(255);
    rect(812.5, 200, 75, 50);
  }
  //doonce = 1;
}
}

if(currentTime > 22000) {
  if(squarestate == 55) {
  //background(0);
  //doonce = 0;
}
squarestate = 54;
}
else {
  if(squarestate == 55) {
    fill(255);
    rect(500, 200, 50, 50);
  }
  //doonce = 1;
}

// Rect 21

if(currentTime > 21600) {
  if(rectstate == 1) {
  //background(0);
  //doonce = 0;
}
rectstate = 0;
}
else {
  if(currentTime > 21200) {
  if(rectstate = 1) {
    fill(255);
    rect(812.5, 200, 75, 50);
  }
  //doonce = 1;
}
}

if(currentTime > 22800) {
if(doonce == 1 && squarestate == 54) {
  //background(0);
  //doonce = 0;
}
squarestate = 53;
}
else {
  if(squarestate == 54) {
    fill(255);
    rect(600, 100, 50, 50);
  }
  //doonce = 1;
}


if(currentTime > 24100) {
  if(squarestate == 53) {
  //background(0);
  //doonce = 0;
}
squarestate = 52;
}
else {
  if(squarestate == 53) {
    fill(255);
    rect(500, 200, 50, 50);
  }
  //doonce = 1
}

if(currentTime > 25400) {
  if(squarestate == 52) {
  //background(0);
  //doonce = 0;
}
squarestate = 51;
}
else {
  if(squarestate == 52) {
    fill(255);
    rect(400, 300, 50, 50);
  }
  //doonce = 1
}

}
