function preload(){
    img=loadImage('fruit.jpg');
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill('red');
    text("Fruit Basket", 110, 20);
    noFill();
    stroke('red');
    rect(100, 0, 485, 418);
}

function back(){
    window.location="index.html";
}