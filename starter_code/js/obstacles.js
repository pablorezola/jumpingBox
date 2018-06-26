function Obstacles(game) {
    this.game = game;
    this.x = this.game.canvas.width * 1.11;
    this.y0 = this.game.canvas.height * 0.85;
    this.y = this.y0;
    this.vx = 8;
    this.width = 50;
    this.height = 50;

}

Obstacles.prototype.draw = function () {
    this.game.ctx.beginPath();
    this.game.ctx.fillStyle = "grey";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.game.ctx.closePath();
    this.game.ctx.stroke();
};

Obstacles.prototype.moveAll = function () {
    this.x -= this.vx;
};

    // triangulo

   /* this.x = 1000;
    this.y = 422; */

    /*this.game.ctx.beginPath();
    this.game.ctx.fillStyle = "grey";
    this.game.ctx.moveTo(this.x, this.y); 
    this.game.ctx.lineWidth = 1;
    this.game.ctx.lineTo(this.x + 100, this.y);
    this.game.ctx.lineTo(this.x + 50, 420); 
    this.game.ctx.closePath(); 
    this.game.ctx.fill(); */