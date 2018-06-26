function InfiniteLine(game) {
    this.game = game;
}

InfiniteLine.prototype.draw = function () {
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(0, 502);
    this.game.ctx.lineWidth = 60;   
    this.game.ctx.lineTo(900, 502);
    this.game.ctx.closePath();
    this.game.ctx.stroke();
};

