import Renderer from "./renderer.js";
import Renderer from "./renderer.js";
import Player from "./player.js";
import Input from "./input.js";
export default class Game {

    constructor() {

      this.canvas = document.getElementById("gameCanvas");
this.ctx = this.canvas.getContext("2d");


this.width = window.innerWidth;
this.height = window.innerHeight;


this.renderer = new Renderer(this.canvas);
this.input = new Input();

this.player = new Player(
    this.width / 2,
    this.height / 2
);
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

    this.player.update(this.input);

}


   render() {

    this.renderer.render({
        player: this.player
    });

}

}
