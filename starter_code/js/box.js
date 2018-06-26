function Box(game) {
    this.game = game;
    this.vx = 0.04;
    this.width = 50;
    this.height = 50;
    this.vy = 2;
    this.keyBoard();
    this.x = this.game.canvas.width * 0.07;
    this.y0 = this.game.canvas.height * 0.85;
    this.y = this.y0;
}

Box.prototype.draw = function () {
    this.game.ctx.fillStyle = "#E88D20";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.game.ctx.stroke();
};
Box.prototype.keyBoard = function () {
    document.onkeydown = function (event) {
        if (event.keyCode === SPACE && this.y == this.y0) {
            this.y -= 85;
            this.vy -= 5;
        } else {
            event.preventDefault();
        }
    }.bind(this);

};

Box.prototype.moveAll = function () {
    this.x += this.vx;
    var gravity = 0.2;
    if (this.y >= this.y0) {
        this.y = this.y0;
    } else {
        this.vy += gravity;
        this.y += this.vy;
    }
};

var SPACE = 32;