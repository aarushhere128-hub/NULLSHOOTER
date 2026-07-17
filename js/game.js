import Renderer from "./renderer.js";
import Input from "./input.js";
export default class Game {

    constructor() {

        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.renderer = new Renderer(this.canvas);
        this.input = new Input();


this.player = {
    x: this.width / 2,
    y: this.height / 2,
    size: 50
};

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.lastTime = 0;
        this.running = false;

        this.resize();

        window.addEventListener("resize", () => {
            this.resize();
        });
    }


    resize() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

    }


    start() {

        this.running = true;

        requestAnimationFrame((time) => {
            this.loop(time);
        });

    }


    loop(currentTime) {

        if (!this.running) return;


        // Calculate time between frames
        const deltaTime = currentTime - this.lastTime;

        this.lastTime = currentTime;


        this.update(deltaTime);

        this.render();


        requestAnimationFrame((time) => {
            this.loop(time);
        });

    }


    update(deltaTime) {

    const speed = 5;


    if (this.input.isDown("w")) {
        this.player.y -= speed;
    }

    if (this.input.isDown("s")) {
        this.player.y += speed;
    }

    if (this.input.isDown("a")) {
        this.player.x -= speed;
    }

    if (this.input.isDown("d")) {
        this.player.x += speed;
    }

}


   render() {

    this.renderer.render({
        player: this.player
    });

}

}
