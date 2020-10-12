class Achtergrond { //maakt de achtergrond bij gameplay
    show() {
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
    }
}

class Voorgrond { //maakt de voorgrond bij gameplay
    show() {
        //level en moves
        stroke(0, 0, 0);
        fill(0, 22, 150); //level
        rect(-1, -1, 121, 121);
        fill(150, 22, 0); //moves
        rect(1800, 0, 121, 121);//level en moves
    }
}