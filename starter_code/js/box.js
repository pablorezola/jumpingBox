function Box(game) {
    this.game = game;
    this.game.ctx.fillStyle = "blue";
    this.game.ctx.fillRect(30, 350, 50, 50);
    this.game.ctx.stroke();

    /*this.box.vx = 4;
    this.box.vy = 1;
    this.box.a = 2; */
}

Box.prototype.draw = function () {

};

Box.prototype.move = function () {

};


var SPACE = 32;