export default class Renderer {

    constructor(canvas) {

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

    }


    clear() {

        this.ctx.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

    }


    drawBackground() {

        this.ctx.fillStyle = "#111";

        this.ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

    }


    drawPlayer(player) {

        this.ctx.fillStyle = "#00ff88";

        this.ctx.fillRect(
            player.x - player.size / 2,
            player.y - player.size / 2,
            player.size,
            player.size
        );

    }


    render(gameState) {

        this.clear();

        this.drawBackground();


        // Draw game objects here later

        if (gameState.player) {
            this.drawPlayer(gameState.player);
        }

    }

}
