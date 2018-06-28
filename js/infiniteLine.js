function InfiniteLine(game) {
    this.game = game;
    this.y = 502;
    this.x = 900;
}

InfiniteLine.prototype.draw = function () {
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(0, this.y);
    this.game.ctx.lineWidth = 60;
    this.game.ctx.lineTo(this.x, this.y);
    this.game.ctx.closePath();
    this.game.ctx.stroke();
};

