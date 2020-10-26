

//-------------------------------------------

//dimensie scherm is 30-16

var nieuwObject;
var displayGronden = [];
var coreRun = [];
var spelElementen = [];



function setup() {
    createCanvas(1920, 1080);
    //setup
    nieuwObject = new Achtergrond();
    displayGronden.push(nieuwObject);
    nieuwObject = new Voorgrond();
    displayGronden.push(nieuwObject);

    nieuwObject = new Game();
    coreRun.push(nieuwObject);
    nieuwObject = new Menu();
    coreRun.push(nieuwObject);
    nieuwObject = new Gameplay();
    coreRun.push(nieuwObject);
}

function draw() {
    coreRun[0].run();
}