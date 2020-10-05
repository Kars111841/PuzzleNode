var aTest = new Speler(400, 500, 20, 0, true)
var bTest = new Speler(200, 500, 0, 0, false)

function setup() {
    createCanvas(1920, 1080);
}

function draw() {
    //achtergrond
    background(200, 200, 200);
    noStroke();
    fill(120, 120, 120);
    rect(121, 0, 1800, 60);
    rect(0, 121, 60, 960);
    rect(1860, 0, 60, 1080);
    rect(0, 1020, 1920, 60);
    stroke(0, 0, 0);
    line(121, 60, 1860, 60);
    line(60, 1020, 1860, 1020);
    line(60, 121, 60, 1020);
    line(1860, 60, 1860, 1020);

    aTest.display();
    bTest.display();
    aTest.move();



    //level en moves
    fill(0, 22, 150); //level
    rect(-1, -1, 121, 121);
    fill(150, 22, 0); //moves
    rect(1800, 0, 121, 121);



}