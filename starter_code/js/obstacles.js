function Obstacles(game) {
    this.game = game;
    this.x = 600;
    this.y = 500;
    this.vx = 8;

}

Obstacles.prototype.draw = function () {
    this.game.ctx.beginPath();
    this.game.ctx.fillStyle = "grey";
    this.game.ctx.moveTo(this.x, 472); 
    this.game.ctx.lineWidth = 1;
    this.game.ctx.lineTo(this.x + 100, 472);
    this.game.ctx.lineTo(this.x + 50, 420); 
    this.game.ctx.closePath(); 
    this.game.ctx.fill(); 
};

Obstacles.prototype.moveAll = function () {
    this.x -= this.vx;
};