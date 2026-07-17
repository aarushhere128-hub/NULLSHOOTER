export default class Player {

    constructor(x, y) {

        this.x = x;
        this.y = y;

        this.size = 50;

        this.speed = 5;

        this.health = 100;

    }


    update(input) {

        if (input.isDown("w")) {
            this.y -= this.speed;
        }

        if (input.isDown("s")) {
            this.y += this.speed;
        }

        if (input.isDown("a")) {
            this.x -= this.speed;
        }

        if (input.isDown("d")) {
            this.x += this.speed;
        }

    }


    takeDamage(amount) {

        this.health -= amount;

        if (this.health < 0) {
            this.health = 0;
        }

    }


    heal(amount) {

        this.health += amount;

        if (this.health > 100) {
            this.health = 100;
        }

    }

}
