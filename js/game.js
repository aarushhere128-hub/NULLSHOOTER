import Renderer from "./renderer.js";
export default class Game {

    constructor() {

        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.renderer = new Renderer(this.canvas);


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

        // Game logic goes here later
        // Player movement
        // Enemy AI
        // Bullets
        // Collision

    }


   render() {

    this.renderer.render({
        player: this.player
    });

}


        // Temporary test drawing
        // Remove later when renderer.js exists

        this.ctx.fillStyle = "#111";
        this.ctx.fillRect(
            0,
            0,
            this.width,
            this.height
        );


        this.ctx.fillStyle = "#00ff88";
        this.ctx.fillRect(
            this.width / 2 - 25,
            this.height / 2 - 25,
            50,
            50
        );

    }

}
