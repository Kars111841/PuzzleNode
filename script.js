

//-------------------------------------------

//dimensie scherm is 30-16

var leegObject;
var gronden = [];

var blok;
var blokken = [];
var aTest = [];


function setup() {
    createCanvas(1920, 1080);
    for (var i = 0; i < 4; i++) {
        blok = new StandaardBlok(2 + i, 4);
        blokken.push(blok);
    }
    blok = new Finish(8, 4);
    blokken.push(blok);

    blok = new Speler(200, 600, 15, 0, true);
    aTest.push(blok);

    leegObject = new Achtergrond();
    gronden.push(leegObject);
    leegObject = new Voorgrond();
    gronden.push(leegObject);
    leegObject = new Gameplay();
    gronden.push(leegObject);
}

function draw() {
    /* gronden[0].show();

    aTest[0].display();
    aTest[0].fuckingdoiets();


    for (var i = 0; i < blokken.length; i++) {
        blokken[i].display();
    }

    gronden[1].show(); */

    gronden[2].run();
}