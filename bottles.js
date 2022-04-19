function preload(){
    img=loadImage('bottle.jpg');
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill('red');
    text("Bottle", 170, 20);
    noFill();
    stroke('red');
    rect(160, 0, 470, 418);
}

function back(){
    window.location="index.html";
}