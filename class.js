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
        if (this.xSpeed === 20) {
            this.xPos = this.xPos + this.xSpeed;
        } else if (this.ySpeed === 20) {
            this.yPos = this.yPos + this.ySpeed;
        }
    }
}

class StandaardBlok extends SpelElement {
    constructor(_xPos, _yPos) {
        super(_xPos, _yPos);
    }
}

class Finish extends SpelElement {
    constructor(_xPos, _yPos) {
        super(_xPos, _yPos);
    }
}