

//-------------------------------------------

//dimensie scherm is 30-16

var blok;
var blokken = [];
var aTest = [];


function setup() {
    createCanvas(1920, 1080);
    for(var i = 0; i < 4; i++) {
        blok = new StandaardBlok(2 + i, 4);
        blokken.push(blok);
    }
    blok = new Finish(8, 4);
    blokken.push(blok);

    blok = new Speler(200, 600, 15, 0, true);
    aTest.push(blok);
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




    aTest[0].display();
    aTest[0].fuckingdoiets();


    for(var i = 0; i < blokken.length; i++) {
        blokken[i].display();
    }

    //level en moves
    stroke(0, 0, 0);
    fill(0, 22, 150); //level
    rect(-1, -1, 121, 121);
    fill(150, 22, 0); //moves
    rect(1800, 0, 121, 121);



}