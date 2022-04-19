function preload(){
    img=loadImage('ac and tv.jpg');
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill('red');
    text("Tv", 100, 120);
    noFill();
    stroke('red');
    rect(90, 105, 150, 160);
    fill('red');
    text("Tv", 100, 120);
    noFill();
    stroke('red');
    rect(90, 105, 150, 160);
    text("AC", 110, 30);
    rect(100, 10, 130, 100);

}

function back(){
    window.location="index.html";
}