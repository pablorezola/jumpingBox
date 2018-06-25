function InfiniteLine(game) {

    this.game = game;
    this.game.ctx.moveTo(0, 400);
    this.game.ctx.lineTo(800, 400);
    this.game.ctx.stroke();
}

InfiniteLIne.prototype.draw = function () {

};

