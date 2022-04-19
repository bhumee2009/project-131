function preload(){
    img=loadImage('desk1.jpg');
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill('red');
    text("Desk", 20, 108);
    noFill();
    stroke('red');
    rect(10, 90, 620, 320);
}

function back(){
    window.location="index.html";
}