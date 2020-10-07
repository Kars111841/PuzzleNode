class SpelElement {
    xPos;
    yPos;

    constructor(_xPos, _yPos) {
        this.xPos = _xPos;
        this.yPos = _yPos;
    }
}

class Speler extends SpelElement {
    xSpeed;
    ySpeed;
    status;

    constructor(_xPos, _yPos, _xSpeed, _ySpeed, _status) {
        super(_xPos, _yPos);
        this.xSpeed = _xSpeed;
        this.ySpeed = _ySpeed;
        this.status = _status;
    }

    display() {
        stroke(0, 0, 0);
        if (this.status) {
            fill(159, 87, 168);
        } else { fill(60, 60, 60); }
        rect(this.xPos - 20, this.yPos - 20, 40, 40);
        if (this.status) { fill(210, 142, 220); } else {
            fill(20, 20, 20);
        }
        rect(this.xPos + 20, this.yPos + 5, 10, 10);
        rect(this.xPos + 20, this.yPos - 15, 10, 10);
        rect(this.xPos - 30, this.yPos + 5, 10, 10);
        rect(this.xPos - 30, this.yPos - 15, 10, 10);
        rect(this.xPos + 5, this.yPos + 20, 10, 10);
        rect(this.xPos - 15, this.yPos + 20, 10, 10);
        rect(this.xPos + 5, this.yPos - 30, 10, 10);
        rect(this.xPos - 15, this.yPos - 30, 10, 10);
    }

    fuckingdoiets() {
        this.xPos += this.xSpeed;
        this.yPos += this.ySpeed;
    }
}

class StandaardBlok extends SpelElement {
    constructor(_xPos, _yPos) {
        super(_xPos, _yPos);
    }

    display() {
        stroke(0, 0, 0);
        fill(120, 120, 120);
        rect((this.xPos * 60), (this.yPos * 60), 60, 60);
    }
}

class Finish extends SpelElement {
    constructor(_xPos, _yPos) {
        super(_xPos, _yPos);
    }

    display() {
        noStroke();
        fill(0, 0, 0);
        rect(this.xPos * 60, this.yPos * 60, 60, 60);
        fill(255, 255, 255);
        rect(this.xPos * 60, this.yPos * 60, 15, 15);
        rect(this.xPos * 60, this.yPos * 60 + 30, 15, 15);
        rect(this.xPos * 60 + 30, this.yPos * 60, 15, 15);
        rect(this.xPos * 60 + 30, this.yPos * 60 + 30, 15, 15);
        rect(this.xPos * 60 + 15, this.yPos * 60 + 15, 15, 15);
        rect(this.xPos * 60 + 15, this.yPos * 60 + 45, 15, 15);
        rect(this.xPos * 60 + 45, this.yPos * 60 + 15, 15, 15);
        rect(this.xPos * 60 + 45, this.yPos * 60 + 45, 15, 15);
    }
}